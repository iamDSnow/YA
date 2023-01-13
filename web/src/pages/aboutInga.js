import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Box } from '@mui/system'
const Container = styled.div`
  @media only screen and (min-width: 2560px) {

   
}`

const ImgCon = styled.div`

 top: 0;

 
   `

const Vimeo = styled.iframe`

padding-top: 10px;
border: none;
display: block;
margin-left: auto;
margin-right: auto;


@media only screen and (min-width: 600px) {
  font-size: 32px;
  width: 640px;
  height: 340px;

   }
`
const IngaImg = styled(GatsbyImage)`
object-fit: contain;
`
const Head = styled.h1`
font-size: 20px;
@media only screen and (min-width: 600px) {
  font-size: 32px;
   }
   @media only screen and (min-width: 900px) {
  padding-top: 20px;
   }
   @media only screen and (min-width: 2560px) {
    font-size: 62px;
   }
   `
const Content = styled.p`
font-size: 16px;
@media only screen and (min-width: 600px) {
  font-size: 28px;
   }
   @media only screen and (min-width: 900px) {
    font-size: 22px;
   }
   @media only screen and (min-width: 2560px) {
    font-size: 42px;
   }
`
const Paragraph = styled.div`
padding-top: 10px;
padding-bottom: 10px;
`

const AboutInga = () => {
  const data = useStaticQuery(graphql`
     {
      sanityAboutInga {
        title
        pic {
          altText
          image {
            asset {
              gatsbyImageData
            }
          }
        }
        text {
          children {
            text
          }
        }
        text2 {
          children {
            text
          }
        }
        text3 {
          children {
            text
          }
        }
        text4 {
          children {
            text
          }
        }
      }
    }
  `)

  return (
    <Layout>
    <Container>
      <Box sx={{padding: '2rem'}}>
      <ImgCon>
      <IngaImg
      image={data.sanityAboutInga.pic.image.asset.gatsbyImageData}
      alt={data.sanityAboutInga.pic.altText} />
      </ImgCon>
      <Head>{data.sanityAboutInga.title}</Head>
      <Content>
    <Paragraph>{data.sanityAboutInga.text.map(payload=>{
      return(
        payload.children.map(kid =>{
          return(
            kid.text
          )
        })
      )
    })}</Paragraph>
   
      <Paragraph>{data.sanityAboutInga.text.map(payload=>{
      return(
        payload.children.map(kid =>{
          return(
            kid.text
          )
        })
      )
    })}</Paragraph>
      <Paragraph>{data.sanityAboutInga.text2.map(payload=>{
      return(
        payload.children.map(kid =>{
          return(
            kid.text
          )
        })
      )
    })}</Paragraph>
      <Paragraph>{data.sanityAboutInga.text3.map(payload=>{
      return(
        payload.children.map(kid =>{
          return(
            kid.text
          )
        })
      )
    })}</Paragraph>
      <Paragraph>{data.sanityAboutInga.text4.map(payload=>{
      return(
        payload.children.map(kid =>{
          return(
            kid.text
          )
        })
      )
    })}</Paragraph>
    <ImgCon>
     <Vimeo src="https://player.vimeo.com/video/784399665?h=1074b15a79"  frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></Vimeo>
     </ImgCon>
    </Content>
   
    </Box>
    </Container>
    </Layout>
  )
}

export default AboutInga