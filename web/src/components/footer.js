import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import SocialLinks from "./SocialLinks";
import { Link } from "gatsby";
import { getGatsbyImageData } from "gatsby-source-sanity";
import steel from "../steel-config";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container } from "@mui/system";

const FooterStyled = styled.footer`
  background: #181818;
  bottom: 0px;
  position: static;
  padding: 10px 0px;
`;
const LinkTitle = styled.h3`
  color: #fff;
  @media only screen and (min-width: 2560px) {
    font-size: 42px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const LinkCon = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding-left: 15px;
  padding-bottom: 10px;
  width: 70%;

  @media only screen and (min-width: 600px) {
    width: 40%;
    padding-left: 100px;
    font-size: 28px;
  }
  @media only screen and (min-width: 600px) {
    width: 20%;
  }
`;
const SocialCon = styled.div`
  border-bottom: 1px solid #dcc9a4; ;
`;

const ImgCon = styled.div`
  width: 40%;
`;
const Logo = styled(GatsbyImage)`
  width: 60%;
  height: auto;
  object-fit: contain;
  margin-left: 50px;
  @media only screen and (min-width: 600px) {
    width: 40%;

    margin-left: 220px;
  }
  @media only screen and (min-width: 900px) {
    width: 40%;

    margin-left: 220px;
  }
  @media only screen and (min-width: 1200px) {
    width: 40%;

    margin-left: 300px;
  }
  @media only screen and (min-width: 1440px) {
    width: 40%;

    margin-left: 380px;
  }
  @media only screen and (min-width: 1800px) {
    width: 32%;
    margin-left: 450px;
  }
  @media only screen and (min-width: 2000px) {
    width: 30%;

    margin-left: 580px;
  }
  @media only screen and (min-width: 2560px) {
    width: 25%;

    margin-left: 820px;
  }
`;
const PageLink = styled(Link)`
  font-size: 18px;
  padding-bottom: 10px;
  text-decoration: none;
  line-height: 1.5em;
  color: #fff;

  @media only screen and (min-width: 600px) {
    font-size: 22px;
  }
  @media only screen and (min-width: 2560px) {
    font-size: 42px;
  }
`;

const End = styled.div`
  text-align: center;
  font-size: 16px;
  color: #fff;
  @media only screen and (min-width: 2560px) {
    font-size: 26px;
  }
`;

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
  `);

  const imageData = getGatsbyImageData(
    data.sanityHeader.logo.image.asset.id,
    { maxWidth: 25 },
    steel.sanity
  );

  return (
    <FooterStyled>
      <SocialCon>
        <SocialLinks />
      </SocialCon>
      <Content>
        <LinkCon>
          <LinkTitle>Services</LinkTitle>
          {data.sanityHeader.links.map((link, i) => {
            return (
              <PageLink to={link.link} key={i}>
                {link.linkText}
              </PageLink>
            );
          })}
        </LinkCon>
        <ImgCon>
          <Logo image={imageData} alt={data.sanityHeader.logo.altText} />
        </ImgCon>
      </Content>
      <End>
        <strong>© 2022 | Yater Actives LLC | All Rights Reserved</strong>
      </End>
    </FooterStyled>
  );
};

export default Footer;
