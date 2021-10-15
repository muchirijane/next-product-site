import Layout from "../components/layout/layout"
import Container from "@mui/material/Container"
import { Grid, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import { blue, red, orange, green, lightGreen, grey } from "@mui/material/colors"
import Favorite from "@mui/icons-material/Favorite"
import Image from "next/dist/client/image"
import microsoftLogo from "/website-assets/microsoft.svg"
import airbnbLogo from "/website-assets/airbnb.svg"
import fedexLogo from "/website-assets/fedex.svg"
import googleLogo from "/website-assets/Google.svg"
import Cards from "./cards"
import { padding } from "@mui/system"

export default function Customers() {
  return (
    <Layout>
      <Grid>
        <Container>
          <Typography
            style={{ textAlign: "center", marginTop: "100px" }}
            variant="h3"
            fontWeight="500"
          >
            Our Clients
          </Typography>

          {/* Adding Client Logos */}

          <Container
            style={{
              textAlign: "center",
              display: "inline-block",
              margin: "10px",
              padding: "10px",
            }}
          >
            <Grid
              container
              justifyContent="center"
              justify="space-around"
              spacing={4}
            >
              <Grid item spacing={1}>
                <Image src={airbnbLogo} width={200} height={200} />
              </Grid>
              <Grid item spacing={1}>
                <Image src={googleLogo} width={200} height={200} />
              </Grid>
              <Grid item spacing={1}>
                <Image src={microsoftLogo} width={200} height={200} />
              </Grid>
              <Grid item spacing={1}>
                <Image src={fedexLogo} width={200} height={200} />
              </Grid>
            </Grid>
          </Container>

          {/* Adding Why Choose Product Part */}
          <Container maxWidth='xl' style={{ textAlign: "center", backgroundColor: "#f5f5f5" , marginRight: '0'}}>
            <Typography variant="h3" fontWeight="500">
              Why Choose Product?
            </Typography>
            <Cards />
          </Container>
        </Container>
      </Grid>
    </Layout>
  )
}
