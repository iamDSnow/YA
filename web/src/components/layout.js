import Footer from './footer'
import { GlobalStyle } from '../styles/globalStyle'
import Header from './header'
import React from 'react'
import styled from 'styled-components'
import Navbar from './navbar'
import { Helmet } from 'react-helmet'

const PageWrapper = styled.div`
  
`

const MainSection = styled.main`
  /* margin: 30px 0; */
  width: 100%;
`

const Layout = (props) => {
  const { children } = props

  return (
    <>
    <Helmet title="Yater Actives" defer={false} />
      <GlobalStyle />
        {/* <Header/> */}
        <Navbar />
        <MainSection>{children}</MainSection>
        <Footer />
    </>
    )
}

export default Layout