import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styled from "styled-components"

const Map = styled.iframe`
  width: 100%;
  height: 80vh;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ width: `100%`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Map
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.6903813006443!2d-81.53632032026381!3d39.76588490298856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8837d3fdc5d706bb%3A0x9816db9814b2d51d!2sQuarry+Brothers+LLC+Properties!5e1!3m2!1sen!2sus!4v1543551627051"
      title="quarry-brother-llc-prop"
      frameborder="0"
      allowfullscreen
    />
    <h3>
      Ideal rental location between Belle Valley and Caldwell, Ohio on State
      Route 821. Site includes:
    </h3>
    <ul>
      <li>Seven graveled Acres with more acreage available</li>
      <li>
        Located two miles from Interstate 77 (I-77) Exit 28 (Belle Valley)
      </li>
      <li>Two miles North of Caldwell, Ohio & State Route 78</li>
      <li>Two lockable cable entrances</li>
      <li>Restaurants & Several Campsites Nearby</li>
      <li>Strong 4G cell phone service across the property</li>
      <li>Spectrum Cable/Internet Service Access Available</li>
    </ul>
    <h3>Contact Information</h3>
    <p>Contact Mike Schott for more information</p>
    <ul>
      <li>
        <a href="tel:7405092693">Call (740) 509-2693</a>
      </li>
      <li>
        <a href="mailto: ramseytisher@gmail.com" target="_top">
          Email
        </a>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
