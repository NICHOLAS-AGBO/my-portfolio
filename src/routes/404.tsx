import {Typography, Unstable_Grid2 as Grid} from "@mui/material";


export default function Notfound(){
    return(
        <Grid container
              sx={{width: "100vw", minHeight: "90vh", textAlign: "center"}}
              justifyContent={"center"}
              alignItems={"center"}
              direction={"column"}
        >
            <Typography sx={{color: "primary.main"}} variant={"h1"} fontWeight={900}>
                404
            </Typography>
            <Typography sx={{color: "primary.main"}}>NOT FOUND</Typography>
        </Grid>

    );

}