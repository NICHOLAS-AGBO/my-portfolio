import {Avatar, Container, Typography, Unstable_Grid2 as Grid} from "@mui/material";
import Nicholas from "../img/pic.png";
import Loading from "../components/FullLoading";
import React from "react";

export default function About(){
    return(
        <React.Suspense fallback={<Loading/>}>
            <Container maxWidth={"md"} sx={{py: 8}}>
                <Grid container
                      justifyContent={"center"}
                      alignItems={"center"}
                      direction={"column"}
                      rowSpacing={5}
                >
                    <Grid>
                        <Avatar src={Nicholas}
                                alt={"nicholas-agbo"}
                                sx={{
                                    mx: "auto",
                                    width: 150,
                                    height: 150,
                                    outlineColor: "primary.main",
                                    outlineWidth: 2,
                                    outlineStyle: "dotted",
                                    outlineOffset: 5,
                                    borderColor: "common.white",
                                    borderWidth: 3,
                                    borderStyle: "solid",
                                    boxShadow: 3
                                }}
                        />
                    </Grid>
                    <Grid sx={{textAlign: "center"}}>
                        <Typography variant={"h1"} fontWeight={900} align={"center"}
                                    sx={{fontSize: {xs: "h4.fontSize", md: "h3.fontSize"}}}>NICHOLAS AGBO</Typography>
                        <Typography variant={"body2"} sx={{color: "gray",}}>
                            Web Developer, UI/UX designer, Graphics designer/Tutor
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography align={"center"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris a interdum nibh. Vivamus non urna condimentum, pulvinar erat ut,
                            mattis dui. Vestibulum eu tellus eu odio posuere efficitur.
                            Nulla vel varius mauris. Donec mattis elit et lorem ultricies dapibus.
                            In porttitor bibendum tellus sed vulputate. Nam in luctus dui.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                            ac turpis egestas. Suspendisse hendrerit est nec convallis sodales.
                            Suspendisse vel mauris malesuada, consequat sem quis, sollicitudin urna.
                            Proin rhoncus, turpis ac bibendum tempor, justo turpis mattis risus, ac
                            porttitor urna leo in nunc. Aliquam scelerisque enim in varius mattis.
                            Integer ultricies, ex non tincidunt condimentum, tellus lacus semper est,
                            sit amet consequat lectus est id libero. Nullam ipsum ante,
                            bibendum nec sem ut, sagittis dictum sem. Pellentesque luctus, diam sit amet
                            facilisis lacinia, ex urna tincidunt enim, eget lacinia est est in neque.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </React.Suspense>
    );
}