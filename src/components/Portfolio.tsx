import {Link, Paper, Stack, Typography, Unstable_Grid2 as Grid} from "@mui/material";
import portfolio1 from "../img/portfolio/p1.png";
import portfolio2 from "../img/portfolio/p2.png";
import portfolio3 from "../img/portfolio/p3.png";
import {ArrowOutward} from "@mui/icons-material";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {useEffect} from "react";
gsap.registerPlugin(ScrollTrigger);


export default function Portfolio(){
    useEffect(()=>{

        const projects = document.querySelectorAll(".projects");
        const media = gsap.matchMedia();
        const tl = gsap.timeline({
            defaults:{
                delay: 0.05,
            },
            scrollTrigger: {
                trigger: "#portfolio",
                start: "-=200px top",
            }
        });

        projects.forEach(sk=>{
            media
                .add("(max-width: 899px)", ()=>{
                tl.fromTo(sk,
                    { autoAlpha: 0, y: 200 },
                    {autoAlpha: 1, y: 0, delay: 0.15 })})
                .add("(min-width: 900px)",()=>{
                    tl.fromTo(sk,{ autoAlpha: 0 },
                        { y: 0, autoAlpha: 1 })})
        })

    });

    return(
        <Grid container
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              rowSpacing={4}
        >
            <Grid id={"portfolio"} sx={{textAlign: "center"}}>
                <Typography variant={"h1"} fontWeight={900} align={"center"}
                            sx={{fontSize: {xs: "h4.fontSize", md: "h2.fontSize"}}}>Portfolio</Typography>
                <Typography color={"gray"}>This section is about my projects</Typography>
            </Grid>


            <Grid>
                <Grid container
                      justifyContent={"center"}
                      alignItems={"center"}
                      spacing={4}
                >
                    <Grid xs={12} md={6} className={"projects"} sx={{
                        aspectRatio: "16 / 9",
                        filter: "grayscale(50%)",
                        "&:hover":{
                            filter: "grayscale(0%)"
                        }
                    }}>
                        <Paper elevation={1} sx={{
                            overflow: "hidden",
                            cursor: "pointer",
                            position: "relative",
                            "&:hover > div":{
                                display: "flex"
                            }
                        }}>
                            <Stack direction={"column"}
                                   className={"portfolioOverlay"}
                                   justifyContent={"center"}
                                   alignItems={"center"}
                                   spacing={2}
                                   sx={{
                                       position: "absolute",
                                       display: {md:"none"},
                                       backgroundColor: "rgba(0,0,0,.35)",
                                       color: "common.white",
                                       zIndex: 2,
                                       width: "100%",
                                       height: "100%",
                                       transition: "background-color 500ms",
                                   }}>
                                <Typography variant={"h6"} fontWeight={200}>Web project</Typography>
                                <Link href={"#"} underline={"none"} sx={{
                                    color: "white",
                                    px: 3,
                                    py: 1.5,
                                    border: "solid 2px white",
                                    fontFamily: "inherit",
                                    transition: "all 300ms",
                                    "&:hover":{
                                        color: "black",
                                        backgroundColor: "white",
                                        border: "none",
                                    }
                                }}>
                                    <Typography>
                                        View more <ArrowOutward sx={{verticalAlign: "text-bottom"}}/>
                                    </Typography>
                                </Link>
                            </Stack>
                            <img width={"100%"} src={portfolio3} alt={"web dev sample project"}/>
                        </Paper>
                    </Grid>

                    <Grid xs={12} md={6} className={"projects"} sx={{
                        aspectRatio: "16 / 9",
                        filter: "grayscale(50%)",
                        "&:hover":{
                            filter: "grayscale(0%)"
                        }
                    }}>
                        <Paper elevation={1} sx={{
                            overflow: "hidden",
                            cursor: "pointer",
                            position: "relative",
                            "&:hover > div":{
                                display: "flex"
                            }
                        }}>
                            <Stack direction={"column"}
                                   className={"portfolioOverlay"}
                                   justifyContent={"center"}
                                   alignItems={"center"}
                                   spacing={2}
                                   sx={{
                                       position: "absolute",
                                       display: {md:"none"},
                                       backgroundColor: "rgba(0,0,0,.35)",
                                       color: "common.white",
                                       zIndex: 2,
                                       width: "100%",
                                       height: "100%",
                                       transition: "background-color 500ms",
                                   }}>
                                <Typography variant={"h6"} fontWeight={200}>Graphics project</Typography>
                                <Link href={"#"} underline={"none"} sx={{
                                    color: "white",
                                    px: 3,
                                    py: 1.5,
                                    border: "solid 2px white",
                                    fontFamily: "inherit",
                                    transition: "all 300ms",
                                    "&:hover":{
                                        color: "black",
                                        backgroundColor: "white",
                                        border: "none",
                                    }
                                }}>
                                    <Typography>
                                        View more <ArrowOutward sx={{verticalAlign: "text-bottom"}}/>
                                    </Typography>
                                </Link>
                            </Stack>
                            <img width={"100%"} src={portfolio1} alt={"graphics design sample project"}/>
                        </Paper>
                    </Grid>

                    <Grid xs={12} md={6} className={"projects"} sx={{
                        aspectRatio: "16 / 9",
                        filter: "grayscale(50%)",
                        "&:hover":{
                            filter: "grayscale(0%)"
                        }
                    }}>
                        <Paper elevation={1} sx={{
                            overflow: "hidden",
                            cursor: "pointer",
                            position: "relative",
                            "&:hover > div":{
                                display: "flex"
                            }
                        }}>
                            <Stack direction={"column"}
                                   className={"portfolioOverlay"}
                                   justifyContent={"center"}
                                   alignItems={"center"}
                                   spacing={2}
                                   sx={{
                                       position: "absolute",
                                       display: {md:"none"},
                                       backgroundColor: "rgba(0,0,0,.35)",
                                       color: "common.white",
                                       zIndex: 2,
                                       width: "100%",
                                       height: "100%",
                                       transition: "background-color 500ms",
                                   }}>
                                <Typography variant={"h6"} fontWeight={200}>UI/UX project</Typography>
                                <Link href={"#"} underline={"none"} sx={{
                                    color: "white",
                                    px: 3,
                                    py: 1.5,
                                    border: "solid 2px white",
                                    fontFamily: "inherit",
                                    transition: "all 300ms",
                                    "&:hover":{
                                        color: "black",
                                        backgroundColor: "white",
                                        border: "none",
                                    }
                                }}>
                                    <Typography>
                                        View more <ArrowOutward sx={{verticalAlign: "text-bottom"}}/>
                                    </Typography>
                                </Link>
                            </Stack>
                            <img width={"100%"} src={portfolio2} alt={"UI/UX sample project"}/>
                        </Paper>
                    </Grid>



                </Grid>



            </Grid>

        </Grid>
    );

}