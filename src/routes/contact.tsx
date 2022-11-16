// @ts-ignore
import {Helmet} from "react-helmet";
import React from "react";
import {
    Alert, AlertTitle,
    Avatar,
    Box, Button,
    Container,
    Divider,
    IconButton, Link, Slide,
    Stack, styled, TextField,
    Typography,
    Unstable_Grid2 as Grid
} from "@mui/material";
import me from "../img/pic.png";
import {Close, Email, Facebook, GitHub, LinkedIn, Twitter} from "@mui/icons-material";
import { useForm, ValidationError } from '@formspree/react';

const EmailContainer = styled(Stack)(({theme})=>({
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 1,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: theme.spacing(8),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(1),
    background: theme.palette.mode==="dark"?"rgba(255,255,255,.15)":"#f2f2f2",
    width: "max-content"
}))

function ContactForm() {
    const [val, setVal] = React.useState({
        name: "",
        email: "",
        message: ""
    });
    const [state, handleSubmit] = useForm("meqdnkjr",{
        data:{
            subject: `${val.name} contacted you`,
        }
    });
    const [alert, setAlert] = React.useState(true);

    const handleInputs = (e:React.BaseSyntheticEvent)=>{
        const input = {[e.target.name]:e.target.value};
        setVal({...val,...input});
        if (e.target.name === "message"){
            e.target.setAttribute("maxlength","250");
        }
    };

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return(
<>
    <form onSubmit={handleSubmit}>
        <Grid container
              component={"fieldset"}
              rowSpacing={2}
              direction={"column"}
              sx={{borderRadius: 2}}
              id="work">
            <Typography component={"legend"} align={"center"} variant={"h4"} fontWeight={700}>Contact me</Typography>
            <Grid xs={12}>
                <TextField
                    onInput={handleInputs}
                    value={val.name}
                    label={"Name"}
                    id="name"
                    type="text"
                    name="name"
                    fullWidth
                    required
                />

                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />
            </Grid>

            <Grid xs={12}>
                <TextField
                    onInput={handleInputs}
                    value={val.email}
                    label={"Email"}
                    id="email"
                    type="email"
                    name="email"
                    required
                    fullWidth
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </Grid>
            <Grid xs={12}>
                <TextField
                    onInput={handleInputs}
                    value={val.message}
                    multiline
                    label={"Message"}
                    fullWidth
                    rows={5}
                    aria-valuemax={250}
                    id="message"
                    name="message"
                    placeholder={"Enter your message...(max character 250)"}
                    required
                    variant={"outlined"}
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </Grid>
            <Grid xs={12}>
                <Button fullWidth
                        variant={"contained"}
                        type="submit"
                        size={"large"}
                        disabled={state.submitting}
                        sx={{
                            backgroundColor: "primary.main",
                            color: "secondary.main",
                            borderColor: "secondary.main",
                            borderWidth: 2,
                            borderStyle: "solid",
                            "&:hover":{
                                backgroundColor: "secondary.main",
                                color: "primary.main",
                                borderColor: "primary.main",
                                borderWidth: 2,
                                borderStyle: "solid",
                            }
                        }}
                >
                    {state.submitting?<>Submitting</>:<>Submit</>}
                </Button>
            </Grid>

        </Grid>
    </form>
    {(alert&&state.succeeded)&&
        <Slide direction="right"
               in={state.succeeded}
               mountOnEnter unmountOnExit>
            <Alert variant={"filled"} action={
                <IconButton color={"inherit"}
                            size={"small"}
                            onClick={()=> {
                                setVal({
                                    name: "",
                                    email: "",
                                    message: ""
                                });
                                setAlert(false);
                            }}>
                    <Close/></IconButton>}
                   sx={{width: "max-content", my: 1}}
                   severity={"success"}
            >
                <AlertTitle>Message submitted</AlertTitle>
                Thanks for contacting me.
            </Alert>
        </Slide>
    }
</>
);
}


export default function Contact(){
    return(<>
        <Helmet>
            <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name={"author"} content={"NICHOLAS AGBO"} />
            <meta name={"description"} content={"Visit my social media handles or contact me"} />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <title>NICHOLAS AGBO | Contact me</title>
        </Helmet>
<Container maxWidth={"sm"} sx={{py: 4,}}>
    <Stack direction={"row"} draggable={true} sx={{
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        mx: "auto"
    }}>
        <Avatar src={me} sx={{
            zIndex: 2,
            width: {xs: 50, sm: 70},
            height: {xs: 50, sm: 70},
            borderColor: "common.white",
            borderStyle: "solid",
            borderWidth: 2,
            boxShadow: 3,
        }}/>
        <Box sx={{
            bxShadow: 2, px: 3, py: {xs: 1, sm: 2},
            backgroundColor: "primary.main",
            borderRadius: 8,
            marginLeft: -1,
            position: "relative",
            boxShadow: "4px 6px 0px gray"
        }}>
            <Typography variant={"h6"} fontWeight={700} color={"secondary"}>NICHOLAS AGBO</Typography>
            <Typography variant={"caption"} color={"gray"} sx={{display: {xs: "block", sm: "none"}}}>Contact me</Typography>
            <Typography variant={"caption"} color={"gray"} sx={{display: {xs: "none", sm: "block"}}}>Web developer,Graphics designer/tutor, UI/UX designer.</Typography>
        </Box>
    </Stack>

    <EmailContainer direction={"row"}>
        <IconButton disabled>
            <Email/>
        </IconButton>
        <Link href={"mailto:agbonicholas82@gmail.com"}><Typography>agbonicholas82@gmail.com</Typography></Link>
    </EmailContainer>

<Divider sx={{width: "90%", mt: 3, mb: 2, mx: "auto"}}/>

    <Grid container justifyContent={"center"} alignItems={"center"} rowSpacing={3}>
        <Grid xs={10} sm={5}>
            <Stack direction={"row"} sx={{
                flexWrap: "nowrap",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
            }}>
                <IconButton disabled>
                    <GitHub/>
                </IconButton>
                <Typography>NICHOLAS-AGBO</Typography>
            </Stack>
        </Grid>


        <Grid xs={10} sm={5}>
            <Stack direction={"row"} sx={{
                flexWrap: "nowrap",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
            }}>
                <IconButton disabled>
                    <Facebook/>
                </IconButton>
                <Typography>Nicholas Agbo</Typography>
            </Stack>
        </Grid>

        <Grid xs={10} sm={5}>
            <Stack direction={"row"} sx={{
                flexWrap: "nowrap",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
            }}>
                <IconButton disabled>
                    <Twitter/>
                </IconButton>
                <Typography>AgboNicholas1</Typography>
            </Stack>
        </Grid>

        <Grid xs={10} sm={5}>
            <Stack direction={"row"} sx={{
                flexWrap: "nowrap",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
            }}>
                <IconButton disabled>
                    <LinkedIn/>
                </IconButton>
                <Typography>Nicholas Agbo</Typography>
            </Stack>
        </Grid>

    </Grid>

    <Divider sx={{width: "90%", my: 3, mx: "auto"}}/>
    {/*    section form*/}
<ContactForm/>
</Container>
    </>)
}