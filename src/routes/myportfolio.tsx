import {Container, Unstable_Grid2 as Grid} from "@mui/material";
// @ts-ignore
import {Helmet} from "react-helmet";

import React from "react";
import Loading from "./components/LPortfolio";
import {FullLoading} from "../components/FullLoading";

const Portfolio = React.lazy(()=>import("./components/Portfolio"));

function PortfolioContents(){
    return(
        <>
            <Helmet>
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name={"author"} content={"NICHOLAS AGBO"} />
                <meta name={"description"} content={"Sample of my projects as a professional."} />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <title>NICHOLAS AGBO | My project portfolio</title>
            </Helmet>
        <Container maxWidth={false} sx={{py: 5}}>
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
        </>
    )
}


export default function MyPortfolio(){
    return(
<React.Suspense fallback={<FullLoading/>}>
    <PortfolioContents/>
</React.Suspense>
    );
}