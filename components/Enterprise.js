import { Typography, Box, Button, Container } from "@mui/material"

import React from "react"
import ProductUsage from "./ProductUsage"
import Questions from "./Questions"

export default function Enterprise() {
  return (
    <Box component="section" bgColor="#FAFAFA" color="#22343D">
      <Container maxWidth="lg">
        <Box textAlign="center" p="3rem 0">
          <Typography
            variant="h5"
            component="h2"
            marginBottom="2rem"
            sx={{ fontWeight: 600, textTransform: "uppercase" }}
          >
            Enterprise
          </Typography>
          <Typography
            variant="h4"
            component="h3"
            marginBottom="1rem"
            sx={{ fontWeight: "bold" }}
          >
            Are you interested in a custom-tailored plan?
          </Typography>
          <Typography variant="body1" marginBottom="3rem" fontSize="1.2rem">
            Product is a set of advanced features for really large teams with
            projects.
          </Typography>

          <Button variant="contained" color="success">
            Get in touch with us
          </Button>
        </Box>
        <ProductUsage />
        <Questions />
      </Container>
    </Box>
  )
}
