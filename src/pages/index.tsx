import React from 'react'
import { Global, css } from '@emotion/react'

import { Header, Footer, Sections } from '../components'

const global = css`
  @font-face {
    font-family: 'DDIN';
    font-style: normal;
    font-weight: 400;
    src: url(./fonts/D-DIN.woff) format('woff');
  }

  @font-face {
    font-family: 'DDIN';
    font-style: normal;
    font-weight: bold;
    src: url(./fonts/D-DIN-Bold.woff) format('woff');
  }

  svg {
    width: 100%;
    height: 100%;
  }

  #___gatsby {
    position: relative;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DDIN';
  }
`

const IndexPage = () => {
  return (
    <>
      <Global styles={global} />
      <Header />
      <Sections />
      <Footer />
    </>
  )
}

export default IndexPage
