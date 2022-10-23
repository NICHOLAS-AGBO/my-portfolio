import {Unstable_Grid2 as Grid ,Container, List, ListItem, ListItemText, ListSubheader, Typography} from "@mui/material";

export default function Footer(){
    return(
        <Container maxWidth={false} component={"footer"} sx={{
            backgroundColor: "common.black",
            color: "common.white",
            minHeight: {xs: "90vh", sm: "50vh"}
        }}>
            <Grid xs={12} sm={6} lg={4} container>
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




            </Grid>
        </Container>

    );

}
