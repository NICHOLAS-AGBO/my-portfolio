import {Avatar, Button, Container, Link, Typography, Unstable_Grid2 as Grid} from "@mui/material";
import me from "../img/pic.png";
import me_large from "../img/pic_large.png";
import Loading from "../components/FullLoading";
import React from "react";
import {GRAPHICS_EXPERIENCE_YEAR, WEB_EXPERIENCE_YEAR} from "../dateExp";
import {ArrowBack} from "@mui/icons-material";

export function Component(){
    return(
            <Container maxWidth={"lg"} sx={{py: 6,}}>
                <Button variant={"text"} onClick={()=>window.history.back()}
                        sx={{mb: 2, display:{xs: "flex", sm: "none"}}} startIcon={<ArrowBack color={"inherit"}/>}>Back</Button>
                <Grid container
                      justifyContent={"center"}
                      alignItems={{xs: "center", lg: "end"}}
                      flexDirection={{xs: "column", lg: "row"}}
                      spacing={{xs: 3, lg: 2}}
                >
                    <Grid sx={{display:{lg: "none"}}}>
                        <Avatar src={me}
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
                    <Grid sx={{textAlign: "center", display:{lg: "none"}}}>
                        <Typography variant={"h1"} fontWeight={900} align={"center"}
                                    sx={{fontSize: {xs: "h4.fontSize", md: "h3.fontSize"}}}>NICHOLAS AGBO</Typography>
                        <Typography variant={"body2"} sx={{color: "gray",}}>
                            Web Developer, UI/UX designer, Graphics designer/Tutor
                        </Typography>
                    </Grid>

                    {/*Image for large screen*/}
                    <Grid lg={3} sx={{display:{xs: "none", lg: "block"}, position: "sticky", bottom: 0, left: 0, zIndex: 2}}>
                        <Grid container direction={"column"} rowSpacing={2}>
                            <Grid>
                                <Typography variant={"h1"} fontWeight={900}
                                            sx={{fontSize:  "h4.fontSize"}}>NICHOLAS AGBO</Typography>
                                <Typography variant={"body2"} sx={{color: "gray",}}>
                                    Web Developer, UI/UX designer, Graphics designer/Tutor
                                </Typography>
                            </Grid>
                            <Grid>
                                <img src={me_large} alt={"nicholas"}/>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid lg={8} sx={{pt: {lg: 3}}}>
                        <Typography>
                        <b>NICHOLAS AGBO</b>  is a fullstack developer with {WEB_EXPERIENCE_YEAR} years of experience,
                       and a visual designer with {GRAPHICS_EXPERIENCE_YEAR} years of experience.
                       I have vast experience in NextJS, React, Typescript, ECMAScript, SASS, Tailwind, Web3.
                       I worked for Metacares as a fullstack and blockchain developer in the year 2022,
                       other years I spent my time as a freelancer. For the past {WEB_EXPERIENCE_YEAR} years I worked as a freelancer,
                       in the year 2021 I worked as a Graphic Tutor/Designer and a UI/UX designer at Digital Dreams LTD.
                       After few months I moved to another company by name
                       &quot;&nbsp;<Link href={"https://www.vtechservicesng.com/team"} target={"_blank"} rel={"noopener"}>
                       V-TECH ICT Academy</Link>&nbsp;&quot;,
                       which I was given the position of a Graphic Tutor/Designer and a UI/UX designer, I currently work there till date.
                       I have great passion for web development, being the best in my field is something am working hard to achieve.
                       Coding is something I love very much it creates avenue for critical thinking, exploration and problem solving.
                       The first language I learnt was HTML, then CSS before Javascript which I dedicated my 1 year to study at&nbsp;
                       <Link href={"https://javascript.info/"} target={"_blank"} rel={"noopener"}>Javascript.info</Link>,&nbsp;<Link href={"https://www.youtube.com/@freecodecamp"} target={"_blank"} rel={"noopener"}>Youtube(FreecodeCamp)</Link>
                             and other sources that are great place for learning. During my journey as a
                       developer I have trained some wonderful persons on React and Basic programming (CSS3, HTML5 and Javascript).
                       <br/>
                       <br/>
                       Talking about my journey as a graphic designer, I am very proficient with the use of Adobe products like Photoshop,
                       Illustrator, XD, etc. I equally make use of CorelDraw for designing, I have been designing and training students
                       for the past {GRAPHICS_EXPERIENCE_YEAR} years, I have taught many&nbsp;<Link href={"/students"}>students</Link>
                       &nbsp;during my journey as a Graphic designer and UI/UX designer.
                       The skills that I have accumulated as one who is willing to study to the highest level,
                       is something I can&apos;t write home about and am very proud of it. I love exploring new things especially in
                       the aspect of web. Some of the skills and knowledge I accumulated are as follows:&nbsp;
                       <b>
                           HTML5, CSS3, ECMAScript, TypeScript, React, NextJS, Django, REST API, NodeJS, Express, Vue,
                           MUI, MUI-JOY, Angular, Svelte, Photoshop, Illustrator, XD, Figma, CorelDraw, etc.
                       </b>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
    );
}

Component.displayName = "About";