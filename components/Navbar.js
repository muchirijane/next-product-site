import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



const theme = createTheme({
    palette: {

        primary: {
            main: '#fff',
            dark: '#22343D'
        },

    },
});

const useStyles = makeStyles({
    link: {
        "&:hover": {
            color: '#22343D',
            fontWeight: 'bold',
            Transition: 'all 0.3s ease-in-out'
        }
    }
})

const Navbar = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" color='primary'>
                <Container maxWidth='xl'>
                    <Toolbar>
                        <Box sx={{ display: 'flex', flexGrow: 1 }}>

                            <Box component='span' sx={{ mr: 3 }}>
                                <img src='/logo.svg' alt='logo' />
                            </Box>
                            <Typography variant='h4' >
                                <Box sx={{ fontWeight: 'bold' }}>
                                    Product
                                </Box>
                            </Typography>

                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>

                            <Link className={classes.link} href='/product' color='inherit' underline='none' mr={3}>


                                Product

                            </Link>
                            <Link className={classes.link} href='/customers' color='inherit' underline='none' mr={3}>Customers</Link>
                            <Link className={classes.link} href='/pricing' color='inherit' underline='none' mr={3}>Pricing</Link>
                            <Link className={classes.link} href='/resources' color='inherit' underline='none' mr={3}>Resources</Link>
                            <Stack direction='row'>
                                <Button variant='outlined' color='success' sx={{ mr: 4 }}>Sign In</Button>
                                <Button variant='contained' color='success'>Sign Up</Button>
                            </Stack>

                        </Box>


                    </Toolbar>
                </Container>


            </AppBar>
        </ThemeProvider >
    )
}

export default Navbar;

