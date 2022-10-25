import {AppBar, Box, IconButton, styled, Toolbar, Tooltip} from "@mui/material";
import {GitHub, Menu} from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {NavLink} from "react-router-dom";

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
    return(
        <AppBar variant={"outlined"}
                position={"sticky"}
                elevation={0}
                sx={{
                    backgroundColor: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(8px)"
        }}>
            <Toolbar>
                    <IconButton>
                        <Tooltip title={"Menu"}>
                        <Menu/>
                        </Tooltip>
                    </IconButton>
                <IconButton>
                    <NavLink to={"/"}>
                        <GitHub/>
                    </NavLink>
                </IconButton>
                <Box component={"nav"} sx={{flexGrow: 1}}>
                    <Grid2 container spacing={1}
                           sx={{justifyContent: "flex-end"}}>
                        {
                            links.map((link,i)=>(
                                <Item style={({isActive})=>{
                                    return {textDecoration: isActive?"underline":""}
                                }}
                                    to={"/"+link.split(' ').join("-").toLowerCase()}
                                    key={i}>{link}</Item>
                            ))
                        }
                    </Grid2>
                </Box>
            </Toolbar>
        </AppBar>

    );

}