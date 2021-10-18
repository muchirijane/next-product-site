import * as React from "react"
import Image from "next/image"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider, useTheme, styled } from "@mui/material/styles"
import { grey, blue, red, green, purple } from "@mui/material/colors"
import { PlayArrow } from '@mui/icons-material'
import theme from '../src/theme'

import amicoImage from "/website-assets/amico.svg"
import { fontStyle, textAlign } from "@mui/system"

const Hero = () => {

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ marginTop: "24px" }}>
        <Grid container spacing={2}
          direction="row-reverse"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={12} sm={8} justifyContent="right">
            <Image src={amicoImage} alt="Friends" />
          </Grid>
          <Grid item xs={12} sm={4} >
            <Typography
              variant="h2"
              component="h2"
              color="#22343D"
              mb={3}
              fontWeight={700}
              fontSize={30}
            >
              Works at the speed of thought
            </Typography>
            <Typography
              component="p"
              color="#22343D"
              mb={3}
              fontWeight={400}
            >
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
              <ButtonHero
                variant="text"
                color="secondary"
                size="large"
                fontWeight={700}
              >
                <PlayArrow />
                Watch the Video
              </ButtonHero>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default Hero

const ButtonHero = styled(Button)({
  textTransform: 'none'
})