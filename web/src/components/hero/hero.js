import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
const HeroWrapper = styled.div`
object-fit: cover;


`

const ImgCon = styled(GatsbyImage)`
width: 100%;

`

const Hero = () => {
    const query = useStaticQuery(graphql`
    {
      sanityHome {
        hero {
          heroPic {
            image {
              asset {
                gatsbyImageData
              }
            }
            altText
          }
        }
        textTwo {
          children {
            text
          }
        }
        textOne {
          children {
            text
          }
        }
      }
    }
  `)
  
  
  return (

    <HeroWrapper>
    <ImgCon 
    image={query.sanityHome.hero.heroPic.image.asset.gatsbyImageData}
    alt={query.sanityHome.hero.heroPic.altText}
    />
    </HeroWrapper>
  )
}

export default Hero 