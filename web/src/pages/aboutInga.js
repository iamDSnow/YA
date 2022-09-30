import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
const Container = styled.div``

const ImgCon = styled.div`
padding-top: 60px;
@media only screen and (min-width: 900px) {
  padding-top: 80px;
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
   `
const Content = styled.p`
font-size: 16px;
@media only screen and (min-width: 600px) {
  font-size: 28px;
   }
   @media only screen and (min-width: 900px) {
    font-size: 22px;
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
    </Content>
    </Container>
    </Layout>
  )
}

export default AboutInga