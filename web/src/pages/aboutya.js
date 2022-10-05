import React from 'react';
import Layout from '../components/layout';
import { useStaticQuery, graphql } from "gatsby";
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import YaterVid from '../media/video/YaterVId.mp4';
import { Link } from 'gatsby';
import { ImageList,ImageListItem, ListItemText, ListSubheader,Typography, Grid } from '@mui/material';
import { Box, Container } from '@mui/system';

const AboutCon = styled.div`

`

  const AboutVid = styled.video`
  width: 100%    !important;
  height: auto   !important;


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
}
@media only screen and (min-width: 2560px) {

    
font-size: 40px;


}`
const AboutTitle = styled.h1`
font-size: 30px;
text-align: center;
@media only screen and (min-width: 600px) {

    
font-size: 40px;


}
@media only screen and (min-width: 900px) {

    
  font-size: 35px;


}
@media only screen and (min-width: 2560px) {

    
font-size: 60px;


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
@media only screen and (min-width: 2560px) {

    
font-size: 30px;


}
`

const AboutHead = styled.div`
padding: 1rem;
padding-bottom: 40px;
`


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
  @media only screen and (min-width: 2560px) {

    
font-size: 60px;


}
`

const ImgCon = styled.div`
padding-left: 850px;`

const IngredientPic = styled(GatsbyImage)`
height: auto;
/* width: 600px; */
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
@media only screen and (min-width: 2560px) {

    
font-size: 34px;


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
      <Container>
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


<ImageList 

sx={{
              
  '@media only screen and (min-width: 390px)': {


    display: 'flex',
    flexFlow: 'column wrap',
     justifyContent: 'center',
      
    
    },     
    
    '@media only screen and (min-width: 600px)': {


      display: 'grid',
     
        
      
      }  
 

}}
>
 
{data.sanityAboutya.cardArray.map((cards, i)=>{
  return(
       <ImageListItem  key={i}  >
 <IngredientPic
    image={cards.ingredientPic.image.asset.gatsbyImageData}
    alt={cards.ingredientPic.altText}
    loading={'lazy'}
    />
   
      <Box
       sx={{
              
        position: 'absolute',
        display: 'flex',
        flexFlow: 'column wrap',
         justifyContent: 'center',

        bottom: 0,
        left: 0,
        width: '100%',
        bgcolor: 'rgba(0, 0, 0, 0.54)',
        color: 'white',
        padding: '10px',
        height:'100%',
        textAlign: 'center',

       
      
      }}>
           
      <div> 
      
           
           
            <IngredientTitle>         
             {cards.ingredientTitle}
          </IngredientTitle>
             
        </div> 
  
    {cards.ingredientText.map(payload =>{
      return(
      
      <div> 
        {payload.children.map(info =>{
          return(
           
           
            <ListItemText
           
          >         
             {info.text}
          </ListItemText>
             
               )
    })}</div> 
    )
  })}
  </Box>
     
   </ImageListItem>
 )})}
</ImageList>





</AboutHead>

  


      </AboutCon>
      </Container>
    </Layout>
  )
}

export default Aboutya