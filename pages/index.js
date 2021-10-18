import Layout from "../components/layout/layout"
import Container from "@mui/material/Container"
import Hero from '../components/Hero'
import Feature from "../components/Feature"
import CustomerSupport from '../components/CustomerSupport'
export default function Home() {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Hero />
        <Feature />
        <CustomerSupport />
      </Container>
    </Layout>
  )
}
