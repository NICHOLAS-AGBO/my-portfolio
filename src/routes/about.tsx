import {Avatar, Container, Link, Typography, Unstable_Grid2 as Grid} from "@mui/material";
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
                      rowSpacing={3}
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
                        <Typography>
                            <b>NICHOLAS AGBO</b> is a proud Nigerian based in Enugu State,
                            I am a fullstack developer with 6 years of experience, and a visual designer with 8 years of experience.
                            I specialize more on React, NextJS, NodeJS, Express, Web3.
                            I worked for Metacares as a fullstack and blockchain developer in the year 2022,
                            Other years I spent my time as a freelancer. For the past 6 years I worked as a freelancer,
                            in the year 2021 I worked as a Graphics Tutor/Designer and a UI/UX designer at Digital Dreams LTD.
                            After few months I moved to another company by name
                            "<Link href={"https://www.vtechservicesng.com/team"} target={"_blank"}>V-TECH ICT Academy</Link>" ,
                            which I was given the position of a Graphics Tutor/Designer and a UI/UX designer, I currently work there till date.
                            I have great passion for web development, being the best in my field is something am working hard to achieve.
                            Coding is something I love very much it creates avenue for critical thinking, exploration and problem solving.
                            The first language I learnt was HTML, then CSS before Javascript which I dedicated my 1 year to study at&nbsp;
                             <Link href={"https://javascript.info/"} target={"_blank"}>Javascript.info</Link>,
                             &nbsp;<Link href={"https://www.youtube.com/@freecodecamp"} target={"_blank"}>Youtube(FreecodeCamp)</Link>&nbsp;
                            and other sources that are great place for learning. During my journey as a developer I have trained some wonderful
                            persons on React and Basic programming (CSS3, HTML5 and Javascript).
                            <br/>
                            <br/>
                            Talking about my journey as a graphics designer,
                            I am very proficient with the use of Adobe products like Photoshop, Illustrator, XD, etc. I equally make use
                            of CorelDraw for designing, I have been designing and training students for the past 7 years, I have taught over&nbsp;
                            <b>50 STUDENTS</b> during my journey as a Graphics designer and UI/UX designer.
                            The skills that I have accumulated as one who is willing to study to the highest level,
                            is something I can't write home about and am very proud of it. I love exploring new things especially in
                            the aspect of web. Some of the skills and knowledge I accumulated are as follows:&nbsp;
                            <b>
                                HTML5, CSS3, JavaScript, TypeScript, React, NextJS, Django, REST API, NodeJS, Express, MUI, MUI-JOY, Angular, Svelte,
                                Photoshop, Illustrator, XD, Figma, CorelDraw, etc.
                            </b>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </React.Suspense>
    );
}