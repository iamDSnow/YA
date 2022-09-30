import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";


const Container = styled.div`
  @media only screen and (min-width: 900px) {
padding-left: 200px;
padding-right: auto;
 
   
   }
`

const Wrapper = styled.div`
padding: 0rem calc((10vw - 900px) / 2);
padding-right: 120px;
display: grid;
grid-template-columns: 350px  350px  350px;

@media only screen and (min-width: 600px) {
   
  grid-template-columns: 690px;

  
  }
  @media only screen and (min-width: 900px) {
   
   grid-template-columns: 755px;
  
 
   
   }
`;


const Info = styled.div`
text-transform: uppercase;
font-weight: 900;
  padding-top: 20px;
  line-height: .40;
 padding-bottom: 10px;
 
  

`

const TitleLineTwo = styled.div`
-webkit-text-stroke:1px black;
-webkit-text-fill-color: white;
padding-bottom: 25px;
font-size: 60px;


`
const TitleLineOne = styled.div`
color: #000;
font-size: 60px;
@media only screen and (min-width: 600px) {
   
   padding-bottom: 25px;
 
   }

`

const HighlightCon = styled.div`


@media only screen and (min-width: 600px) {
   
  display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-template-areas:
     "main main side side"
     "main main side side"
     "main main sube sube"
     "main main sube sube";
 
 }
 @media only screen and (min-width: 900px) {
  display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-template-areas:
     "main main side side"
     "main main side side"
     "main main sube sube"
     "main main sube sube";
 }


`

const Links = styled(Link)`
text-decoration: none;
`

const Card = styled.div`
border: 1px solid #A9A9A9;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;

transition: 0.4s cubic-bezier(0.85, 0.82, 0.165, 1);
&:hover{
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

`
// Wrapper for the image
const ProductWrapperOne = styled.div`
  grid-area: side;
  padding-bottom: 15px;

  @media only screen and (min-width: 600px) {
   
    padding-bottom: 0px;
 
   
   }

`;
const ProductWrapperTwo = styled.div`
  grid-area: sube;

  @media only screen and (min-width: 600px) {
   
   padding-bottom: 0px;


  
  }
`;
const ProductWrapperFour = styled.div`
  grid-area: main;
  padding-bottom: 15px;

  @media only screen and (min-width: 600px) {
   
   padding-bottom: 0px;

  
  }

 
 @media only screen and (min-width: 900px) {

}
 
`;

const ImgCon = styled.div`

@media only screen and (min-width: 600px) {
   
padding-left: 60px;   
   }

   @media only screen and (min-width: 600px) {
   
   padding-left: 28px;   
      }

`
const ProductPicOne = styled(GatsbyImage)`
/* height: auto; */
object-fit: fill;
`
const ProductPicTwo = styled(GatsbyImage)`
object-fit: fill;

@media only screen and (min-width: 600px) {
   
  width: 64%;
  
  }
  @media only screen and (min-width: 900px) {
   
   width: 83.5%;


   
   }

`
const ProductPicFour = styled(GatsbyImage)`
height: auto;
object-fit: fill;
`
const Content = styled.div`
position: relative;

display: flex;
flex-flow: column nowrap;
text-align: center;
@media only screen and (min-width: 600px) {
 
 
     }
     @media only screen and (min-width: 900px) {
}
`


const ProductName = styled.h4`

@media only screen and (min-width: 900px) {
  font-size: 24px;
}
`;
const ProductPrice = styled.p`

@media only screen and (min-width: 900px) {

}
`;


const ProductFeature = () => {
    

  const shopData = useStaticQuery(graphql`
 {
      sanityProductCardArray {
        staticPic {
          altText
          image {
            asset {
              gatsbyImageData
            }
          }
        }
        productFeatureTwoTitle
        productFeatureTwoSlug {
          current
        }
        productFeatureTwoPrice
        productFeatureTwoImage {
          altText
          image {
            asset {
              gatsbyImageData
            }
          }
        }
        productFeatureOneTitle
        productFeatureOneSlug {
          current
        }
        productFeatureOnePrice
        productFeatureOneImage {
          altText
          image {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)
 

// const imageData = getGatsbyImageData(shopData.sanityProductCardArray.staticPic.image.asset.id, {maxWidth: 25}, steel.sanity)
// const productOne = getGatsbyImageData( shopData.sanityProductCardArray.productFeatureCard.map(card=>{
//     return(
// card.product.variants.map((payload) =>{
//     return(
    
//         payload.images.map(pic=>{
//             return(
//                 pic.asset.id

//             )
//         })
   
// )}))}), {maxWidth: 400}, steel.sanity)

// const productTwo = getGatsbyImageData( shopData.sanityProductCardArray.productFeatureCard.map(card=>{
//     return(
// card.product.variants.map((payload) =>{
//     return(
    
//         payload.images.map(pic=>{
//             return(
//                 pic.asset.id

//             )
//         })
   
// )}))}), {maxWidth: 400}, steel.sanity)

  return (
    <Container>
       <Info>
        <TitleLineOne>
                Yater
        </TitleLineOne>
        <TitleLineTwo>
        &nbsp; &nbsp;Essentials
        </TitleLineTwo>
        </Info>
    <Wrapper>
      <HighlightCon>
      <ProductWrapperFour>
          <Card>
      
        <ProductPicFour
        image={shopData.sanityProductCardArray.staticPic.image.asset.gatsbyImageData}
        alt={shopData.sanityProductCardArray.staticPic.altText}

        />
             </Card>
       </ProductWrapperFour>
          <ProductWrapperOne>
          <Card>
     
  <Links to={`/product/`+ shopData.sanityProductCardArray.productFeatureOneSlug.current}>
        <ProductPicOne
        image={shopData.sanityProductCardArray.productFeatureOneImage.image.asset.gatsbyImageData}
        alt={shopData.sanityProductCardArray.productFeatureOneImage.altText}

        />
          <Content>
<ProductName>{shopData.sanityProductCardArray.productFeatureOneTitle}</ProductName>
<ProductPrice>{'$'+shopData.sanityProductCardArray.productFeatureOnePrice}</ProductPrice>
   
</Content>
        </Links>
       
             </Card>
          
       </ProductWrapperOne>
      
       
       <ProductWrapperTwo>
       <Card>
     
        <Links to={`/product/`+ shopData.sanityProductCardArray.productFeatureTwoSlug.current}>
      <ImgCon>
        <ProductPicTwo
          image={shopData.sanityProductCardArray.productFeatureTwoImage.image.asset.gatsbyImageData}
          alt={shopData.sanityProductCardArray.productFeatureTwoImage.altText}
        />
        </ImgCon>
             <Content>
            <ProductName>{shopData.sanityProductCardArray.productFeatureTwoTitle}</ProductName>
<ProductPrice>{'$'+shopData.sanityProductCardArray.productFeatureTwoPrice}</ProductPrice>
   
</Content>
        </Links>
            
             </Card>
      
       
       </ProductWrapperTwo>
    
   </HighlightCon>
         </Wrapper>
         </Container>
  )
}

export default ProductFeature

