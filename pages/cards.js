import React from "react"
import Grid from "@mui/material/Grid"
import { Card } from "@mui/material"
import CardContent from "@mui/material/CardContent"
import { Typography } from "@mui/material"
import Box from "@mui/material/Box"
import { blue, red, orange, green, lightGreen, grey } from "@mui/material/colors"
import Favorite from "@mui/icons-material/Favorite"
import LinkIcon from '@mui/icons-material/Link';
import MouseIcon from '@mui/icons-material/Mouse';
import "../styles/Home.module.css"


export default function Cards() {
  return (
    <Grid container>
      <Grid style={{ margin: "auto", marginTop: "70px", display: "flex" }}>
        <Card
          sx={{ maxWidth: 200, maxHeight: 250 }}
          style={{ margin: "auto", backgroundColor: "#f5f5f5", minWidth: "350px",minHeight: '250px' }}
        >
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
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.5)",
            }}
          >
            <MouseIcon fontSize="small" sx={{ color: grey["A100"] }}></MouseIcon>
          </Box>
          <CardContent>
            <Typography fontFamily='Menlo' fontWeight="800" gutterBottom variant="h5" component="div">
              Special Business
            </Typography>
            <Typography padding='30px' fontFamily='Menlo' variant="body2" color="text.secondary">
              Products help you see how many more days you need to work to reach your
              financial goal for the month and year.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid style={{ margin: "auto", marginTop: "70px", display: "flex" }}>
        <Card
          sx={{ maxWidth: 200, maxHeight: 250 }}
          style={{ margin: "auto", backgroundColor: "#f5f5f5", minWidth: "350px",minHeight: '250px'}}
        >
          <Box
            mb={1}
            sx={{
              width: "40px",
              height: "40px",

              backgroundColor: blue[500],
              borderRadius: "15px",
              display: "flex",
              margin: "auto",
              marginTop: "10px",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.5)",
            }}
          >
            <LinkIcon fontSize="small" sx={{ color: grey["A100"] }}></LinkIcon>
          </Box>
          <CardContent>
            <Typography fontFamily='Menlo' fontWeight="800" gutterBottom variant="h5" component="div">
            Instant Result
            </Typography>
            <Typography padding='30px' fontFamily='Menlo' variant="body2" color="text.secondary">
            Products help you see how many more days you need to work to reach your
          financial goal for the month and year
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid style={{ margin: "auto", marginTop: "70px", display: "flex" }}>
        <Card
          sx={{ maxWidth: 200, maxHeight: 250 }}
          style={{ margin: "auto", backgroundColor: "#f5f5f5", minWidth: "370px", minHeight: '250px' }}
        >
          <Box
            mb={1}
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: red[500],
              borderRadius: "15px",
              display: "flex",
              margin: "auto",
              marginTop: "10px",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Favorite fontSize="small" sx={{ color: grey["A100"] }}></Favorite>
          </Box>
          <CardContent>
            <Typography fontFamily='Menlo' fontWeight="800" gutterBottom variant="h5" component="div">
            Fastest way to organize
            </Typography>
            <Typography padding='30px' fontFamily='Menlo' variant="body2" color="text.secondary">
            Products help you see how many more days you need to work to reach your
          financial goal for the month and year
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
