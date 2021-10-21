import Layout from "../components/layout/layout"
import Container from "@mui/material/Container"
import Feature from "../components/Feature"
import Form from "../components/Form"
import CustomerSupport from "../components/CustomerSupport"

export default function Home() {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Feature />
        <CustomerSupport />
        <Form />
      </Container>
    </Layout>
  )
}
