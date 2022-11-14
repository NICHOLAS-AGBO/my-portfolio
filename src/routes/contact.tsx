// @ts-ignore
import {Helmet} from "react-helmet";
import React from "react";
import {Container, Typography} from "@mui/material";

export default function Contact(){
    return(<>
        <Helmet>
            <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name={"author"} content={"NICHOLAS AGBO"} />
            <meta name={"description"} content={"Follow my social handles or contact me"} />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <title>NICHOLAS AGBO | Contact me</title>
        </Helmet>
<Container maxWidth={"sm"}>
    <Typography>
        Hello contact
    </Typography>
</Container>
    </>)
}