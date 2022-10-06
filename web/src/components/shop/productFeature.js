import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Container, Box } from "@mui/system";
import { Grid, Paper } from "@mui/material";

const Con = styled.div`

padding: 2rem;
`


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

@media only screen and (min-width: 2560px) {
   
  font-size: 80px;
  
 
   
   }
`
const TitleLineOne = styled.div`
color: #000;
font-size: 60px;
padding-bottom: 20px;

@media only screen and (min-width: 600px) {
   
 
   }
   @media only screen and (min-width: 2560px) {
   
   font-size: 80px;
   
  
    
    }

`


const Links = styled(Link)`
text-decoration: none;
`

const ImgCon = styled.div`
justify-items: center;
justify-content: center;
align-items: center;
align-content: center;
justify-self: center;
padding-top: 25px;

@media only screen and (min-width: 900px) {
 
padding-top: 25px;

}
      
`
const ImgCon2 = styled.div`
padding-left: 60px;
padding-top: 56px;

@media only screen and (min-width: 600px) {
 
  padding-left: 65px;

    }
    @media only screen and (min-width: 900px) {
 
      padding-left: 80px;

   }
      
`

const ImgCon3 = styled.div`
object-fit: cover;


   
      
`
const ProductPicOne = styled(GatsbyImage)`
/* height: auto; */
object-fit: fill;
width: 74%;

`
const ProductPicTwo = styled(GatsbyImage)`
object-fit: fill;
width: 58%;




`
const ProductPicFour = styled(GatsbyImage)`
height: auto;
object-fit: cover;

width: 100%;


@media only screen and (min-width: 1800px) {
 
 height: 82vh;

} 
@media only screen and (min-width: 2560px) {
 
 height: 76vh;

} 
`
const Content = styled.div`
position: relative;

display: flex;
flex-flow: column nowrap;
text-align: center;
@media only screen and (min-width: 600px) {
 
  padding-bottom: 8.5px;
 
     }
     @media only screen and (min-width: 900px) {
      padding-bottom: 0px;

}


`


const ProductName = styled.h4`
@media only screen and (min-width: 600px) {
  font-size: 16px;
}

@media only screen and (min-width: 900px) {
  font-size: 18px;
}
@media only screen and (min-width: 2560px) {
  font-size: 34px;


  
  }
`;
const ProductPrice = styled.p`
@media only screen and (min-width: 600px) {
  font-size: 24px;

}


@media only screen and (min-width: 900px) {

}
@media only screen and (min-width: 2560px) {
  font-size: 24px;


  
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
 

  return (
    // <Container container >
      <Con>
        <Info>
        <TitleLineOne>
                Yater
        </TitleLineOne>
        <TitleLineTwo>
        &nbsp; &nbsp;Essentials
        </TitleLineTwo>
        </Info>
        <Box
         sx={{
      padding:' 2rem'
        }}
        >
            <Grid container spacing={2} justify="center">
      <Grid item xs={12} sm={8}>
      <Paper>
      <ImgCon3>
      <ProductPicFour
      image={shopData.sanityProductCardArray.staticPic.image.asset.gatsbyImageData}
      alt={shopData.sanityProductCardArray.staticPic.altText}

      />
      </ImgCon3>
           </Paper>
                 </Grid>
      <Grid item container direction="column" xs={12} sm={4} spacing={2}>
        <Grid item>
        <Paper  >
     
     <Links to={`/products/`+ shopData.sanityProductCardArray.productFeatureOneSlug.current}>
     <Content>
     <ImgCon>

           <ProductPicOne
           image={shopData.sanityProductCardArray.productFeatureOneImage.image.asset.gatsbyImageData}
           alt={shopData.sanityProductCardArray.productFeatureOneImage.altText}
   
           />
                </ImgCon>

   <ProductName>{shopData.sanityProductCardArray.productFeatureOneTitle}</ProductName>
   <ProductPrice>{'$'+shopData.sanityProductCardArray.productFeatureOnePrice}</ProductPrice>
      
   </Content>
           </Links>
          
             
          </Paper>
          </Grid>
        <Grid item>
        <Paper  >
     
     <Links to={`/products/`+ shopData.sanityProductCardArray.productFeatureTwoSlug.current}>
   <ImgCon2>
     <ProductPicTwo
       image={shopData.sanityProductCardArray.productFeatureTwoImage.image.asset.gatsbyImageData}
       alt={shopData.sanityProductCardArray.productFeatureTwoImage.altText}
     />
     </ImgCon2>
          <Content>
         <ProductName>{shopData.sanityProductCardArray.productFeatureTwoTitle}</ProductName>
<ProductPrice>{'$'+shopData.sanityProductCardArray.productFeatureTwoPrice}</ProductPrice>

</Content>
     </Links>
         
          </Paper>
                  </Grid>
      </Grid>
    </Grid>
    </Box>
       
         </Con>
        //  </Container>
  )
}

export default ProductFeature

