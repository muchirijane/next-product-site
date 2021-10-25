import Layout from "../components/layout/layout"
import Container from "@mui/material/Container"
import Form from "../components/Form"
import Stories from "../components/Stories"

export default function Resources() {
  return (
    <Layout>
      <Container maxWidth="lg">
        <h1>Resources Page</h1>
        <Stories/>
        <Form />
      </Container>
    </Layout>
  )
}
