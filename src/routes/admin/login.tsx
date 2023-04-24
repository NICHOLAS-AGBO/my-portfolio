import {Form} from "react-router-dom";
import {
    Box,
    Button,
    Container,
    Divider,
    FormControl,
    Paper,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import logo from "../../logo.svg";
import useTheme from "../../hooks/useTheme";




export function Component() {
    const {changeTheme} = useTheme();
    return(
        <Container maxWidth={"sm"}>
            <Stack justifyContent={"center"} minHeight={"100vh"} spacing={3}>
            <Paper sx={{p: 3}}>
                <Stack justifyContent={"center"} spacing={3}>
                    <Box mx={"auto"}><img src={logo} alt={"nicholas_agbo_logo"} width={55}/></Box>
                    <Divider><Typography variant={"subtitle1"}>Sign into admin</Typography></Divider>
                    <Form method={"post"}>
                        <FormControl fullWidth variant={"filled"} sx={{rowGap: 3, flexGrow: 0}}>
                            <TextField id={"email"} label={"Email address"} name={"email"} type={"email"} placeholder={"abcd@email.com"}/>
                            <TextField id={"password"} label={"Password"} name={"password"} type={"password"} placeholder={"********"}/>
                            <Button variant={"contained"} size={"large"} onClick={()=>changeTheme("system")}>Login</Button>
                        </FormControl>

                    </Form>

                </Stack>
            </Paper>
            </Stack>

        </Container>
    );
}

Component.displayName = "Login";