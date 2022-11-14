import {Box, Container, IconButton, Link, styled, Typography, Unstable_Grid2 as Grid} from "@mui/material";
import graphics1 from "../../img/portfolio/p1.png";
import uiux1 from "../../img/portfolio/p2.png";
import web1 from "../../img/portfolio/p3.png";
import {OpenInFull} from "@mui/icons-material";


const HiddenDrawer = styled(Link)(({theme})=>(
    {
        width: "100%",
        textAlign: "center",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        height: 50,
        bottom: 0, left: 0,
        zIndex: 1,
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
    }
));

const ScaleButton = styled(IconButton)(({theme})=>(
    {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        top: 6, right: 6,
        zIndex: 1,
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        "&:hover":{
            backgroundColor: "rgba(255,255,255,0.5)",
        }
    }
));

const MuiImage = styled("img")(({theme})=>({
    width: "100%",
    cursor: "pointer",
    transition: `transform 0.5s ${theme.transitions.easing.sharp}`,
    "&:hover":{
        transform: "scale(1.05)",
    }
}));

const Item= styled(Box)(({theme})=>({
    aspectRatio: "16 / 9",
    borderColor: theme.palette.common.white,
    borderWidth: theme.spacing(0.5),
    borderStyle: "solid",
    borderRadius: theme.spacing(4),
    position: "relative",
    overflow: "hidden",
    boxShadow: theme.shadows[2],
    backgroundColor: theme.palette.common.white,
}));

export default function Portfolio(){
    return(
        <>
            {/*section web*/}
            <Grid xs={12}>
        <Container maxWidth={"lg"} disableGutters id={"web"}>

            <Typography variant={"h4"} align={"center"} fontWeight={700}
                        sx={{
                            color: "primary.main",
                            fontSize: {xs: "h5.fontSize", md: "h4.fontSize"},
                            mb: 2,
            }}>
                Web projects
            </Typography>
            <Grid
                container
                justifyContent={"center"}
                spacing={3}
            >
                <Grid xs={12} md={6}>
                    <Item>
                        <ScaleButton size={"small"}>
                            <OpenInFull/>
                        </ScaleButton>
                    <MuiImage src={web1} alt={"web project image"} />
                    <HiddenDrawer href={"#"} variant={"subtitle1"} color={"inherit"} title={"view this project"}>
                            https://myproject.com/
                    </HiddenDrawer>
                    </Item>
                </Grid>

                <Grid xs={12} md={6}>
                    <Item>
                        <ScaleButton size={"small"}>
                            <OpenInFull/>
                        </ScaleButton>
                        <MuiImage src={web1} alt={"web project image"} />
                        <HiddenDrawer href={"#"} variant={"subtitle1"} color={"inherit"} title={"view this project"}>
                            https://myproject.com/
                        </HiddenDrawer>
                    </Item>
                </Grid>



            </Grid>
        </Container>
            </Grid>

            {/*section graphics*/}
            <Grid xs={12}>
        <Container maxWidth={"lg"} disableGutters id={"graphics"}>

        <Typography variant={"h4"} align={"center"} fontWeight={700}
                    sx={{
                        color: "primary.main",
                        fontSize: {xs: "h5.fontSize", md: "h4.fontSize"},
                        mb: 2,
                    }}>
            Graphics projects
        </Typography>
        <Grid
            container
            justifyContent={"center"}
            spacing={3}
        >
            <Grid xs={12} md={6}>
                <Item>
                    <ScaleButton size={"small"}>
                        <OpenInFull/>
                    </ScaleButton>
                    <MuiImage src={graphics1} alt={"graphics project image"} />
                    <HiddenDrawer href={"#"} variant={"subtitle1"} color={"inherit"} title={"view this project"}>
                        https://myproject.com/
                    </HiddenDrawer>
                </Item>
            </Grid>

            <Grid xs={12} md={6}>
                <Item>
                    <ScaleButton size={"small"}>
                        <OpenInFull/>
                    </ScaleButton>
                    <MuiImage src={graphics1} alt={"graphics project image"} />
                    <HiddenDrawer href={"#"} variant={"subtitle1"} color={"inherit"} title={"view this project"}>
                        https://myproject.com/
                    </HiddenDrawer>
                </Item>
            </Grid>



        </Grid>
    </Container>
            </Grid>

            {/*section UI/UX*/}
            <Grid xs={12}>
    <Container maxWidth={"lg"} disableGutters id={"uiux"}>

        <Typography variant={"h4"} align={"center"} fontWeight={700}
                    sx={{
                        color: "primary.main",
                        fontSize: {xs: "h5.fontSize", md: "h4.fontSize"},
                        mb: 2,
                    }}>
            UI/UX projects
        </Typography>
        <Grid
            container
            justifyContent={"center"}
            spacing={3}
        >
            <Grid xs={12} md={6}>
                <Item>
                    <ScaleButton size={"small"}>
                        <OpenInFull/>
                    </ScaleButton>
                    <MuiImage src={uiux1} alt={"uiux project image"} />
                    <HiddenDrawer href={"#"} variant={"subtitle1"} color={"inherit"} title={"view this project"}>
                        https://myproject.com/
                    </HiddenDrawer>
                </Item>
            </Grid>

            <Grid xs={12} md={6}>
                <Item>
                    <ScaleButton size={"small"}>
                        <OpenInFull/>
                    </ScaleButton>
                    <MuiImage src={uiux1} alt={"uiux project image"} />
                    <HiddenDrawer href={"#"} variant={"subtitle1"} color={"inherit"} title={"view this project"}>
                        https://myproject.com/
                    </HiddenDrawer>
                </Item>
            </Grid>



        </Grid>
    </Container>
            </Grid>
</>

);
}