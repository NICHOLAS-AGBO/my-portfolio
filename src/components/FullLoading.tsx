import {Box, CircularProgress, Paper} from "@mui/material";
import React from "react";

export default function Loading(){
    return(
            <Paper elevation={0} sx={{
                borderRadius: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                height: "90vh",
            }}>
                <CircularProgress color={"primary"}/>
            </Paper>
    );
}
export {Loading as FullLoading};