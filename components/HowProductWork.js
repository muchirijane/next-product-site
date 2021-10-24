import { Typography, Grid, Box, Button } from "@mui/material"
import Image from "next/image"
import macbookStepOneImg from "/website-assets/Macbook-step-1.svg"
import macbookStepTwoImg from "/website-assets/Macbook-step-2.svg"
import macbookStepThreeImg from "/website-assets/Macbook-step-3.svg"
import cardsRedGraphImg from "/website-assets/cards-red-graph.svg"
import cardsBlueGraphImg from "/website-assets/cards-blue-graph.svg"

const HowProductWork = () => {
  const content = [
    {
      image: macbookStepOneImg,
      title: "Apply for a product",
      p: "Completing our easy step-by-step application form gives you access to multiple businesses with multiple products. We analyse your business through our proprietary credit analysis technology",
    },
    {
      image: macbookStepTwoImg,
      title: "Pay fully refundable",
      p: "Product will contaccting you instantly to receive payment of the Application Fee. if no offer of product is available, your fee will be refunded",
    },
    {
      image: macbookStepThreeImg,
      title: "Completion",
      p: "Product will continue to liase between borrower and manager to procees and complete a quick and efficient settlement",
    },
  ]

  return (
    <>
      <Box component="section" color="#22343D">
        <Typography align="center" variant="h4" component="h2">
          How Product Work
        </Typography>
        {content.map((row, i) => (
          <Grid
            container
            key={i}
            spacing={2}
            flexDirection={i % 2 === 0 ? "row" : "row-reverse"}
            alignItems="center"
            my={8}
          >
            <Grid item xs={12} md={6} textAlign="center">
              <Image src={macbookStepOneImg} alt="macbook showing latest activity" />
            </Grid>
            <Grid item xs={12} md={6} my={3}>
              <Box component="div" maxWidth="380px" margin="auto">
                <Typography
                  variant="body1"
                  fontWeight="600"
                  letterSpacing="1px"
                  fontSize="1rem"
                >
                  STEP {i + 1}
                </Typography>
                <Typography variant="h5" component="h3" my={1} fontWeight="600">
                  {row.title}
                </Typography>
                <Typography variant="body1" fontWeight="400" letterSpacing=".7px">
                  {row.p}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        ))}

        <Box textAlign="center" my={10}>
          <Button href="#" variant="contained" color="success" size="large">
            Get in touch with us
          </Button>
        </Box>
      </Box>
      <Box component="section" bgcolor="#f7f7f7" p="50px">
        <Typography
          align="center"
          variant="h4"
          component="h2"
          maxWidth="500px"
          margin="auto"
        >
          Join thousand of other who have already received offers
        </Typography>
        <Grid container textAlign="center">
          <Grid item xs={12} md={6}>
            <Image src={cardsRedGraphImg} alt="red cards with rising graph" />
            <Typography my="20px" variant="h5" component="h3">
              Business
            </Typography>

            <Typography component="p">Cash Flow</Typography>
            <Typography component="p">Asset Backed</Typography>
            <Typography component="p">Receivables Finance</Typography>
            <Typography component="p">Find the best business product</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image src={cardsBlueGraphImg} alt="blue cards with bar graph" />
            <Typography variant="h5" component="h3">
              Enterprise
            </Typography>

            <Typography component="p">Site Acquisition</Typography>
            <Typography component="p">Bridge</Typography>
            <Typography component="p">Development Financing</Typography>
            <Typography component="p">Find the best business product</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default HowProductWork
