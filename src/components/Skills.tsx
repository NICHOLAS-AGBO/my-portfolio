import {Divider, Stack, Typography, Unstable_Grid2 as Grid} from "@mui/material";
import {blue, brown, cyan, green, orange, pink, purple, red, yellow} from "@mui/material/colors";
//DEVELOPER
import NextJs from "../img/skills/800px-Nextjs-logo.svg.png"
import ReactJs from "../logo.svg"
import TSC from "../img/skills/10b88c68-typescript-logo-1024x576.png"
import Js from "../img/skills/JavaScript-logo.png"
import ExpressJs from "../img/skills/Expressjs.png"
import NodeJs from "../img/skills/1280px-Node.js_logo.svg.png"
import Angular from "../img/skills/2048px-Angular_full_color_logo.svg.png"
import VueJs from "../img/skills/vuejs.png"
import MongoDB from "../img/skills/MongoDB_Logo.svg.png"
import Html from "../img/skills/120px-HTML5_logo_and_wordmark.svg.png"
import CSS from "../img/skills/CSS3_logo_and_wordmark.svg.png"
import PHP from "../img/skills/PHP-logo.svg.png"
import TailwindCSS from "../img/skills/tailwind-css-1-2.svg"
import BootStrap from "../img/skills/Bootstrap_logo.svg.png"
import Sass from "../img/skills/1280px-Sass_Logo_Color.svg.png"
import Laravel from "../img/skills/1200px-Laravel.svg.png"
import Prisma from "../img/skills/prisma-2.svg"
//DESIGNER
import PSD from "../img/skills/Adobe_Photoshop_CC_icon.svg.png"
import AI from "../img/skills/Adobe_Illustrator_CC_icon.svg.png"
import IND from "../img/skills/Adobe_InDesign_CC_icon.svg.png"
import Corel from "../img/skills/CorelDraw_logo.svg.png"
import Figma from "../img/skills/figma_logo.png"
import XD from "../img/skills/Adobe_XD_CC_icon.svg.png"

