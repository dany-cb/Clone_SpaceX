import { BiMenu, BiX } from 'react-icons/bi'
import { css } from '@emotion/react'

import Logo from './Logo'

const testBGBlack = css`
  background-color: #000;
`

const btn = css`
  cursor: pointer;
  background: none;
  border: none;
  height: 26px;
  position: absolute;
  top: 20px;
  right: 12px;
  padding: 0; //not removed by reset-css

  svg {
    width: 100%;
    height: 100%;
  }
`

const header = css`
  ${testBGBlack};
  position: absolute;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const hiddenMenu = css`
  height: 100%;
  width: 290px;
  background-color: #000;
  margin-left: auto;
`

function Header() {
  return (
    <header css={header}>
      <Logo />
      <nav
        css={css`
          display: none;
        `}
      >
        <ul>
          <li>
            <a href="#">Falcon 9</a>
          </li>
          <li>
            <a href="#">Falcon Heavy</a>
          </li>
          <li>
            <a href="#">Dragon</a>
          </li>
          <li>
            <a href="#">Starship</a>
          </li>
          <li>
            <a href="#">Human Spaceflight</a>
          </li>
          <li>
            <a href="#">Rideshare</a>
          </li>
          <li>
            <a href="#">Starlink</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </ul>
      </nav>
      <button css={btn}>
        <BiMenu color="#fff" />
      </button>
      <div
        css={css`
          display: none;
          position: absolute;
          top: 0;
          height: 100vh;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.5);
        `}
      >
        <nav css={hiddenMenu}>
          <button css={btn}>
            <BiX color="#fff" />
          </button>
          <ul
            css={css`
              padding-top: 60px;

              li {
                list-style: none;
                border-bottom: solid 1px rgba(255, 255, 255, 0.18);
              }

              a {
                padding: 12px;
                padding-right: 18px;
                display: block;
                width: 100%;
                text-align: end;
                text-decoration: none;
                cursor: pointer;
                text-transform: uppercase;
                color: #fff;
                transition: color 0.5s;

                &:hover {
                  color: #8b939b;
                }
              }
            `}
          >
            <li>
              <a href="#">Falcon 9</a>
            </li>
            <li>
              <a href="#">Falcon Heavy</a>
            </li>
            <li>
              <a href="#">Dragon</a>
            </li>
            <li>
              <a href="#">Starship</a>
            </li>
            <li>
              <a href="#">Human Spaceflight</a>
            </li>
            <li>
              <a href="#">Rideshare</a>
            </li>
            <li>
              <a href="#">Starlink</a>
            </li>
            <li>
              <a href="#">Mission</a>
            </li>
            <li>
              <a href="#">Launches</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Updates</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
