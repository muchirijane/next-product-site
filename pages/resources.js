import Layout from "../components/layout/layout"
import Container from "@mui/material/Container"
import Form from "../components/Form"

import Stories from "../components/Stories"

import Social from '../components/Social'
import Map from '../components/Map'


export default function Resources() {
  return (
    <Layout>
      <Container maxWidth="lg">

       
        <Stories/>

       
        <Social/>
        <Map/>

        <Form />
      </Container>
    </Layout>
  )
}
