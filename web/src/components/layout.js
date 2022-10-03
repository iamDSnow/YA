import Footer from './footer'
import { GlobalStyle } from '../styles/globalStyle'
import Reset from '../styles/reset'
import Header from './header'
import React from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`

const MainSection = styled.main`
  margin: 30px 0;
  width: 100%;
`

const Layout = (props) => {
  const { children } = props

  return (
    <>
      <Reset />
      <GlobalStyle />
      <PageWrapper>
        <Header/>
        <MainSection>{children}</MainSection>
        <Footer />
      </PageWrapper>
    </>
    )
}

export default Layout