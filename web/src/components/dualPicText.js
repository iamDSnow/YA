import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Link } from "gatsby";
import { Container } from "@mui/system";

const Con = styled.div`
  padding-top: 20px;
`;
const Box = styled.div`
  display: grid;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 5px;
  overflow: hidden;
  @media only screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-columns: 50px, 50px, 50px;
  }
`;
const Img = styled(GatsbyImage)`
  @media only screen and (min-width: 2560px) {
    width: 100%;
    height: 1200px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  padding-top: 20px;
  padding: 1rem;

  @media only screen and (min-width: 600px) {
    margin-top: auto;
    margin-bottom: auto;
  }
`;
const Info = styled.div`
  text-align: center;
  @media only screen and (min-width: 900px) {
    font-size: 30px;
  }
  @media only screen and (min-width: 2650px) {
    font-size: 60px;
  }
`;
const BtnCon = styled.div`
  padding-top: 20px;
`;

const Btn = styled.button`
  &:hover {
    transform: rotate(2deg);
    background: #dcc9a4;
  }
`;

const DualPicText = () => {
  const data = useStaticQuery(graphql`
    {
      sanityDualpicText {
        leftPic {
          altText
          image {
            asset {
              gatsbyImageData
            }
          }
        }
        rightPic {
          image {
            asset {
              gatsbyImageData
            }
          }
          altText
        }
        Text {
          children {
            text
          }
        }
      }
    }
  `);
  return (
    <>
      <Container sx={{ paddingBottom: "50px" }}>
        <Box>
          <Img
            image={data.sanityDualpicText.leftPic.image.asset.gatsbyImageData}
            alt={data.sanityDualpicText.leftPic.altText}
          />
          <Content>
            {data.sanityDualpicText.Text.map((tOne) => {
              return tOne.children.map((txt) => {
                return <Info> {txt.text}</Info>;
              });
            })}
            <BtnCon>
              <Link to={"/products"}>
                <Btn>About YA</Btn>
              </Link>
            </BtnCon>
          </Content>
          <Img
            image={data.sanityDualpicText.rightPic.image.asset.gatsbyImageData}
            alt={data.sanityDualpicText.rightPic.altText}
          />
        </Box>
      </Container>
    </>
  );
};

export default DualPicText;
