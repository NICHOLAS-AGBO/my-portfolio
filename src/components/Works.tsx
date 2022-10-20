import {Divider, Typography} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function Works(){
    return(
        <Grid2 container
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              rowSpacing={4}
        >
            <Grid2 xs={12} sx={{textAlign: "center"}}>
                <Typography variant={"h5"} align={"center"} fontWeight={700}>
                    My works
                </Typography>
                <Typography color={"gray"}>This section is about my work</Typography>
            </Grid2>

            <Grid2 xs={12}>

               <Grid2 container
                     rowSpacing={3}>
                   {/*DEVELOPER*/}
                   <Grid2 xs={12} md={3} sx={{
                       display: "flex",
                       justifyContent: "center",
                       alignItems: "center",
                       backgroundColor:"common.black",
                       color: "common.white",
                       px: 1,
                   }}>
                       <Typography fontWeight={400}>Web Developer</Typography>
                   </Grid2>
                   <Grid2 xs={12} md={9} sx={{px: 2}}>
                       <Typography component={"p"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a interdum nibh. Vivamus non urna condimentum, pulvinar erat ut, mattis dui.
                           Vestibulum eu tellus eu odio posuere efficitur.</Typography>
                   </Grid2>
<Divider sx={{width: "100%"}}/>

                   {/*UI/UX*/}
                   <Grid2 xs={12} md={3} sx={{
                       display: "flex",
                       justifyContent: "center",
                       alignItems: "center",
                       backgroundColor:"common.black",
                       color: "common.white",
                       px: 1,
                   }}>
                       <Typography fontWeight={400}>UI/UX Designer</Typography>
                   </Grid2>
                   <Grid2 xs={12} md={9} sx={{px: 2}}>
                       <Typography component={"p"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a interdum nibh. Vivamus non urna condimentum, pulvinar erat ut, mattis dui.
                           Vestibulum eu tellus eu odio posuere efficitur.</Typography>
                   </Grid2>
                   <Divider sx={{width: "100%"}}/>



               </Grid2>





            </Grid2>

        </Grid2>

    );

}