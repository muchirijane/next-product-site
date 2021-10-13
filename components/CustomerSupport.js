import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import laptopImage from '/website-assets/customer-support.svg'
import Typography from "@mui/material/Typography"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Box from '@mui/material/Box'
import CheckIcon from '@mui/icons-material/Check'
import { blue, red, orange, grey } from "@mui/material/colors"



const CustomerSupport = () => {
    return <Container maxWidth="lg">
        <Grid container mt={5} columnSpacing={15} rowSpacing={6} alignItems="center">
            <Grid item xs={12} md={6} >
                <Image src={laptopImage} alt="Customer Support Image" />
            </Grid>
            <Grid item xs={12}  md={6} padding="0% 5%">
                <Typography variant="body1" pl={0.5} mb={1.5} fontWeight="550" color="#40525B">
                    Easier decision making for
                </Typography>
                <Typography variant="h3" color="#22343D" mb={3} fontWeight={560} fontSize={30}>
                    Customer Support
                </Typography>
                <Typography variant="body1" mb={2}>
                    The MySpace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person.
                </Typography>
                <List>
                    <ListItem sx={{ paddingLeft: 0, display: 'flex', alignItems: 'flex-start'}}>
                        <ListItemIcon> 
                        <Box
                            mb={1}
                            sx={{
                            width: "40px",
                            height: "40px",
                            backgroundColor: orange[400],
                            borderRadius: "15px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
                            }}
                        >
                            <CheckIcon sx={{ color: grey["A100"] }} />
                    
                        </Box>
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="body1">Never worry about overpaying for your energy again.</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem sx={{ paddingLeft: 0, display: 'flex', alignItems: 'flex-start'}}>
                        <ListItemIcon> 
                        <Box
                            mb={1}
                            sx={{
                            width: "40px",
                            height: "40px",
                            backgroundColor: red[400],
                            borderRadius: "15px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
                            }}
                        >
                            <CheckIcon sx={{ color: grey["A100"] }} />
                    
                        </Box>
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="body1">We will only switch you to energy companies that we trust and will treat you right</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem sx={{ paddingLeft: 0, display: 'flex', alignItems: 'flex-start'}}>
                        <ListItemIcon> 
                        <Box
                            mb={1}
                            sx={{
                            width: "40px",
                            height: "40px",
                            backgroundColor: blue[400],
                            borderRadius: "15px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
                            }}
                        >
                            <CheckIcon sx={{ color: grey["A100"] }} />
                    
                        </Box>
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="body1">We track the markets daily and know where the savings are.</Typography>
                        </ListItemText>
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    </Container>;
}

export default CustomerSupport
