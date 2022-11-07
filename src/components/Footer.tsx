import {
    Unstable_Grid2 as Grid,
    Container,
    Typography,
    IconButton,
    Button,
    Divider,
    Zoom,
    Tooltip,
    Fab, Link
} from "@mui/material";
import {ExpandLess, Facebook, GitHub, LinkedIn, Pinterest, Twitter} from "@mui/icons-material";
import {useEffect, useState} from "react";

export default function Footer(){
    const [popIn, setPopIn] = useState(false);

//SCROLL TO TOP FUNCTION
    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }

    useEffect(()=>{
        const moveUp = ()=>{
            if (window.scrollY>1500){
                setPopIn(true)
            }else {
                setPopIn(false);
            }
        }

        window.addEventListener("scroll",moveUp)

        return ()=> window.removeEventListener("scroll",moveUp);
    })
    return(
        <>
        <Container maxWidth={false}
                   component={"footer"}
                   sx={{
            backgroundColor: "rgb(16,16,16)",
            color: "common.white",
            py: 2,
           borderTop: "1px solid rgba(255, 255, 255, 0.12)",
        }}>

<Grid container
      justifyContent={"center"}
      alignItems={"center"}
      wrap={"nowrap"}
      sx={{flexDirection: {xs: "column",md: "row"}}}
      rowSpacing={2}
>
    <Grid>
        <Typography variant={"h6"} align={"center"}>  Social links  </Typography>
    </Grid>
    <Grid sx={{px: 1}}>
        <Grid container wrap={"nowrap"}>
            <Grid><Link href={"#"} underline={"none"}><IconButton sx={{color: "common.white"}}><GitHub/></IconButton></Link></Grid>
            <Grid><Link href={"#"} underline={"none"}><IconButton sx={{color: "common.white"}}><LinkedIn/></IconButton></Link></Grid>
            <Grid><Link href={"#"} underline={"none"}><IconButton sx={{color: "common.white"}}><Twitter/></IconButton></Link></Grid>
            <Grid><Link href={"#"} underline={"none"}><IconButton sx={{color: "common.white"}}><Facebook/></IconButton></Link></Grid>
            <Grid><Link href={"#"} underline={"none"}><IconButton sx={{color: "common.white"}}><Pinterest/></IconButton></Link></Grid>
        </Grid>
    </Grid>
    <Grid>
        <Button variant={"contained"} disableElevation
                sx={{
                    color: "common.black",
                    backgroundColor: "common.white",
                    "&:hover":{
                        color: "common.white",
                        backgroundColor: "transparent",
                        borderColor: "common.white",
                        borderWidth: 2,
                        borderStyle: "solid"
                    }
                }}>
            Send a Review
        </Button>
    </Grid>
</Grid>
<Divider sx={{mx: "auto", width: "100%", my: 3, borderColor: "initial"}}/>
<Typography variant={"overline"} color={"gray"} align={"center"} component={"p"}>NICHOLAS-AGBO &copy; copyright: {new Date().getFullYear()}</Typography>
        </Container>

            {/*SCROLL TO TOP BUTTON*/}
            <Zoom in={popIn} mountOnEnter unmountOnExit>
                <Tooltip title={"Move up"} placement={"top"}>
                    <Fab size={"medium"} sx={[{
                        position: "fixed",
                        zIndex: 1000,
                        bottom: {xs: 105, sm: 100},
                        backgroundColor: "common.black",
                        color: "common.white",
                        right: 20, p: 0.1,
                        borderColor: "common.white",
                        borderWidth: 2,
                        borderStyle: "solid",
                        "&:hover":{
                            backgroundColor: "common.white",
                            color: "common.black",
                            borderColor: "common.black",
                        }
                    }]} onClick={scrollUp} color="secondary" aria-label="top">
                        <ExpandLess fontSize={"large"}/>
                    </Fab>
                </Tooltip>
            </Zoom>
</>
    );

}
