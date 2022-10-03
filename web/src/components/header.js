import React, { useContext } from 'react'
import { SnipcartContext } from "gatsby-plugin-snipcart-advanced/context";
import styled from 'styled-components'
import { Link } from 'gatsby'
import steel from '../steel-config'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import { getGatsbyImageData } from 'gatsby-source-sanity'
import { useState } from 'react'
import MobileNav from './mobileNav'


const HeaderWrapper = styled.div`
position: fixed;
    top: 0;
    z-index: 999;
background: #fff;
width: 100%;
display: block;
`
const Nav = styled.div`
display: none;

@media only screen and (min-width: 900px) {
    display: flex;
    flex-wrap: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin-left: 100px;
    font-size: 17px ;
    padding-top: 10px;
    padding-right: 20px; 


  }


  @media only screen and (min-width: 1024px) {
padding-right: 100px;  
}

  @media only screen and (min-width: 1200px) {

    margin-left: 120px;
 }

 @media only screen and (min-width: 1440px) {
padding-left: 150px;  
}

@media only screen and (min-width: 2000px) {
padding-left: 400px;  
}

@media only screen and (min-width: 2560px) {
    padding-left: 550px;
    padding-right: 550px;
    gap: 150px;
    margin-left: 170px;
    width: 100%;
    font-size: 28px ;


 
   
   }
`

const MobileLinkWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-items: center;
  text-align: center;
`
const MobileIconWrapper = styled.div`
height: 35px;

  @media only screen and (min-width: 600px) {
    padding-right: 26px;
  }
  @media only screen and (min-width: 900px) {
    display: none;
  }
`

const MobileIcon = styled(GatsbyImage)`
  z-index: 49;
  margin-right: 20px;
  height: 35px;
  width: 35px;
  @media only screen and (min-width: 600px) {
    margin-right: 40px;
  }
  @media only screen and (min-width: 900px ) {
    margin-right: 0px;

  }
  @media only screen and (min-width: 1200px) {
    margin-right: 0px;

  }
`
const HeaderStyled = styled.header`
  position: sticky;
  top: 0px;
  display: flex;
  flex-flow: row nowrap;
  z-index: 55;
  padding-top: 10px;
  width: 90%;
  border-bottom: 1px solid gold;

  @media only screen and (min-width: 900px) {

align-items: center;

}
  
@media only screen and (min-width: 2000px) {
   
    width: 78%;


 
   
   }
   @media only screen and (min-width: 2000px) {
   
   width: 90%;



  
  }
`

const LinkStyled = styled(Link)`

    box-shadow: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
    padding-right: 20px;
    padding-bottom: 5px;

    @media only screen and (min-width: 600px) {
    padding-left: 70px;
    padding-right: 0px;

  }
  @media only screen and (min-width: 900px) {


padding-right: 0px;
padding-left: 0px;
  }
  
`
const ImgCon = styled(GatsbyImage)`
width: 35%;
  height: auto;

  @media only screen and (min-width: 900px) {
    width: 150px;

    padding-right: 0px;
    object-fit: contain;
    

  }
  @media only screen and (min-width: 1200px) {
    width: 190px;


   
   }
  @media only screen and (min-width: 2560px) {
    width: 200px;

    padding-right: 0px;
    object-fit: contain;
    

  }

`
const CartSummary = styled.div`
    height: 100%;
    display: flex;
    padding: 10px;
    font-weight: bold;
    justify-items: center;
    align-items: center;
    padding-right: auto;
  
`
const CartCon = styled.span`
width: 40%;
  height: auto;

  
 

  @media only screen and (min-width: 600px) {
    padding-left: 150px;
    width: 100%;
    


  }



  @media only screen and (min-width: 900px) {
    padding-left: 270px;
    
  }

  @media only screen and (min-width: 1200px) {
padding-left: 340px;  
}

@media only screen and (min-width: 1440px) {
padding-left: 400px;  
}

@media only screen and (min-width: 2560px) {
    padding-left: 0px;
    padding-right: auto;

 
   
   }


  `

const CartText = styled.p`

font-size: 14px;


`

const Links = styled(Link)`
  padding-top: 20px;
  padding-bottom: 20px;
  text-decoration: none;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 3%);
  width: 94.5%;

  @media only screen and (min-width: 600px) {
    width: 90%;
    


  }
  @media only screen and (min-width: 900px) {
    width: 80px;
    


  }
  @media only screen and (min-width: 1200px) {
    width: 100px;
    


  }
  @media only screen and (min-width: 2560px) {
    width: 160px;
    


  }
  
`

const Header = () => {

  const [active, setActive] = useState(false)


  const data = useStaticQuery(graphql`
      {
      sanityHeader {
        logo {
          altText
          image {
            asset {
              id
            }
          }
        }
        mobileIcon {
          altText
          image {
            asset {
              id
            }
          }
        }
        links {
          linkText
          link
        }
      }
    }
  `)
const imageData = getGatsbyImageData(data.sanityHeader.logo.image.asset.id, {maxWidth: 25}, steel.sanity)
const hamburger = getGatsbyImageData(data.sanityHeader.mobileIcon.image.asset.id, {maxWidth: 25}, steel.sanity)

  const { state } = useContext(SnipcartContext);
  const { cartQuantity } = state;
    return (
      <HeaderWrapper>
      <HeaderStyled>
           <MobileIconWrapper
        onClick={() => setActive(!active)}
        onKeyDown={() => setActive(!active)}
      >
        <MobileIcon
          image={hamburger}
          alt={data.sanityHeader.mobileIcon.alt}
        />
      </MobileIconWrapper>
          <LinkStyled to='/'>
            <ImgCon 
            image={imageData}
            alt={data.sanityHeader.logo.altText}
            />

            <Nav>{data.sanityHeader.links.map((link, i) => {
           return (
             <Links to={link.link} key={i}>
               {link.linkText}
             </Links>
           )
         })}</Nav>

          </LinkStyled>
        <CartSummary className="snipcart-summary">
          <Link to="/" className="snipcart-checkout cart"> 
            <CartCon role="img" aria-label="cart">🛒</CartCon>
          </Link>
          <CartText>{cartQuantity?cartQuantity: ""}</CartText>
        </CartSummary>
      </HeaderStyled>
       <MobileNav active={active}>
       <MobileLinkWrapper>
         {data.sanityHeader.links.map((link, i) => {
           return (
             <Links to={link.link} key={i}>
               {link.linkText}
             </Links>
           )
         })}
       </MobileLinkWrapper>
     </MobileNav>
     </HeaderWrapper>
    );
  
}

export default Header
