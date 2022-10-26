import {AppBar, Box, Collapse, IconButton, styled, Toolbar, Tooltip, Unstable_Grid2 as Grid} from "@mui/material";
import {GitHub, Menu} from "@mui/icons-material";
import {NavLink} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import gsap from "gsap";


gsap.registerPlugin(MorphSVGPlugin);

const Item = styled(NavLink)(({theme})=>({
    ...theme.typography.body2,
    color: theme.palette.common.black,
    padding: theme.spacing(2),
    textDecoration: "none",
    cursor: "default",
    "&:hover":{
        backgroundColor:theme.palette.action.hover,
    }
}));
const links = ['Home','About me',"Portfolio", "Contact","More"];

export default function Header(){
    const [menu, setMenu] = useState(false);

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
        <AppBar variant={"outlined"}
                position={"sticky"}
                elevation={0}
                sx={{
                    backgroundColor: menu?"rgba(255,255,255,0.90)":"rgba(255,255,255,0.25)",
                    backdropFilter: "blur(8px)"
        }}>
            <Toolbar sx={{justifyContent: {xs: "space-between", sm: "start"}}}>
                    <IconButton id={"menu_btn"} sx={{
                        order: 2,
                        display: {sm: "none"},
                    }} onClick={()=>setMenu(!menu)}>
                        <Tooltip title={(menu)?"close menu":"open menu"}>
                        <Menu id={"menu_svg"}/>
                        </Tooltip>
                    </IconButton>
                <IconButton>
                    <NavLink to={"/"}>
                        <GitHub/>
                    </NavLink>
                </IconButton>
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
            </Toolbar>

            {/*FOR SMALL SCREEN*/}
            <Collapse in={menu}
                      timeout={"auto"}
                      component={"nav"} sx={{
                display: {sm: "none"},
                width: "100%",
            }}>
                <Grid container
                      spacing={1}
                      direction={"column"}
                      sx={{
                          py: 3,
                          position: "absolute",
                          textAlign: "center",
                          zIndex: 2,
                          backgroundColor: "rgba(255,255,255,0.9)",
                          backdropFilter: "blur(8px)",
                          width: "inherit",
                          borderBottomColor: "common.black",
                          borderBottomStyle: "solid",
                          borderBottomWidth: 2,
                }}>
                    {
                        links.map((link,i)=>(
                            <Item onClick={()=>setMenu(false)} style={({isActive})=>{
                                return {textDecoration: isActive?"underline":"", width: "inherit"}
                            }}
                                  to={"/"+link.split(' ').join("-").toLowerCase()}
                                  key={i}>{link}</Item>
                        ))
                    }
                </Grid>
            </Collapse>
        </AppBar>
    );

}