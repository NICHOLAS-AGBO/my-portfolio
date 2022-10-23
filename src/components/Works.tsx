import {Divider, Typography, Unstable_Grid2 as Grid} from "@mui/material";

export default function Works(){
    return(
        <Grid container
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              rowSpacing={4}
        >
            <Grid sx={{textAlign: "center"}}>
                <Typography variant={"h4"} fontWeight={700} sx={{fontSize: {xs: "h5.fontSize, md:h4.fontSize"}}}>
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
                       <Typography component={"p"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a interdum nibh. Vivamus non urna condimentum, pulvinar erat ut, mattis dui.
                           Vestibulum eu tellus eu odio posuere efficitur.</Typography>
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
                       <Typography component={"p"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a interdum nibh. Vivamus non urna condimentum, pulvinar erat ut, mattis dui.
                           Vestibulum eu tellus eu odio posuere efficitur.</Typography>
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
                       <Typography component={"p"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a interdum nibh. Vivamus non urna condimentum, pulvinar erat ut, mattis dui.
                           Vestibulum eu tellus eu odio posuere efficitur.</Typography>
                   </Grid>
                   <Divider sx={{width: "100%"}}/>






               </Grid>
            </Grid>


        </Grid>

    );

}