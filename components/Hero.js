import * as React from "react"
import Image from "next/image"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import { ThemeProvider, styled } from "@mui/material/styles"
import { PlayArrow } from "@mui/icons-material"
import theme from "../src/theme"

import amicoImage from "/public/home/amico.svg"

const ButtonHero = styled(Button)({
  textTransform: "none",
})

const WatchButton = styled(Button)({
  textTransform: "none",
  textDecoration: "underline",
})

const Hero = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ marginTop: "24px" }}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          direction="row-reverse"
          spacing={4}
        >
          <Grid item xs={12} sm={8} justifyContent="right">
            <Image src={amicoImage} alt="hero-image" width={600} height={556} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              component="h4"
              variant="h4"
              color="#22343D"
              fontWeight={800}
              mb={3}
            >
              Work at the speed of thought
            </Typography>
            <Typography variant="body1" color="#22343D" mb={5} fontWeight={400}>
              Tools, tutorial, design and innovation experts, all in one place! The
              most intuitive way to imagine your next user experience
            </Typography>
            <Stack direction="row" justifyContent="space-between" spacing={2}>
              <ButtonHero
                variant="contained"
                color="secondary"
                size="large"
                fontWeight={700}
              >
                Get started
              </ButtonHero>
              <WatchButton
                variant="text"
                color="secondary"
                size="large"
                fontWeight={700}
              >
                <PlayArrow />
                Watch the Video
              </WatchButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default Hero
