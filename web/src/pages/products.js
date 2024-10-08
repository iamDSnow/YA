import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import ItemThumbnail from '../components/itemThumbnail'
import Layout from "../components/layout"
import Seo from "../components/seo"
import steel from "../steel-config.js"
import { Card, Box } from "@mui/material"
// import CategoriesFilter from '../components/CategoriesFilter'

const ThumbnailsWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
    grid-auto-rows: auto auto 500px;
    padding: 20px;

 
`

export default function Products ({ data }) {
  
    const siteTitle = steel.title
    const items = data.prods.nodes

    return (
      <Layout  title={siteTitle}>
        <Seo title="All items" lang="en"/>
        {/* Filter category UI at top */}
        {/* <CategoriesFilter /> */}
        <ThumbnailsWrapper>
          {items.map(( item ) => {
            const { 
              title, 
              id, 
              slug: { current }, 
              blurb,
              variants, 
            } = item
            return (
              
              <Card>
                <Box sx={{padding: '1rem'}}>
              <ItemThumbnail
                node={item}
                key={id}
                link={'/products/' + current}
                heading={title}
                image={variants[0].images[0].asset.id}
                price={variants[0].price}
                // description={blurb.en}
                
              />
              </Box>
              </Card>
            )
          })}
        </ThumbnailsWrapper>
      </Layout>
    )
  
}

export const pageQuery = graphql`
  query ProdQuery($category: [String]){
    allSite {
      nodes {
        siteMetadata {
          title
        }
      }
    }
    prods: allSanityProduct(
      filter:{ categories: { elemMatch: { title: { in: $category }}}}
    ) {
      nodes {
        blurb {
          en
        }
        title
        slug {
          current
        }
        id
        variants {
          price
          images {
            asset {
              id
            }
          }
        }
      }
  }
  }
`
