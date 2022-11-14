import {
    AppBar,
    Box,
    Collapse,
    IconButton,
    styled,
    Toolbar,
    Tooltip,
    Unstable_Grid2 as Grid
} from "@mui/material";
import {DarkMode, GitHub, Menu} from "@mui/icons-material";
import {NavLink} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import gsap from "gsap";



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

const links = ['Home','About me',"Portfolio", "Contact","More"];
const Logo = styled(NavLink)(({theme})=>({}))

export default function Header(){
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

    //animation for menu button
    const animateMenuButton = (x:boolean) => {
      gsap.to("#menu_svg>path",{
          duration: 0.5, color: "inherit",
          morphSVG: x? "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z":
              "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z", ease: "power4"
      });
    };

    const run = useCallback(()=>animateMenuButton(menu),[menu]);

    useEffect(() => {
        run();
        window.addEventListener("resize",()=>setMenu(false));
    });

    return(
        <NavBar variant={"outlined"}
                position={"sticky"}
                elevation={0}>
            <Toolbar sx={{justifyContent: {xs: "space-between", sm: "start"}}}>
                    <IconButton id={"menu_btn"} sx={{
                        order: 1,
                        display: {sm: "none"},
                    }} onClick={()=>setMenu(!menu)}>
                        <Tooltip title={(menu)?"close menu":"open menu"}>
                        <Menu id={"menu_svg"}/>
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
                <IconButton id={"theme_btn"} sx={{order: {xs: 3, sm: 0}}} onClick={()=>setMenu(false)}>
                    <Tooltip title={"Change theme"}>
                    <DarkMode id={"theme_icon"}/>
                    </Tooltip>
                </IconButton>
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
    );

}