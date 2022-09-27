import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import CategoriesFilter from '../components/CategoriesFilter'
import ItemThumbnail from '../components/itemThumbnail'
import Layout from "../components/layout"
import Seo from "../components/seo"
import steel from "../steel-config.js"
import { Link } from "gatsby"

const ThumbnailsWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
    grid-auto-rows: auto auto 500px;
    padding: 20px;
    margin: 1rem auto;
`

export default function IndexPage({ data }) {
  


    return (
      <Layout >
        <Link to="/products">Test</Link>
      </Layout>
    )
  
}

