import {Container, List, ListItem, ListItemText, ListSubheader, Typography} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function Footer(){
    return(
        <Container maxWidth={false} component={"footer"} sx={{
            backgroundColor: "common.black",
            color: "common.white",
            minHeight: {xs: "100vh", sm: "50vh"}
        }}>
            <Grid2 xs={12} sm={6} lg={4} container>
                <List subheader={<ListSubheader sx={{
                          fontSize:"subtitle1.fontSize",
                          backgroundColor: "inherit",
                          color: "inherit",
                      }}>Links</ListSubheader>}>
                    <ListItem>
                        <ListItemText primary={"Link"}/>
                    </ListItem>
                </List>
                <List subheader={<ListSubheader sx={{
                          fontSize:"subtitle1.fontSize",
                          backgroundColor: "inherit",
                          color: "inherit",
                      }}>Links</ListSubheader>}>
                    <ListItem>
                        <ListItemText primary={"Link"}/>
                    </ListItem>
                </List>
                <List subheader={<ListSubheader sx={{
                          fontSize:"subtitle1.fontSize",
                          backgroundColor: "inherit",
                          color: "inherit",
                      }}>Links</ListSubheader>}>
                    <ListItem>
                        <ListItemText primary={"Link"}/>
                    </ListItem>
                </List>
                <List subheader={<ListSubheader sx={{
                          fontSize:"subtitle1.fontSize",
                          backgroundColor: "inherit",
                          color: "inherit",
                      }}>Links</ListSubheader>}>
                    <ListItem>
                        <ListItemText primary={"Link"}/>
                    </ListItem>
                </List>




            </Grid2>
        </Container>

    );

}
