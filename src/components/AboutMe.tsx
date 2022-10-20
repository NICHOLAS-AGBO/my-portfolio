import {Avatar, Button, Container, Grid, Paper, styled, Typography} from "@mui/material";
import Nicholas from "../img/pic.png";
import {useEffect, useMemo, useState} from "react";

const Section = styled(Paper)(({theme})=>({
    boxShadow: "none",
    borderRadius: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: theme.spacing(4),
    minHeight: "inherit",
    height: "inherit"
}));

export default function AboutMe(){
    return(
        <Container sx={{
            minHeight: "600px",
            height: "max-content",
        }} maxWidth={"sm"}>
            <Section>
                <Avatar src={Nicholas} alt={"nicholas-agbo"}
                        sx={{mx: "auto", width: {xs: 150, md: 200}, height: {xs: 150, md: 200}}}/>
<Grid container
      direction={"column"}
      justifyContent={"center"}
      spacing={2}>
            <Grid item sx={{textAlign: "center"}}>
                <Typography variant={"h1"} fontWeight={700} align={"center"}
                            sx={{fontSize: {xs: "h4.fontSize", md: "h2.fontSize"}}}>NICHOLAS AGBO</Typography>
                <Typography variant={"body2"} sx={{color: "gray",}}>
                    Web developer, UI/UX designer,
                    Graphics Tutor, Graphics designer
                </Typography>
    </Grid>
    <Grid item>
            <Typography variant={"body1"}
                        component={"p"}
                        sx={{textAlign: "center"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris a interdum nibh. Vivamus non urna condimentum,
                pulvinar erat ut, mattis dui.
                Vestibulum eu tellus eu odio posuere efficitur.
            </Typography>
    </Grid>

</Grid>
                <Button variant={"outlined"} sx={{
                    borderRadius: 8,
                    color: "common.black",
                    borderColor: "common.black",
                    "&:hover":{
                        borderColor: "common.black",
                        color: "common.black",
                        transform: "scale(1.1)"
                    }
                }}>Goto main</Button>
            </Section>
        </Container>

    );

}