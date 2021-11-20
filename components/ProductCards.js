import React from "react"
import { Typography, Grid, Card, CardContent, Box, Container } from "@mui/material"
import { blue, red, lightGreen, grey } from "@mui/material/colors"

import AnalyticsIcon from "@mui/icons-material/Analytics"
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"
import InsightsIcon from "@mui/icons-material/Insights"

export default function ProductCards() {
  const content = [
    {
      title: "Special Business",
      description:
        " Business created from our team will ensure your ideas are well organized and turned into reality to bring tangible results. ",
      bg: lightGreen[800],
      icon: <BusinessCenterIcon />,
    },
    {
      title: "Instant Result",
      description:
        "Products help you see how many more days you need to work to reach your financial goal for the month and year.",
      bg: blue[500],
      icon: <AnalyticsIcon />,
    },
    {
      title: "Fastest way to organize",
      description:
        " All the tools and resources from our team will guarantee that they are effective. Your company needs will be well organized.",
      bg: red[500],
      icon: <InsightsIcon />,
    },
  ]
  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: "70px" }}>
        <Grid container spacing={3}>
          {content.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: "350px" }}>
                <Box
                  mb={1}
                  sx={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: item.bg,
                    color: grey["A100"],
                    borderRadius: "15px",
                    display: "flex",
                    margin: "auto",
                    marginTop: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {item.icon}
                </Box>
                <CardContent>
                  <Typography fontWeight="800" gutterBottom variant="h5">
                    {item.title}
                  </Typography>
                  <Typography padding="30px" variant="body1" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}
