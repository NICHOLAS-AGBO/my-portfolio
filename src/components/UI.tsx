import {ReactNode, useCallback, useEffect, useMemo, useState} from "react";
import {
    AppBar, Box, Collapse,
    createTheme, IconButton,
    Paper,
    styled, Switch,
    ThemeProvider,
    Toolbar, Tooltip,
    Unstable_Grid2 as Grid,
    useMediaQuery
} from "@mui/material";
import {GitHub, Menu, MenuOpen} from "@mui/icons-material";
import {NavLink} from "react-router-dom";


//Theme variables
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
const mode = window.localStorage.mode;

//Links Navbar
const links = ['Home','About me',"Portfolio", "Contact","More"];

// customized components
const Item = styled(NavLink)(({theme})=>({
    ...theme.typography.body2,
    color: theme.palette.primary.main,
    padding: theme.spacing(2),
    textDecoration: "none",
    cursor: "pointer",
    "&:hover":{
        backgroundColor:theme.palette.action.hover,
    }
}));
const Logo = styled(NavLink)(()=>({}))
const ThemeSwitch = styled(Switch)(({ theme }) => ({
    width: 80,
    height: 50,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        marginLeft: theme.spacing(0.5),
        marginTop: theme.spacing(1.1),
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            marginTop: theme.spacing(1.1),
            color: '#000',
            transform: 'translateX(33px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#000',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                borderRadius: theme.spacing(8),
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.15)' : '#f2f2f2',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.15)' : 'lightgrey',
        borderRadius: theme.spacing(8),
    },
}));

export default function UI({children}:{children:ReactNode}){
    const muiMedia = useMediaQuery("(prefers-color-scheme: dark)");
    const systemMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [theme, setTheme] = useState(lightTheme);
    const [menu, setMenu] = useState(false);

    const NavBar = styled(AppBar)(({theme})=>({
        backgroundColor: theme.palette.mode === "dark" ?
            "rgba(16,16,16,0.9)" :
            menu?"rgba(255,255,255,0.9)":"rgba(255,255,255,0.25)"
        ,
        backdropFilter: "blur(8px)"
    }));
    const Flex = styled(Grid)(({theme})=>({
        py: theme.spacing(3),
        position: "absolute",
        textAlign: "center",
        zIndex: 2,
        backgroundColor: theme.palette.mode === "dark" ?
            "rgba(16,16,16,0.9)" :
            menu?"rgba(255,255,255,0.9)":"rgba(255,255,255,0.25)"
        ,
        backdropFilter: "blur(8px)",
        width: "inherit",
        borderBottomColor: "primary.main",
        borderBottomStyle: "solid",
        borderBottomWidth: 1,

    }))

    //theme change function
    const changeTheme = useCallback(()=> {
        if (theme.palette.mode === "dark") {
            setTheme(lightTheme);
            window.localStorage.setItem("mode","light");
        }
        if (theme.palette.mode === "light") {
            setTheme(darkTheme);
            window.localStorage.setItem("mode","dark");
        }
    },[theme]);

    //for closing menu when viewport resizes
    useEffect(() => {
        window.addEventListener("resize",()=>setMenu(false));
    });

    //for controlling active theme on refresh
    useEffect(()=>{
        if (mode){
            if (mode === "dark") setTheme(darkTheme);
            if (mode === "light") setTheme(lightTheme);
        }else {
            if (systemMode&&muiMedia) {
                setTheme(darkTheme);
            }
            else {
                setTheme(lightTheme);
            }
        }
    }, [muiMedia, systemMode]);


    //Theme value
    const Theme = useMemo(()=>createTheme(theme),[theme]);

    return(
        <ThemeProvider theme={Theme}>
            <Paper
                elevation={0}
                sx={{borderRadius: 0, p: 0, m: 0}}>

            {/*section header*/}
                <NavBar variant={"outlined"}
                        position={"sticky"}
                        elevation={0}>
                    <Toolbar sx={{justifyContent: {xs: "space-between", sm: "start"}}}>
                        <IconButton id={"menu_btn"} sx={{
                            order: 1,
                            display: {sm: "none"},
                        }} onClick={()=>setMenu(!menu)}>
                            <Tooltip title={(menu)?"close menu":"open menu"}>
                                {menu?<MenuOpen/>:<Menu/>}
                            </Tooltip>
                        </IconButton>
                        <Logo to={"/"} sx={{order: {xs: 2, sm: 0}}}
                              onClick={()=>setMenu(false)}>
                            <GitHub/>
                        </Logo>
                        <Box component={"nav"} sx={{
                            flexGrow: 1,
                            display: {xs: "none", sm: "block"}
                        }}>
                            <Grid container spacing={1}
                                  sx={{justifyContent: {sm:"flex-end"}}}>
                                {
                                    links.map((link,i)=>(
                                        <Item style={({isActive})=>{
                                            return {textDecoration: isActive?"underline":""}
                                        }}
                                              to={"/"+link.split(' ').join("-").toLowerCase()}
                                              key={i}>{link}</Item>
                                    ))
                                }
                            </Grid>
                        </Box>
                        <ThemeSwitch sx={{order: {xs: 3, sm: 0}}}
                            checked={theme.palette.mode==="dark"}
                            onClick={changeTheme}
                        />
                    </Toolbar>

                    {/*FOR SMALL SCREEN*/}
                    {
                        menu &&
                        <Collapse in={menu}
                                  timeout={"auto"}
                                  component={"nav"}
                                  sx={{
                                      width: "100%",
                                  }}>
                            <Flex container
                                  spacing={1}
                                  direction={"column"}>
                                {
                                    links.map((link, i) => (
                                        <Item onClick={() => setMenu(false)} style={({isActive}) => {
                                            return {textDecoration: isActive ? "underline" : "", width: "inherit"}
                                        }}
                                              to={"/" + link.split(' ').join("-").toLowerCase()}
                                              key={i}>{link}</Item>
                                    ))
                                }
                            </Flex>
                        </Collapse>
                    }

                </NavBar>
            {children}
            </Paper>
        </ThemeProvider>
    );
}