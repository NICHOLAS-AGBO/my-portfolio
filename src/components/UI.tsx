import {ReactNode, useCallback, useEffect, useMemo, useState} from "react";
import {createTheme, Paper, ThemeProvider, useMediaQuery} from "@mui/material";
import gsap from "gsap";


const mode = window.localStorage.mode;

const darkTheme:any = {
    palette: {
        mode: "dark",
        primary:{
            main: "#fff",
        },
        secondary:{
            main: "#000"
        }
    }
};
const lightTheme:any = {
    palette: {
        mode: "light",
        primary:{
            main: "#000",
        },
        secondary:{
            main: "#fff"
        }
    }
};

export default function UI({children}:{children:ReactNode}){
    const muiMedia = useMediaQuery("(prefers-color-scheme: dark)");
    const systemMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [theme, setTheme] = useState(lightTheme);

    //change theme icon
    const themeIcon = (mode:boolean)=> {
        gsap.to("#theme_icon>path", {
            duration: 1.5,
            color: "inherit",
            morphSVG: mode ? "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" :
                "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z",
            ease: "power4"
        });
    }


    //theme change function
    const changeTheme = useCallback(()=> {
        const active = theme.palette.mode === "light";
        if (theme.palette.mode === "dark") {
            setTheme(lightTheme);
            window.localStorage.setItem("mode","light");
        }
        if (theme.palette.mode === "light") {
            setTheme(darkTheme);
            window.localStorage.setItem("mode","dark");
        }
        themeIcon(active);
    },[theme]);

    //for controlling theme button clicks
    useEffect(() => {
        const themeButton = document.querySelector("#theme_btn");
        if (themeButton) {
            themeButton.addEventListener("click", changeTheme);
            return () => {
                themeButton.removeEventListener("click", changeTheme);
            }
        }
    });

    //for controlling theme active theme on refresh
    useEffect(()=>{
        const active = mode === "dark";

        if (mode){
            themeIcon(active);
            if (mode === "dark") setTheme(darkTheme);
            if (mode === "light") setTheme(lightTheme);
        }else {
            if (systemMode&&muiMedia) {
                setTheme(darkTheme);
                themeIcon(true);
            }
            else {
                setTheme(lightTheme);
                themeIcon(false);
            }
        }
    }, [muiMedia, systemMode]);

    const Theme = useMemo(()=>createTheme(theme),[theme]);

    return(
        <ThemeProvider theme={Theme}>
            <Paper
                elevation={0}
                sx={{borderRadius: 0, p: 0, m: 0}}>
            {children}
            </Paper>
        </ThemeProvider>
    );

}