import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import { Link } from 'gatsby'

const ArticleWrapper = styled.div`
padding: 1rem;
padding-top: 40px;`
const ArticleH1 = styled.h1`
font-size: 48px;
font-weight: 700;
line-height: 1.2;
padding-bottom: 20px;
`
const ArticleP = styled.p`
font-size: 22px;
padding-bottom: 40px;


`
const BtnCon = styled.div`
padding-bottom: 20px;`
const Button = styled.button`
width: 200px;
height: auto;`

const Article = () => {

    const data = useStaticQuery(graphql`
    {
      sanityHome {
        textOne {
          children {
            text
          }
        }
        textTwo {
          children {
            text
          }
        }
      }
    }
  `)

  return (
    <ArticleWrapper>
    {data.sanityHome.textOne.map((tOne)=>{
        return(
            tOne.children.map((txt)=>{
                return(
                    <ArticleH1> {txt.text}</ArticleH1>
                )
            })
        )
    })}
    {data.sanityHome.textTwo.map((tTwo)=>{
        return(
            tTwo.children.map((txt)=>{
                return(
                    <ArticleP> {txt.text}</ArticleP>
                )
            })
        )
    })}
    <BtnCon>
        <Link to='/products'><Button >Products</Button></Link>
    </BtnCon>
    </ArticleWrapper>
  )
}

export default Article