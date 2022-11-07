import {Box, Container, IconButton, Link, styled, Typography, Unstable_Grid2 as Grid} from "@mui/material";
import web1 from "../../img/portfolio/p3.png";
import {OpenInFull} from "@mui/icons-material";


const HiddenDrawer = styled(Link)(({theme})=>(
    {
        width: "100%",
        textAlign: "center",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        height: 50,
        bottom: 0, left: 0,
        zIndex: 1,
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
    }
));

const ScaleButton = styled(IconButton)(({theme})=>(
    {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        top: 6, right: 6,
        zIndex: 1,
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        "&:hover":{
            backgroundColor: "rgba(255,255,255,0.5)",
        }
    }
));

export default function Portfolio(){
    return(
        <Container maxWidth={"lg"} id={"web"}>

            <Typography variant={"h4"} align={"center"} fontWeight={700}
                        sx={{
                            color: "primary.main",
                            fontSize: {xs: "h5.fontSize", md: "h4.fontSize"},
                            my: 4
            }}>
                Web projects
            </Typography>

            <Grid
                container
                justifyContent={"center"}
                spacing={3}
            >
                <Grid xs={12} md={6}>
                    <Box sx={{
                        aspectRatio: "16 / 9",
                        borderColor: "common.white",
                        borderWidth: "medium",
                        borderStyle: "solid",
                        borderRadius: 8,
                        position: "relative",
                        overflowY: "hidden",
                        boxShadow: 3,
                        bgColor: "common.white",
                    }}>
                        <ScaleButton>
                            <OpenInFull/>
                        </ScaleButton>

                    <img src={web1} alt={"web project 1"} width={"100%"}/>
                    <HiddenDrawer href={"#"} variant={"subtitle1"} color={"inherit"} title={"view this project"}>
                            https://myproject.com/
                    </HiddenDrawer>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}