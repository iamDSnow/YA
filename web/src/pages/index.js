import React from "react"
import Layout from "../components/layout"
import Article from "../components/articles/article"
import Hero from "../components/hero/hero"
import ProductFeature from "../components/shop/productFeature"
import DualPicText from "../components/dualPicText"




export default function IndexPage({ data }) {


    return (
      <Layout >
        <Hero />
            <Article />
            <ProductFeature />
            <DualPicText />
      </Layout>
    )
  
}

