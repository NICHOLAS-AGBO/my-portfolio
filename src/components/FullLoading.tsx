import {Box, CircularProgress, Paper} from "@mui/material";
import React from "react";
import logo from "../logo.svg"

export default function Loading(){
    return(
            <Paper elevation={0} sx={{
                borderRadius: 0,
                position: "fixed",
                zIndex: 2000,
                top: 0
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100vw",
                    height: "100vh",
                    position: "relative"
                }}>
                    <Box sx={{
                        position: "absolute",
                        zIndex: 1,
                    }}><img src={logo} alt={"website logo"} width={60}/></Box>
                    <CircularProgress color={"primary"} size={80} thickness={1} sx={{opacity: .9}}/>
                </Box>
            </Paper>
    );
}
export {Loading as FullLoading};