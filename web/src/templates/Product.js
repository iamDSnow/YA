import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import { graphql } from "gatsby";
import styled from "styled-components";
import Helmet from "react-helmet";
import { createString, isDigital } from "../utils/utils";
import Layout from "../components/layout";
import { siteMetadata } from "../../gatsby-config";
import steel from "../steel-config";
import { Container, Box } from "@mui/system";
import { Typography, Tabs, Tab, Card } from "@mui/material";
import PropTypes from "prop-types";

const Col = styled.div`
  @media only screen and (min-width: 600px) {
    padding-top: 40px;
  }
`;
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  align-items: center;
  width: max-content;
  margin: 0 auto;
  padding: 2rem;
  font-family: var(--bodyFont);
  & > div {
    margin: 1rem;
    width: 400px;
    max-width: 80vw;
    margin: 1rem;
  }
  & > div > label {
    margin-left: 0.5rem;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
const ImgCon = styled.div``;
const Heading = styled.h1`
  font-weight: 900;
  font-size: 1.5em;
  margin: 20px 0;
  font-family: var(--subheadingFont);
  font-size: var(--subheadingSize);
  color: var(--subheadingColor);
`;
const ImgStyled = styled(GatsbyImage)`
  width: 350px;
  height: 350px;
  max-width: 80vw;
  object-fit: contain;
`;
const Price = styled.p`
  margin-bottom: 10px;
  padding: 10px;
  font-weight: 700;
  font-family: var(--bodyFont);
  color: var(--bodyColor);
  font-size: 2rem;
`;
const Description = styled.p`
  padding: 7px;
  font-family: var(--bodyFont);
  font-size: var(--bodySize);
  color: var(--bodyColor);
  &:last-of-type {
    margin-bottom: 25px;
  }
`;
const Dropdown = styled.select`
  position: relative;
  display: block;
  padding: 10px;
  margin: 10px 0;
  font-weight: 700;
  font-family: var(--bodyFont);
  background: var(--bg);
  border: var(--border);
  border-radius: var(--borderRadius);
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
  color: var(--fontColor);
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
  &:hover > option {
    color: var(--fontColor);
  }
`;
const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > * {
    width: 150px;
    margin: 0.5rem;
  }
`;
const DropdownOption = styled.option`
  padding: 20px;
  background: var(--bg);
  color: var(--bodyColor);
  font-family: var(--bodyFont);
  font-size: var(--bodySize);
  font-weight: 700;
  border: none;
  outline: none;
`;
const BuyButton = styled.button`
  &:hover {
    transform: rotate(2deg);
    background: #dcc9a4;
  }
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Product = ({ data: { item } }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const variants = item.variants;
  const options = variants.map((e) => e.title);
  const trueID = item.id.substring(1);
  const [selected, setSelected] = useState(variants[0]);

  const imageData = getGatsbyImageData(
    variants[0].images[0].asset.id,
    { maxWidth: 500 },
    steel.sanity
  );
  const realPrice = variants[0];

  const digitalVersion = variants.findIndex(isDigital);
  return (
    <>
      <Helmet
        title={steel.title}
        htmlAttributes={{
          lang: "en",
        }}
      />
      <Layout>
        <Container>
          <ProductGrid>
            <Col>
              <ImgCon>
                <ImgStyled image={imageData} alt={item.title} key={trueID} />
              </ImgCon>
            </Col>
            <Col>
              <Heading className="name">{item.title}</Heading>

              <Price className="price">{selected.price}</Price>
              <InputWrap>
                {item.variants.length > 1 && (
                  <Dropdown
                    aria-label={item.variant_type}
                    id={item.title}
                    onChange={(e) =>
                      setSelected(variants[options.indexOf(e.target.value)])
                    }
                    value={selected.title}
                  >
                    {item.variants.map((option) => (
                      <DropdownOption key={option._key}>
                        {option.title}
                      </DropdownOption>
                    ))}
                  </Dropdown>
                )}

                <BuyButton
                  className="snipcart-add-item"
                  data-item-id={item.slug.current}
                  data-item-price={item.price}
                  data-item-name={item.slug.current}
                  data-item-description={item.blurb.en}
                  data-item-image={variants[0].images[0].asset.url}
                  data-item-url={`https://www.yateractives.com/.netlify/functions/snipCartProcess`}
                  data-item-custom1-name={
                    variants.length > 1 ? item.variant_type : ""
                  }
                  data-item-custom1-options={
                    variants.length > 1 ? createString(variants, selected) : ""
                  }
                  data-item-custom1-value={selected.title}
                  data-item-file-guid={
                    digitalVersion !== -1 ? variants[digitalVersion].guid : ""
                  }
                  data-item-weight={
                    digitalVersion === -1
                      ? variants[item.variants.indexOf(selected)].grams
                      : 0
                  }
                >
                  Add to cart
                </BuyButton>
              </InputWrap>
            </Col>
          </ProductGrid>
          <Container>
            <Box sx={{ width: "100%" }}>
              <Box
              //  sx={{ borderBottom: 1, borderColor: 'divider' }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Description" {...a11yProps(0)} />
                  <Tab label="Ingredients" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                {item.body.en.map(({ children }) => (
                  <Description key={children._key}>
                    {children[0].text}
                  </Description>
                ))}
              </TabPanel>
              <TabPanel value={value} index={1}>
                {item.ingredients.en.map(({ children }) => (
                  <Description key={children._key}>
                    {children[0].text}
                  </Description>
                ))}
              </TabPanel>
            </Box>
          </Container>
        </Container>
      </Layout>
    </>
  );
};

export default Product;

export const pageQuery = graphql`
  query ItemBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    item: sanityProduct(slug: { current: { eq: $slug } }) {
      id
      title
      slug {
        current
      }
      blurb {
        en
      }
      ingredients {
        en {
          _key
          children {
            _key
            text
          }
        }
      }
      body {
        en {
          _key
          children {
            _key
            text
          }
        }
      }
      variants {
        _key
        title
        grams
        price
        sku
        taxable
        digital
        guid
        images {
          asset {
            url
            assetId
            id
            description
          }
        }
      }
      variant_type
    }
  }
`;
