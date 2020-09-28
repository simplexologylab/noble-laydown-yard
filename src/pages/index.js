import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styled from "styled-components"
import { Button, Box, Text, Heading } from "grommet"
import Logo from "../components/logo"

const Map = styled.iframe`
  width: 100%;
  height: 80vh;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box pad="small" justify="center" direction="row-responsive">
      <Box width="medium">
        <Logo />
      </Box>
      <Box direction="row" align="center" justify="center">
        <Text size="large">Call Today!</Text>
        <Button
          primary
          label="(740) 509-2693"
          color="#bb0000"
          margin="xsmall"
          href="tel:7405092693"
          width="medium"
          alignSelf="center"
        />
      </Box>
    </Box>
    <Box pad="medium" gap="medium">
      <Text>
        We provide a laydown yard rental property for Oil and Gas companies in
        Caldwell, Ohio (Noble County). Our location provides more than seven
        graveled acres with more acreage available. Ideally located along State
        Route 821 within two miles of Interstate 77 (I-77) and State 78.
      </Text>
    </Box>
    <Box
      pad="small"
      gap="small"
      justify="center"
      direction="row-responsive"
      height="medium"
    >
      <Box width="medium">
        <Image />
      </Box>
      <Box width="medium">
        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.6903813006443!2d-81.53632032026381!3d39.76588490298856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8837d3fdc5d706bb%3A0x9816db9814b2d51d!2sQuarry+Brothers+LLC+Properties!5e1!3m2!1sen!2sus!4v1543551627051"
          title="quarry-brother-llc-prop"
          frameborder="0"
          allowfullscreen
        />
      </Box>
    </Box>
    <Box gap="small" align="center">
      <Text size="large" color="#bb0000">Additional Features</Text>
      <ul>
        <li>Two miles North of Caldwell, Ohio & State Route 78</li>
        <li>Two lockable cable entrances</li>
        <li>Restaurants & Several Campsites Nearby</li>
        <li>Strong 4G cell phone service across the property</li>
        <li>Spectrum Cable/Internet Service Access Available</li>
      </ul>
    </Box>
    <Box background="#bb0000" pad="small" round align="center">
      <Heading level={3} margin="xsmall" id="contact-info">
        Contact Information
      </Heading>
      <Text margin="small">
        Call Mike Schott at 740-509-2693 for more information
      </Text>
      <Button href="tel:7405092693" label="Call Now" />
    </Box>
  </Layout>
)

export default IndexPage
