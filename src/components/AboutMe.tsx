import {
    Avatar,
    Button,
    Container,
    Unstable_Grid2 as Grid,
    styled,
    Typography,
    Tooltip,
    Box
} from "@mui/material";
import Nicholas from "../img/pic.png";
import {ExpandMore} from "@mui/icons-material";
import {WEB_EXPERIENCE_YEAR} from "../dateExp";

const Section = styled(Box)(({theme})=>({
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
    const gotoMain = () => {
      window.scrollTo({
          top: document.querySelector("main")?.offsetTop,
          behavior: "smooth"
      });
    };

    return(
        <Container sx={{
            minHeight: "100vh",
        }} maxWidth={"sm"}>
            <Section>
                <Avatar src={Nicholas} alt={"nicholas-agbo"}
                        sx={{mx: "auto", width: {xs: 170, md: 200}, height: {xs: 170, md: 200}}}/>
<Grid container
      direction={"column"}
      justifyContent={"center"}
      spacing={2}>

            <Grid sx={{textAlign: "center"}}>
                <Typography variant={"h1"} fontWeight={900} align={"center"}
                            sx={{fontSize: {xs: "h4.fontSize", md: "h2.fontSize"}}}>NICHOLAS AGBO</Typography>
                <Typography variant={"body2"} sx={{color: "gray",}}>
                    Web Developer, UI/UX designer, Graphics designer/Tutor
                </Typography>
    </Grid>

    <Grid>
            <Typography variant={"body1"}
                        component={"p"}
                        sx={{textAlign: "center"}}>
                Fullstack developer with {WEB_EXPERIENCE_YEAR} years experience in Web development.
                    Specialised mostly in NextJS, React, Typescript, ECMAScript, SASS, Tailwind, Web3.
            </Typography>
    </Grid>

</Grid>
               <Tooltip title={"Goto main section"}>
                   <Button variant={"outlined"}
                           onClick={gotoMain}
                           sx={{
                               borderRadius: 8, px: 3,
                               color: "primary.main",
                               borderColor: "primary.main",
                               borderWidth: 2,
                               transition: "all 300ms",
                               "&:hover":{
                                   border: "none",
                                   transform: "scale(1.1)",
                                   backgroundColor: "primary.main",
                                   color: "secondary.main"
                               }
                           }}>
                       <ExpandMore fontSize={"large"}/>
                   </Button>
               </Tooltip>
            </Section>
        </Container>

    );

}