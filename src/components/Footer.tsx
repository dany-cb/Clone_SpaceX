import { css } from '@emotion/react'
import { mq } from './Header'

const Footer = () => {
  return (
    <footer
      css={css`
        background-color: #000;
        text-align: center;
        font-size: 12px;
        width: 100%;
        text-transform: uppercase;
        padding: 40px 0 20px 0;
        white-space: nowrap;

        ${mq[1]} {
          display: flex;
          justify-content: center;
          padding: 20px 0;
          div {
            padding: 15px 20px;
          }
          ul {
            width: auto;
          }
        }
      `}
    >
      <div
        css={css`
          color: rgb(151, 151, 151);
        `}
      >
        SpaceX © 2022
      </div>
      <ul
        css={css`
          display: inline-flex;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
          padding: 10px 0px;
          a {
            text-decoration: none;
            color: #fff;
            font-weight: bold;

            width: 100%;
          }
          li {
            margin: 5px 5px;
            ${mq[0]} {
              margin: 5px 20px;
            }
          }
        `}
      >
        <li>
          <a href="#">Twitter</a>
        </li>
        <li>
          <a href="#">YouTube</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Flickr</a>
        </li>
        <li>
          <a href="#">LinkedIn</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Suppliers</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
