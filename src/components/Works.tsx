import {Divider, Typography, Unstable_Grid2 as Grid} from "@mui/material";
import {GRAPHICS_EXPERIENCE_YEAR} from "../dateExp";

export default function Works(){
    return(
        <Grid container
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              rowSpacing={4}
        >
            <Grid sx={{textAlign: "center"}}>
                <Typography variant={"h4"} fontWeight={700} sx={{color: "primary.main",fontSize: {xs: "h5.fontSize, md:h4.fontSize"}}}>
                    My work
                </Typography>
                <Typography color={"gray"}>This section is about my work</Typography>
            </Grid>

            <Grid>

               <Grid container
                     rowSpacing={3}>
                   {/*SECTION DEVELOPER*/}
                   <Grid xs={12} md={3} sx={{
                       display: "flex",
                       justifyContent: "center",
                       alignItems: "center",
                       backgroundColor:"common.black",
                       color: "common.white",
                       px: 1,
                   }}>
                       <Typography fontWeight={300}>Web Developer</Typography>
                   </Grid>
                   <Grid xs={12} md={9} sx={{px: 2}}>
                       <Typography component={"p"} sx={{color: "primary.main"}}>
                           As a developer, I have great experience with the challenges that is involve
                           in web. I have a very ground and proficient knowledge of web. I spend
                           time in knowing more about new web technologies. Above all I love coding.
                       </Typography>
                   </Grid>
<Divider sx={{width: "100%"}}/>

                   {/*SECTION UI/UX*/}
                   <Grid xs={12} md={3} sx={{
                       display: "flex",
                       justifyContent: "center",
                       alignItems: "center",
                       backgroundColor:"common.black",
                       color: "common.white",
                       px: 1,
                   }}>
                       <Typography fontWeight={300}>UI/UX Designer</Typography>
                   </Grid>
                   <Grid xs={12} md={9} sx={{px: 2}}>
                       <Typography component={"p"} sx={{color: "primary.main"}}>
                           As a UI/UX designer, I have good knowledge as a teacher and as an experienced
                           designer. Getting to know about UI is a great thing as a frontend developer.
                           I have designed many UI as a freelancer and as a TUTOR.
                       </Typography>
                   </Grid>
                   <Divider sx={{width: "100%"}}/>


                   {/*SECTION GRAPHICS DESIGNER/TUTOR*/}
                   <Grid xs={12} md={3} sx={{
                       display: "flex",
                       justifyContent: "center",
                       alignItems: "center",
                       backgroundColor:"common.black",
                       color: "common.white",
                       px: 1,
                   }}>
                       <Typography fontWeight={300}>Graphics Designer/Tutor</Typography>
                   </Grid>
                   <Grid xs={12} md={9} sx={{px: 2}}>
                       <Typography component={"p"} sx={{color: "primary.main"}}>
                           As a graphics designer and a tutor, I have spent most of my time teaching and designing
                           for companies. I have {GRAPHICS_EXPERIENCE_YEAR} years experience as a graphics designer and I have trained about
                           50 students when I started teaching.
                       </Typography>
                   </Grid>
                   <Divider sx={{width: "100%"}}/>






               </Grid>
            </Grid>


        </Grid>

    );

}