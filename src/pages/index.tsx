import React from 'react'
import { Global, css } from '@emotion/react'

import { Header } from '../components'

const global = css`
  @font-face {
    font-family: 'DDIN';
    font-style: normal;
    font-weight: 400;
    src: url(/fonts/D-DIN.woff) format('woff');
  }

  svg {
    width: 100%;
    height: 100%;
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
    </>
  )
}

export default IndexPage
