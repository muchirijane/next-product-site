import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Image from "next/image"
import laptopImage from "/website-assets/managementLogo.svg"
import Typography from "@mui/material/Typography"
import List from "@mui/material/List"

const Management = () => {
  return (
    <Container maxWidth="lg">
      <Grid
      marginTop='70px'
        container
        alignItems="center"
        justifyContent="space-between"
        direction="row-reverse"
        spacing={2}
      >
        <Grid item xs={12} md={6} justifyContent="right">
          <Image src={laptopImage} alt="Customer Support Image"/>
        </Grid>
        <Grid item xs={12} md={6} padding="0% 5%">
          <Typography
            variant="body1"
            pl={0.5}
            mb={1.5}
            fontWeight="550"
            color="#40525B"
          >
            Effortless validation for
          </Typography>
          <Typography
            variant="h3"
            color="#22343D"
            mb={3}
            fontWeight={560}
            fontSize={30}
          >
            Management
          </Typography>
          <Typography variant="body1" mb={2}>
            The MySpace page defines the individual, his or her characteristics,
            traits, personal choices and the overall personality of the person.
          </Typography>
          <List>
            <Typography
              variant="body1"
              pl={0.5}
              mb={1.5}
              fontWeight="550"
              color="#40525B"
            >
              Accessory makers
            </Typography>

            <Typography variant="body1" style={{ marginTop: "10px" }}>
              While most people enjoy casino gambling, sports betting, lottery and
              bingo playing for the fun
            </Typography>

            <Typography
              variant="body1"
              pl={0.5}
              mb={1.5}
              fontWeight="550"
              color="#40525B"
              style={{ marginTop: "10px" }}
            >
              Alterationists
            </Typography>
            <Typography variant="body1">
              If you are looking for a new way to promote your business that won&apos;t
              cost you more money
            </Typography>
          </List>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Management
