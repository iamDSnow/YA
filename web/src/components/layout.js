import Footer from './footer'
import { GlobalStyle } from '../styles/globalStyle'
import Header from './header'
import React from 'react'
import styled from 'styled-components'
import Navbar from './navbar'

const PageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`

const MainSection = styled.main`
  /* margin: 30px 0; */
  width: 100%;
`

const Layout = (props) => {
  const { children } = props

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        {/* <Header/> */}
        <Navbar />
        <MainSection>{children}</MainSection>
        <Footer />
      </PageWrapper>
    </>
    )
}

export default Layout