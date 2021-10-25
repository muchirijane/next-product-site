import React from "react"
import { Typography, Grid, Box, Button, Container } from "@mui/material"
import Image from "next/image"
export default function ProductUsage() {
  const content = [
    {
      img: "/pricing/use1.svg",
      alt: "use1 of the product is enterprise",
      title: "Enterprenuer",
      description:
        "Product is a great way to help medium and small enterprise owners achieve their goals",
    },
    {
      img: "/pricing/use2.svg",
      alt: "use 2 of the product is by accountants",
      title: "Accountants",
      description:
        "Whether you are working on contract with clients, or on other key accounting documents, Product is for you",
    },
    {
      img: "/pricing/use3.svg",
      alt: "use 3 is by the universities",
      title: "Universities",
      description:
        "Organize university projects and have documents easily graded online with Product",
    },
  ]
  return (
    <Box marginTop="5rem" component="section">
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        sx={{ fontWeight: "bold" }}
      >
        Product is being used with great effects alongside:
      </Typography>
      <Grid container spacing={3} marginTop="3rem">
        <Grid item xs={12} md={6}>
          <Image
            src="/pricing/devices.svg"
            width={528}
            height={400}
            alt="product usage and devices used"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          {content.map((item, index) => (
            <Box
              key={index}
              display="flex"
              flexDirection="column"
              marginBottom="2rem"
            >
              <Box display="flex" alignItems="center">
                <Image src={item.img} width={50} height={50} alt={item.alt} />
                <Typography variant="h5" marginLeft="1rem" gutterBottom>
                  {item.title}
                </Typography>
              </Box>
              <Typography variant="body1" gutterBottom>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}
