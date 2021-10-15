import React from "react"
import mouse from "/website-assets/Macbook-Customer-page.svg"
import Grid from "@mui/material/Grid"
import Image from "next/image"
import { Card, Container } from "@mui/material"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
import { Typography } from "@mui/material"
import Box from "@mui/material/Box"
import { blue, red, orange, green, lightGreen, grey } from "@mui/material/colors"
import DeleteIcon from "@mui/icons-material/Delete"
import Favorite from "@mui/icons-material/Favorite"

export default function Cards() {
  return (
    <Grid
      wrap="nowrap"
      container
      spacing={0}
      display="inline-block"
      direction="row"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid
      wrap="nowrap"
        justify="center"
        item
        direction="row"
        xs={3}
        style={{ margin: "auto", marginTop: "10px" }}
      >
        <Card sx={{ maxWidth: 200, maxHeight: 300 }} style={{ margin: "auto" }}>
          <Box
            mb={1}
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: lightGreen[800],
              borderRadius: "15px",
              display: "flex",
              margin: "auto",
              marginTop: "10px",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Favorite sx={{ color: grey["A100"] }}></Favorite>
          </Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 200, maxHeight: 300 }} style={{ margin: "auto" }}>
          <Box
            mb={1}
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: lightGreen[800],
              borderRadius: "15px",
              display: "flex",
              margin: "auto",
              marginTop: "10px",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Favorite sx={{ color: grey["A100"] }}></Favorite>
          </Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 200, maxHeight: 300 }} style={{ margin: "auto" }}>
          <Box
            mb={1}
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: lightGreen[800],
              borderRadius: "15px",
              display: "flex",
              margin: "auto",
              marginTop: "10px",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Favorite sx={{ color: grey["A100"] }}></Favorite>
          </Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
