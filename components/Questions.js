import { Box, Button, Container } from "@mui/material"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
export default function Questions() {
  const content = [
    {
      title: "What are my payment option?",
      description:
        "You can pay by credit card, debit card, net banking, paypal, or cash on delivery.",
    },
    {
      title: "How can I invite collaborator to platform?",
      description:
        "After creating your account you will have an opportunity to create your first project that will be associated with the collaborators e-mail. An invitation  will be sent automatically. Then, invited user will have to confirm his account by e-mail and finish used onboarding.",
    },
    {
      title: "Can I upgrade my plan?",
      description:
        "You can upgrade your plan by clicking on the upgrade button on the top pricing section. You can pay by credit card, debit card, net banking, paypal, or cash on delivery.",
    },
    {
      title: "Can I cancel my plan at anytime?",
      description:
        "There are refunds available for cancelled plans within 14 days of the purchase date. If you cancel your plan after 14 days of the purchase date, you will not be eligible for a refund.",
    },
  ]
  return (
    <Container maxWidth="lg" sx={{ margin: "6rem 0 3rem" }}>
      <Box textAlign="center">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Frequently asked question
        </Typography>
        <Typography variant="body1">
          Something is not clear? You need help? Check our FAQ section
        </Typography>
      </Box>
      <div style={{ marginTop: "3rem" }}>
        {content.map((item, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="success" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" fontWeight="bold">
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">{item.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </Container>
  )
}
