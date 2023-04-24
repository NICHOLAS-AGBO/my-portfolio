import {styled, Typography, Unstable_Grid2 as Grid} from "@mui/material";
import {NavLink} from "react-router-dom";
import me from "../img/pic.png";


export function Component(){
    const Link = styled(NavLink)(({theme})=>({
        color: theme.palette.primary.main
    }));
    return(
        <Grid container
              sx={{width: "100vw", minHeight: "90vh", textAlign: "center"}}
              justifyContent={"center"}
              alignItems={"center"}
              direction={"column"}
        >
            <img src={me} alt={"nicholas_agbo logo"} width={100}/>
            <Typography color={"primary"} sx={{fontSize: {xs: "h4.fontSize", sm: "h2.fonSize"}}} fontWeight={900}>
                Page not found
            </Typography>
            <Typography component={"span"}>
                <Link to="/">Go back to home</Link>
            </Typography>

        </Grid>
    );

}
Component.displayName = "NotFound";