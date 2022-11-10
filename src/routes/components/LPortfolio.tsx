import {Box, Container, IconButton, Link, Skeleton, styled, Typography, Unstable_Grid2 as Grid} from "@mui/material";


export default function Loading(){
    return(
        <Container maxWidth={"lg"} id={"web"}>
    <Skeleton variant={"text"} animation={"wave"} sx={{mx: "auto", my: 4, fontSize: "4rem", maxWidth: {xs: "60%", sm: "30%", md: "20%"}}}/>
            <Grid
                container
                justifyContent={"center"}
                spacing={3}
            >
                <Grid xs={12} md={6}>
                    <Skeleton sx={{borderRadius: 8, aspectRatio: "16 / 9"}}
                              animation={"wave"} variant={"rounded"}
                              width={"100%"} height={300}/>
                </Grid>


                <Grid xs={12} md={6}>
                    <Skeleton sx={{borderRadius: 8, aspectRatio: "16 / 9"}}
                              animation={"wave"} variant={"rounded"}
                              width={"100%"} height={300}/>
                </Grid>




                <Grid xs={12} md={6}>
                    <Skeleton sx={{borderRadius: 8, aspectRatio: "16 / 9"}}
                              animation={"wave"} variant={"rounded"}
                              width={"100%"} height={300}/>
                </Grid>




                <Grid xs={12} md={6}>
                    <Skeleton sx={{borderRadius: 8, aspectRatio: "16 / 9"}}
                              animation={"wave"} variant={"rounded"}
                              width={"100%"} height={300}/>
                </Grid>




            </Grid>
        </Container>
    );
}