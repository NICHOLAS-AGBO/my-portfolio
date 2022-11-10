import {Container, Unstable_Grid2 as Grid} from "@mui/material";
import React from "react";
import Loading from "./components/LPortfolio";
import {FullLoading} from "../components/FullLoading";

const Portfolio = React.lazy(()=>import("./components/Portfolio"));

function PortfolioContents(){
    return(
        <Container maxWidth={false} sx={{py: 4}}>
            <Grid container
                  direction={"column"}
                  justifyContent={"center"}
                  rowSpacing={8}
            >
                    <React.Suspense fallback={<Loading/>}>
                        <Portfolio/>
                    </React.Suspense>


            </Grid>
        </Container>
    )
}



export default function MyPortfolio(){
    return(
<React.Suspense fallback={<FullLoading/>}>
    <PortfolioContents/>
</React.Suspense>
    );
}