export default function Skills(){
    return(
        <Grid container
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              rowSpacing={4}
        >
            <Grid sx={{textAlign: "center"}}>
                <Typography variant={"h1"} fontWeight={900} align={"center"}
                            sx={{fontSize: {xs: "h4.fontSize", md: "h2.fontSize"}}}>Skills</Typography>
                <Typography color={"gray"}>This section is about my skills and Knowledge</Typography>
            </Grid>

            <Grid>

                {/*SECTION DEVELOPER*/}
                    <Typography color={"gray"} align={"center"} variant={"subtitle1"}>AS A DEVELOPER</Typography>

                <Grid container
                      justifyContent={"center"}
                      alignItems={"center"}
                      spacing={4}
                >
                    <Grid xs={4} md={3} lg={2} sx={{
                        p: 2,
                        filter: "grayscale(90%)",
                        cursor: "default",
                        transition: "all 300ms",
                        "&:hover":{
                        filter: "grayscale(0%)",
                            transform: "scale(0.9)",
                        },
                    }}>
                        <Stack direction={"column"} alignItems={"center"} spacing={1}>
                            <img width={150} src={NextJs} alt={"next js logo"}/>
                        </Stack>
                    </Grid>

                    <Grid xs={4} md={3} lg={2} sx={{
                        p: 2,
                        filter: "grayscale(90%)",
                        cursor: "default",
                        transition: "all 300ms",
                        "&:hover":{
                        filter: "grayscale(0%)",
                            transform: "scale(0.9)",
                        },
                        "&:hover div p":{
                            color: cyan[600]
                        }
                    }}>
                        <Stack direction={"column"} alignItems={"center"} spacing={1}>
                        <img width={100} src={ReactJs} alt={"react js logo"}/>
                        <Typography>React Js</Typography>
                        </Stack>
                    </Grid>

                    <Grid xs={4} md={3} lg={2} sx={{
                        p: 2,
                        filter: "grayscale(90%)",
                        cursor: "default",
                        transition: "all 300ms",
                        "&:hover":{
                        filter: "grayscale(0%)",
                            transform: "scale(0.9)",
                        },
                    }}>
                        <Stack direction={"column"} alignItems={"center"} spacing={1}>
                        <img width={150} src={TSC} alt={"typescript logo"}/>
                        </Stack>
                    </Grid>

                    <Grid xs={4} md={3} lg={2} sx={{
                        p: 2,
                        filter: "grayscale(90%)",
                        cursor: "default",
                        transition: "all 300ms",
                        "&:hover":{
                        filter: "grayscale(0%)",
                            transform: "scale(0.9)",
                        },
                        "&:hover div p":{
                            color: yellow[700]
                        }
                    }}>
                        <Stack direction={"column"} alignItems={"center"} spacing={1}>
                        <img width={80} src={Js} alt={"next js logo"}/>
                        <Typography>JavaScript</Typography>
                        </Stack>
                    </Grid>

                    <Grid xs={4} md={3} lg={2} sx={{
                        p: 2,
                        filter: "grayscale(90%)",
                        cursor: "default",
                        transition: "all 300ms",
                        "&:hover":{
                            filter: "grayscale(0%)",
                            transform: "scale(0.9)",
                        },
                        "&:hover div p":{
                            color: orange[500]
                        }}}>
                        <Stack direction={"column"} alignItems={"center"} spacing={1}>
                            <img width={100} src={Html} alt={"html logo"}/>
                            <Typography>HTML</Typography>
                        </Stack>
                    </Grid>

                    <Grid xs={4} md={3} lg={2} sx={{
                        p: 2,
                        filter: "grayscale(90%)",
                        cursor: "default",
                        transition: "all 300ms",
                        "&:hover":{
                            filter: "grayscale(0%)",
                            transform: "scale(0.9)",
                        },
                        "&:hover div p":{
                            color: blue[600]
                        }}}>
                        <Stack direction={"column"} alignItems={"center"} spacing={1}>
                            <img width={70} src={CSS} alt={"css logo"}/>
                            <Typography>CSS</Typography>
                        </Stack>
                    </Grid>

                    <Grid xs={4} md={3} lg={2} sx={{
                        p: 2,
                        filter: "grayscale(90%)",
                        cursor: "default",
                        transition: "all 300ms",
                        "&:hover":{
                            filter: "grayscale(0%)",
                            transform: "scale(0.9)",
                        },
                        "&:hover div p":{
                            color: blue[600]
                        }}}>
                        <Stack direction={"column"} alignItems={"center"} spacing={1}>
                            <img width={100} src={PHP} alt={"PHP logo"}/>
                        </Stack>
                    </Grid>

                    <Grid xs={4} md={3} lg={2} sx={{
                        p: 2,
                        filter: "grayscale(90%)",
                        cursor: "default",
                        transition: "all 300ms",
                        "&:hover":{
                            filter: "grayscale(0%)",
                            transform: "scale(0.9)",
                        }}}>
                        <Stack direction={"column"} alignItems={"center"} spacing={1}>
                            <img src={ExpressJs} alt={"express js logo"}/>
                            <Typography>Express Js</Typography>
                        </Stack>
                    </Grid>

                    <Grid xs={4} md={3} lg={2} sx={{
                        p: 2,
                        filter: "grayscale(90%)",
                        cursor: "default",
                        transition: "all 300ms",
                        "&:hover":{
                            filter: "grayscale(0%)",
                            transform: "scale(0.9)",
                        },
                        "&:hover div p":{
                            color: green[600]
                        }}}>
                        <Stack direction={"column"} alignItems={"center"} spacing={1}>
                            <img src={MongoDB} alt={"mongodb logo"}/>
                        </Stack>
                    </Grid>

                    <Grid xs={4} md={3} lg={2} sx={{
                        p: 2,
                        filter: "grayscale(90%)",
                        cursor: "default",
                        transition: "all 300ms",
                        "&:hover":{
                            filter: "grayscale(0%)",
                            transform: "scale(0.9)",
                        },
                        "&:hover div p":{
                            color: green[700]
                        }}}>
                        <Stack direction={"column"} alignItems={"center"} spacing={1}>
                            <img width={120} src={VueJs} alt={"vue js logo"}/>
                        </Stack>
                    </Grid>

                    <Grid xs={4} md={3} lg={2} sx={{
                        p: 2,
                        filter: "grayscale(90%)",
                        cursor: "default",
                        transition: "all 300ms",
                        "&:hover":{
                            filter: "grayscale(0%)",
                            transform: "scale(0.9)",
                        },
                        "&:hover div p":{
                            color: green[700]
                        }}}>
                        <Stack direction={"column"} alignItems={"center"} spacing={1}>
                            <img width={100} src={NodeJs} alt={"node js logo"}/>
                            <Typography>Node Js</Typography>
                        </Stack>
                    </Grid>

                    <Grid xs={4} md={3} lg={2} sx={{
                        p: 2,
                        filter: "grayscale(90%)",
                        cursor: "default",
                        transition: "all 300ms",
                        "&:hover":{
                            filter: "grayscale(0%)",
                            transform: "scale(0.9)",
                        },
                        "&:hover div p":{
                            color: red[600]
                        }}}>
                        <Stack direction={"column"} alignItems={"center"} spacing={1}>
                            <img width={100} src={Angular} alt={"angular logo"}/>
                            <Typography>Angular</Typography>
                        </Stack>
                    </Grid>

                    <Grid xs={4} md={3} lg={2} sx={{
                        p: 2,
                        filter: "grayscale(90%)",
                        cursor: "default",
                        transition: "all 300ms",
                        "&:hover":{
                            filter: "grayscale(0%)",
                            transform: "scale(0.9)",
                        }}}>
                        <Stack direction={"column"} alignItems={"center"} spacing={1}>
                            <img width={120} src={TailwindCSS} alt={"tailwindcss logo"}/>
                        </Stack>
                    </Grid>

                    <Grid xs={4} md={3} lg={2} sx={{
                        p: 2,
                        filter: "grayscale(90%)",
                        cursor: "default",
                        transition: "all 300ms",
                        "&:hover":{
                            filter: "grayscale(0%)",
                            transform: "scale(0.9)",
                        },
                        "&:hover div p":{
                            color: purple[500]
                        }}}>
                        <Stack direction={"column"} alignItems={"center"} spacing={1}>
                            <img width={100} src={BootStrap} alt={"bootstrap logo"}/>
                            <Typography>BootStrap</Typography>
                        </Stack>
                    </Grid>

                    <Grid xs={4} md={3} lg={2} sx={{
                        p: 2,
                        filter: "grayscale(90%)",
                        cursor: "default",
                        transition: "all 300ms",
                        "&:hover":{
                            filter: "grayscale(0%)",
                            transform: "scale(0.9)",
                        }}}>
                        <Stack direction={"column"} alignItems={"center"} spacing={1}>
                            <img width={120} src={Sass} alt={"sass logo"}/>
                        </Stack>
                    </Grid>

                    <Grid xs={4} md={3} lg={2} sx={{
                        p: 2,
                        filter: "grayscale(90%)",
                        cursor: "default",
                        transition: "all 300ms",
                        "&:hover":{
                            filter: "grayscale(0%)",
                            transform: "scale(0.9)",
                        },
                        "&:hover div p":{
                            color: red[600]
                        }}}>
                        <Stack direction={"column"} alignItems={"center"} spacing={1}>
                            <img width={80} src={Laravel} alt={"laravel logo"}/>
                            <Typography>Laravel</Typography>
                        </Stack>
                    </Grid>

                    <Grid xs={4} md={3} lg={2} sx={{
                        p: 2,
                        filter: "grayscale(90%)",
                        cursor: "default",
                        transition: "all 300ms",
                        "&:hover":{
                            filter: "grayscale(0%)",
                            transform: "scale(0.9)",
                        }}}>
                        <img width={120} src={Prisma} alt={"angular logo"}/>
                    </Grid>

                    <Grid sx={{
                        p: 2,
                        cursor: "default",
                        transition: "all 300ms",
                        borderRadius: "50%",
                        borderColor: "common.black",
                        borderWidth: 2,
                        borderStyle: "solid",
                        color: "common.black",
                        "&:hover":{
                            transform: "scale(0.9)",
                        }}}>
                        <Stack sx={{height: 50}} direction={"column"} alignItems={"center"} justifyContent={"center"}>
                            <Typography fontWeight={500} variant={"subtitle1"}>
                                & More
                            </Typography>
                        </Stack>
                    </Grid>


                </Grid>
            </Grid>

            <Grid xs={12}>
                <Divider sx={{width: "100%"}}/>
            </Grid>

            <Grid>

                {/*SECTION DEVELOPER*/}
                <Typography color={"gray"} align={"center"} variant={"subtitle1"}>AS A DESIGNER</Typography>

                <Grid container
                      justifyContent={"center"}
                      alignItems={"center"}
                      spacing={4}
                >
                    <Grid xs={4} md={3} lg={2} sx={{
                        p: 2,
                        filter: "grayscale(90%)",
                        cursor: "default",
                        transition: "all 300ms",
                        "&:hover":{
                            filter: "grayscale(0%)",
                            transform: "scale(0.9)",
                        },
                        "&:hover div p":{
                            color: blue[900]
                        }
                    }}>
                        <Stack direction={"column"} alignItems={"center"} spacing={1}>
                            <img width={80} src={PSD} alt={"Adobe_Photoshop_CC_icon logo"}/>
                            <Typography>Photoshop</Typography>
                        </Stack>
                    </Grid>

                    <Grid xs={4} md={3} lg={2} sx={{
                        p: 2,
                        filter: "grayscale(90%)",
                        cursor: "default",
                        transition: "all 300ms",
                        "&:hover":{
                            filter: "grayscale(0%)",
                            transform: "scale(0.9)",
                        },
                        "&:hover div p":{
                            color: brown[600]
                        }
                    }}>
                        <Stack direction={"column"} alignItems={"center"} spacing={1}>
                            <img width={80} src={AI} alt={"Adobe_Illustrator_CC_icon logo"}/>
                            <Typography>Illustrator</Typography>
                        </Stack>
                    </Grid>

                    <Grid xs={4} md={3} lg={2} sx={{
                        p: 2,
                        filter: "grayscale(90%)",
                        cursor: "default",
                        transition: "all 300ms",
                        "&:hover":{
                            filter: "grayscale(0%)",
                            transform: "scale(0.9)",
                        },
                        "&:hover div p":{
                            color: pink[900]
                        }
                    }}>
                        <Stack direction={"column"} alignItems={"center"} spacing={1}>
                            <img width={80} src={IND} alt={"Adobe_InDesign_CC_icon logo"}/>
                            <Typography>Indesign</Typography>
                        </Stack>
                    </Grid>

                    <Grid xs={4} md={3} lg={2} sx={{
                        p: 2,
                        filter: "grayscale(90%)",
                        cursor: "default",
                        transition: "all 300ms",
                        "&:hover":{
                            filter: "grayscale(0%)",
                            transform: "scale(0.9)",
                        }
                    }}>
                        <Stack direction={"column"} alignItems={"center"} spacing={1}>
                            <img width={100} src={Corel} alt={"CorelDraw logo"}/>
                        </Stack>
                    </Grid>

                    <Grid xs={4} md={3} lg={2} sx={{
                        p: 2,
                        filter: "grayscale(90%)",
                        cursor: "default",
                        transition: "all 300ms",
                        "&:hover":{
                            filter: "grayscale(0%)",
                            transform: "scale(0.9)",
                        },
                    }}>
                        <Stack direction={"column"} alignItems={"center"} spacing={1}>
                            <img src={Figma} alt={"figma logo"}/>
                        </Stack>
                    </Grid>

                    <Grid xs={4} md={3} lg={2} sx={{
                        p: 2,
                        filter: "grayscale(90%)",
                        cursor: "default",
                        transition: "all 300ms",
                        "&:hover":{
                            filter: "grayscale(0%)",
                            transform: "scale(0.9)",
                        },
                        "&:hover div p":{
                            color: pink[900]
                        }
                    }}>
                        <Stack direction={"column"} alignItems={"center"} spacing={1}>
                            <img width={80} src={XD} alt={"Adobe_XD_CC_icon logo"}/>
                            <Typography>Adobe XD</Typography>
                        </Stack>
                    </Grid>

                    <Grid sx={{
                        p: 2,
                        cursor: "default",
                        transition: "all 300ms",
                        borderRadius: "50%",
                        borderColor: "common.black",
                        borderWidth: 2,
                        borderStyle: "solid",
                        color: "common.black",
                        "&:hover":{
                            transform: "scale(0.9)",
                        }}}>
                        <Stack sx={{height: 50}} direction={"column"} alignItems={"center"} justifyContent={"center"}>
                            <Typography fontWeight={500} variant={"subtitle1"}>
                                & More
                            </Typography>
                        </Stack>
                    </Grid>






                </Grid>
            </Grid>

        </Grid>

    );

}