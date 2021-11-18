import {
  Typography,
  Grid,
  Box,
  Button,
  Container,
  Link,
  FormControl,
  TextField,
} from "@mui/material"
import Image from "next/image"
import { makeStyles } from "@mui/styles"
import facebookIcon from "/public/resources/facebook.svg"
import instagramIcon from "/public/resources/instagram.svg"
import twitterIcon from "/public/resources/twitter.svg"

const useStyles = makeStyles({
  link: {
    color: "#22343D",
    textDecoration: "none",
    paddingBottom: "10px",
    transition: "all 0.3s ease-in-out",

    "&:hover": {
      color: "#02897A",
    },
  },
})

const Footer = () => {
  const classes = useStyles()
  const icons = [
    { img: facebookIcon, alt: "facebook icon link" },
    { img: instagramIcon, alt: "instagram icon link" },
    { img: twitterIcon, alt: "twitter icon" },
  ]
  return (
    <Container maxWidth="lg" sx={{ marginTop: "80px", marginBottom: "40px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Box>
            <Box sx={{ display: "flex", flexGrow: 1 }}>
              <Box component="span" sx={{ mr: 3 }}>
                <Image src="/logo.svg" alt="logo" width={36} height={36} />
              </Box>
              <Typography variant="h4">
                <Box sx={{ fontWeight: "bold" }}>Product</Box>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", marginTop: "2rem" }}>
              {icons.map((item, index) => (
                <Link key={index} href="/" sx={{ padding: "0 1rem" }}>
                  <Image src={item.img} alt={item.alt} />
                </Link>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h4" sx={{ fontSize: "20px", marginBottom: "20px" }}>
            Resources
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Link className={classes.link} href="/">
              Product
            </Link>
            <Link className={classes.link} href="/">
              Customer
            </Link>
            <Link className={classes.link} href="/">
              Pricing
            </Link>
            <Link className={classes.link} href="/">
              Resources
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h4" sx={{ fontSize: "20px", marginBottom: "20px" }}>
            Legal Stuff
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Link className={classes.link} href="/">
              Disclaimer
            </Link>
            <Link className={classes.link} href="/">
              Financing
            </Link>
            <Link className={classes.link} href="/">
              Privacy Policies
            </Link>
            <Link className={classes.link} href="/">
              Terms of Services
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h4" sx={{ fontSize: "20px", marginBottom: "20px" }}>
            Knowing you're always on the best energy deal.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormControl>
              <TextField
                id="email"
                type="email"
                placeholder="Enter your email"
                sx={{ marginBottom: "22px" }}
              ></TextField>
              <Button variant="contained" color="success">
                Sign Up Now
              </Button>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
      <Typography
        variant="body2"
        sx={{
          color: "#22343D",
          fontSize: "12px",
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        Made With Love By Figmaland All Right Reserved{" "}
      </Typography>
    </Container>
  )
}

export default Footer
