import { Container, Grid} from "@mui/material";
import Works from "./Works";

export default function Main(){
    return(
        <Container maxWidth={"md"} sx={{py: 8}}>
                <Grid container
                      direction={"column"}
                      justifyContent={"center"}
                      rowSpacing={12}>
                    <Grid item xs={12}>
                        <Works/>
                    </Grid>
                    <Grid item xs={12}>
                        <Works/>
                    </Grid>
                </Grid>
        </Container>

    );

}