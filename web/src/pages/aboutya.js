import React from 'react';
import Layout from '../components/layout';
import { useStaticQuery, graphql } from "gatsby";
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import YaterVid from '../media/video/YaterVId.mp4';
import { Link } from 'gatsby';

const AboutCon = styled.div`

`

  const AboutVid = styled.video`
  width: 100%    !important;
  height: auto   !important;
  padding-top: 60px;

  @media only screen and (min-width: 600px) {

    
    padding-top: 80px;


}

  `

const BtnCon = styled.div`
display: flex;
justify-content: center;
padding-top: 30px;
padding-bottom:30px;

`
const AboutIngaBtn = styled.button`
:hover{
  background: gold;
}`
const AboutTitle = styled.h1`
font-size: 30px;
@media only screen and (min-width: 600px) {

    
font-size: 40px;


}
@media only screen and (min-width: 900px) {

    
  font-size: 35px;


}
`

const AboutSubText = styled.p`
padding-top: 20px;
@media only screen and (min-width: 600px) {

    
font-size: 30px;


}
@media only screen and (min-width: 900px) {

    
font-size: 24px;
padding: 1rem;


}
`

const AboutHead = styled.div`
padding: 1rem;
padding-bottom: 40px;`

const Card = styled.div`
padding-bottom: 20px;
padding-top:20px;
`

const IngredientTitle = styled.div`
font-size: 30px;
padding-bottom: 30px;
@media only screen and (min-width: 600px) {

    
  font-size: 40px;


  }
`

const IngredientPic = styled(GatsbyImage)`
@media only screen and (min-width: 900px) {

    
width: 50%;

}
`

const IngredientInfo = styled.p`
padding-top: 40px;
@media only screen and (min-width: 600px) {

    
font-size: 30px;


}
@media only screen and (min-width: 900px) {

    
font-size: 24px;
padding: 1rem;


}

`
const Aboutya = () => {

  const data = useStaticQuery(graphql`
   {
      sanityAboutya {
        cardArray {
          ingredientText {
            children {
              text
            }
          }
          ingredientPic {
            altText
            image {
              asset {
                gatsbyImageData
              }
            }
          }
          ingredientTitle
        }
        aboutTitle
        subTitle {
          children {
            text
          }
        }
      }
    }
  `)
  return (
    <Layout>
 
     <AboutVid loop autoPlay={true} muted  width="560" height="349">
    <source  src={YaterVid} type="video/mp4" />
      </AboutVid>
      <BtnCon>
    <Link to={'/aboutInga'}> <AboutIngaBtn>About Inga</AboutIngaBtn></Link> 
      </BtnCon>
      <AboutCon>
        <AboutHead>
<AboutTitle>{data.sanityAboutya.aboutTitle}</AboutTitle>
{data.sanityAboutya.subTitle.map(ST =>{
  return(
    ST.children.map(payload =>{
      return(
       <AboutSubText> {payload.text}</AboutSubText>
      
      )
    })
  )
})}
</AboutHead>
{data.sanityAboutya.cardArray.map((cards, i)=>{
  return(
    <Card key={i}>
    <IngredientTitle> {cards.ingredientTitle}</IngredientTitle> 
    
    <IngredientPic
    image={cards.ingredientPic.image.asset.gatsbyImageData}
    alt={cards.ingredientPic.altText}
    />
    
    {cards.ingredientText.map(payload =>{
      return(
        <IngredientInfo>{payload.children.map(info =>{
          return(
            info.text
          )
        })}</IngredientInfo>
      )
    })}

{/* {console.log(cards.ingredientText.map(payload =>{
  return(
    {payload.children.map()}
  )
}))} */}
    </Card>
   

  )
})}
      </AboutCon>
    </Layout>
  )
}

export default Aboutya