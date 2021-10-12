import * as React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import CodeIcon from "@mui/icons-material/Code"
import DesignServicesIcon from "@mui/icons-material/DesignServices"
import BubbleChartIcon from "@mui/icons-material/BubbleChart"
import HowToRegIcon from "@mui/icons-material/HowToReg"
import { grey, blue, red, green, purple } from "@mui/material/colors"

const Feature = () => {
  return (
    <Container maxWidth="lg" mt={5}>
      <Typography variant="h4" sx={{ textAlign: "center", mt: 8 }}>
        Product was Built Specifically for You
      </Typography>

      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            mb={1}
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: green[700],
              borderRadius: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <CodeIcon sx={{ color: grey["A100"] }} />
          </Box>
          <Typography variant="h5">First click tests</Typography>
          <Typography variant="body1">
            We have a first click test system that allows you to test your Ideas
            before we work on them.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            mb={1}
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: blue[700],
              borderRadius: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <DesignServicesIcon sx={{ color: grey["A100"] }} />
          </Box>
          <Typography variant="h5">Design Surveys</Typography>
          <Typography variant="body1">
            We will help you understand your users needs and provide a solution from
            their feedback.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            mb={1}
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: purple[700],
              borderRadius: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <BubbleChartIcon sx={{ color: grey["A100"] }} />
          </Box>
          <Typography variant="h5">Preference Test</Typography>
          <Typography variant="body1">
            The team will test your idea to see if it is a good fit for your product.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            mb={1}
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: red[700],
              borderRadius: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <HowToRegIcon sx={{ color: grey["A100"] }} />
          </Box>
          <Typography variant="h5">Five Second Tests</Typography>
          <Typography variant="body1">
            We will test your idea for 5 seconds to see if it is a good fit for your
            market.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Feature
