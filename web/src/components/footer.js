import React from "react";
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"
import SocialLinks from './SocialLinks';
import { Link } from "gatsby";

const FooterStyled = styled.footer`
  width: 100%;
  background: #000;
  color: #fff;
  font-family: var(--bodyFont);
  & > * {
    display: block;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 600px) {
  }
`
const LinkCon = styled.div`
display: flex;
flex-flow: column nowrap;

 
`
const SocialCon = styled.div`
padding-top:10px;`
const PageLink = styled(Link)`
 color: #fff;
 text-decoration: none;
 line-height: 1.5em;
`

const Footer = () => {
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
  return (
    <FooterStyled>
<SocialCon>
      <SocialLinks />
      </SocialCon>
      <LinkCon>
      {data.sanityHeader.links.map((link, i) => {
           return (
             <PageLink to={link.link} key={i}>
               {link.linkText}
             </PageLink>
           )
         })}
      </LinkCon>
<strong>YATER ACTIVE</strong>
    </FooterStyled>
  )
}

export default Footer