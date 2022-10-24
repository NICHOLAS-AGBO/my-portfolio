import { Container, Unstable_Grid2 as Grid} from "@mui/material";
import Works from "./Works";
import Skills from "./Skills";
import Portfolio from "./Portfolio";

export default function Main(){
    return(
        <main>
            <Container maxWidth={"md"} sx={{py: 8, color: "common.black"}}>
                <Grid container
                      direction={"column"}
                      justifyContent={"center"}
                      rowSpacing={8}>
                    <Grid xs={12}>
                        <Works/>
                    </Grid>
                    <Grid xs={12}>
                        <Skills/>
                    </Grid>
                    <Grid xs={12}>
                        <Portfolio/>
                    </Grid>
                </Grid>
            </Container>
        </main>
    );

}