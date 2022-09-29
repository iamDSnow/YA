import React from 'react'
import { getGatsbyImageData } from 'gatsby-source-sanity'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import steel from '../../steel-config'
const HeroWrapper = styled.div`
object-fit: cover;`

const ImgCon = styled(GatsbyImage)`

`

const Hero = () => {
    const query = useStaticQuery(graphql`
    {
      sanityHome {
        hero {
          heroPic {
            image {
              asset {
                id
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
  const imageData = getGatsbyImageData(query.sanityHome.hero.heroPic.image.asset.id, {maxWidth: 800}, steel.sanity)
  
  
  return (

    <HeroWrapper>
    <ImgCon 
    image={imageData}
    alt={query.sanityHome.hero.heroPic.altText}
    />
    </HeroWrapper>
  )
}

export default Hero 