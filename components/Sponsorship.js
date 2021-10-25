import React from 'react'
import Container from "@mui/material/Container"
import { Grid, Typography, Box } from "@mui/material"
import Image from "next/image"
import microsoftLogo from "/public/customer/microsoft.svg"
import airbnbLogo from "/public/customer/airbnb.svg"
import fedexLogo from "/public/customer/fedex.svg"
import googleLogo from "/public/customer/Google.svg"
import Cards from "./cards"

export default function Sponsorship() {
  const images =[
    { 
      image: airbnbLogo,
      alt: "airbnb company Logo",
      width: 160,
      height: 50

    },
    { 
      image: googleLogo,
      alt: "Google company Logo",
      width: 146,
      height: 50
    },
    { 
      image: microsoftLogo,
      alt: "microsoft Logo",
      width: 213,
      height: 44
    },
    { 
      image: fedexLogo,
      alt: "fedex company Logo",
      width: 140,
      height: 42
    }
  ]
  return (
    <>
      <Container>
          <Typography
            style={{ textAlign: "center", marginTop: "3rem" }}
            variant="h3"
            fontWeight="800"
          >
            Our Clients
          </Typography>

          {/* Adding Client Logos */}

          <Grid container spacing={2} marginTop="2rem" >
           {images.map((item,index)=>(
             <Grid item xs={12} sm={6} md={3}>
             <Image src={item.image} alt={item.alt} width={item.width} height={item.height} />
            
            </Grid>
           ))}
          </Grid>

          

        {/* Adding Why Choose Product Part */}
        
      </Container>
      <Box component="section"  bgcolor="#f7f7f7" sx={{marginTop: "3rem", textAlign: "center", padding: "2rem 0 4rem"}}>
          <Container maxWidth="lg">
          <Typography paddingTop='30px' fontWeight="800" variant="h3">
            Why Choose Product?
          </Typography>
          <Cards />
          </Container>
        </Box>
    </>
  )
}
