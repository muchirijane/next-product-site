import { Typography, Grid, Box, Button, Container } from "@mui/material"
import Image from "next/image"
import macbookStepOneImg from '/public/customer/product-step1.png'
import macbookStepTwoImg from '/public/customer/product-step2.png'
import macbookStepThreeImg from '/public/customer/product-step3.png'
import cardsRedGraphImg from  '/public/customer/stock.png'
import cardsBlueGraphImg from  '/public/customer/chart.png'

const HowProductWork = () => {
  const content = [
    {
      image: macbookStepOneImg,
      alt: "product step 1 process",
      title: "Apply for a product",
      p: "Completing our easy step-by-step application form gives you access to multiple businesses with multiple products. We analyse your business through our proprietary credit analysis technology",
    },
    {
      image: macbookStepTwoImg,
      alt: "step 2 process",
      title: "Pay fully refundable",
      p: "Product will contacting you instantly to receive payment of the Application Fee. if no offer of product is available, your fee will be refunded",
    },
    {
      image: macbookStepThreeImg,
      alt: "step 3 product on using the product",
      title: "Completion",
      p: "Product will continue to liase between borrower and manager to process and complete a quick and efficient settlement",
    },
  ]

  return (
    <>
      <Container maxWidth="lg" sx={{marginTop: "8rem"}}>
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
                <Image
                  src={row.image}
                  alt={row.alt}
                />
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
      </Container>
      <Box component="section" bgcolor="#f7f7f7" p="50px 0 80px" color="#22343D">
        <Container maxWidth="lg">
          <Typography
            align="center"
            variant="h4"
            component="h2"
            maxWidth="500px"
            margin="40px auto 80px"
            fontWeight="700"
          >
            Join thousand of other who have already received offers
          </Typography>
          <Grid container textAlign="center">
            <Grid item xs={12} md={6}>
              <Image src={cardsRedGraphImg} alt="red cards with rising graph" />
              <Typography m="20px" variant="h5" component="h3" fontWeight="700">
                Business
              </Typography>

              <Typography component="p">Cash Flow</Typography>
              <Typography component="p" my="4px">
                Asset Backed
              </Typography>
              <Typography component="p">Receivables Finance</Typography>
              <Typography component="p" fontWeight="600" mt="16px">
                Find the best business product
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Image src={cardsBlueGraphImg} alt="blue cards with bar graph" />
              <Typography variant="h5" component="h3" my="20px" fontWeight="700">
                Enterprise
              </Typography>

              <Typography component="p">Site Acquisition</Typography>
              <Typography component="p" my="4px">
                Bridge
              </Typography>
              <Typography component="p">Development Financing</Typography>
              <Typography component="p" fontWeight="600" mt="16px">
                Find the best business product
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default HowProductWork
