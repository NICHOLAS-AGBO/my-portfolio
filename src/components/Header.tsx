import {useEffect, useState} from "react";
import {
    AppBar, Box, Collapse,
    IconButton,
    styled, Switch,
    Toolbar, Tooltip,
    Grid, Slide
} from "@mui/material";
import {Menu, MenuOpen} from "@mui/icons-material";
import {NavLink} from "react-router-dom";
import useTheme from "../hooks/useTheme";
import dark_logo from "../img/darklogo_.png";
import light_logo from "../img/lightlogo_.png";



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
    width: 60,
    height: 40,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        marginLeft: theme.spacing(0.5),
        marginTop: theme.spacing(0.5),
        padding: 0,
        transform: 'translateX(3px)',
        '&.Mui-checked': {
            marginTop: theme.spacing(0.5),
            color: '#000',
            transform: 'translateX(20px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                    '#000',
                )}" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/></svg>')`,
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
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.15)' : 'lightgrey',
        borderRadius: theme.spacing(8),
    },
}));


export default function Header(){
    const [menu, setMenu] = useState(false);
    const {changeTheme, mode} = useTheme();
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



    useEffect(() => {
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
                                {menu?<MenuOpen/>:<Menu/>}
                            </Tooltip>
                        </IconButton>
                        <Logo to={"/"} sx={{order: {xs: 2, sm: 0}}}
                              onClick={()=>setMenu(false)}>
                            <img src={mode==="dark"?light_logo:dark_logo} alt={"nicholas_agbo logo"} width={40}/>
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
                            checked={mode==="dark"}
                            onClick={changeTheme}
                        />
                    </Toolbar>

                    {/*FOR SMALL SCREEN*/}
                        <Collapse in={menu}
                                  timeout={"auto"}
                                  easing={"ease"}
                                  component={"nav"}
                                  sx={{
                                      width: "100%",
                                  }}>
                            <Slide direction={"right"} in={menu}>
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
                            </Slide>
                        </Collapse>

                </NavBar>
    );
}