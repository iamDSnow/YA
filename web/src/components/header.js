import React, { useContext } from 'react'
import { SnipcartContext } from "gatsby-plugin-snipcart-advanced/context";
import styled from 'styled-components'
import { Link } from 'gatsby'
import steel from '../steel-config'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import { getGatsbyImageData } from 'gatsby-source-sanity'
import { useState } from 'react'
import MobileNav from './MobileNav'


const HeaderWrapper = styled.div``

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
  @media only screen and (min-width: 900px) {
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
  width: auto;
  border-bottom: 1px solid gold;

`

const LinkStyled = styled(Link)`

    box-shadow: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
    padding-right: 20px;
    
  
`
const ImgCon = styled(GatsbyImage)`
width: 40%;
  height: auto;

  

`
const CartSummary = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    font-weight: bold;
    @media screen and (min-width: 600px){
      align-items: flex-end;
    }
`
const CartCon = styled.span`
width: 40%;
  height: auto;
  `

const CartText = styled.p`

font-size: 14px;


`

const Links = styled(Link)`
  padding-top: 20px;
  text-decoration: none;
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