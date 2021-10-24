import Layout from "../components/layout/layout"
import Container from "@mui/material/Container"
import HowProductWork from "../components/HowProductWork"
export default function Product() {
  return (
    <Layout>
      <Container maxWidth="lg">
        <h1>Product Page</h1>
      </Container>
      <HowProductWork />
    </Layout>
  )
}
