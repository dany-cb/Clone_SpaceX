import { BiMenu, BiX } from 'react-icons/bi'
import { css } from '@emotion/react'
import { motion, useCycle, Variant } from 'framer-motion'

import Logo from './Logo'

type CustVariants = {
  [key in 'overlay' | 'items' | 'menu']: { [key in 'open' | 'closed']: Variant }
}

const mq = [600, 1050].map(
  (breakpoint) => `@media (min-width: ${breakpoint}px)`
)

const menuItems = [
  'Falcon 9',
  'Falcon Heavy',
  'Dragon',
  'Starship',
  'Human Spaceflight',
  'Rideshare',
  'Starlink',
  'Mission',
  'Launches',
  'Careers',
  'Updates',
  'Shop',
]

const burgerMenuItems = ['Mission', 'Launches', 'Careers', 'Updates']

const testBGBlack = css`
  background-color: #000;
`

const header = css`
  ${testBGBlack};

  ${mq[1]} {
    height: 100px;
    padding: 32px 50px;
  }
  position: absolute;
  max-width: 1400px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const btn = css`
  cursor: pointer;
  background: none;
  border: none;
  height: 26px;
  margin-left: 12px;
  position: absolute;
  top: 20px;
  right: 12px;
  padding: 0; //not removed by reset-css

  ${mq[0]} {
    right: 46px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`

const menu = css`
  display: none;
  flex-grow: 1;
  ${mq[1]} {
    display: block;
  }
`

const burgerMenu = css`
  height: 100%;
  width: 290px;
  background-color: #000;
  margin-left: auto;
`

const variants: CustVariants = {
  overlay: {
    open: {
      display: 'block',
      opacity: 1,
      visibility: 'visible',
      transition: {
        delayChildren: 0.01,
      },
    },
    closed: {
      opacity: 0,
      display: 'none',
      visibility: 'hidden',
      transition: {
        when: 'afterChildren',
      },
    },
  },
  menu: {
    open: {
      x: 0,
      transition: {
        staggerChildren: 0.03,
        when: 'beforeChildren',
        x: {
          type: 'tween',
          duration: 0.3,
          ease: 'easeIn',
        },
      },
    },
    closed: {
      x: 290,
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
        when: 'afterChildren',
        x: {
          type: 'tween',
          duration: 0.2,
          ease: 'easeIn',
        },
      },
    },
  },
  items: {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 20,
      opacity: 0,
    },
  },
}
/* Main Component */
function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <header css={header}>
      <Logo
        addCss={css`
          ${mq[1]} {
            width: 210px;
          }
        `}
      />
      <nav css={menu}>
        <ul
          css={css`
            display: flex;
            li {
              list-style: none;
              margin: 0 12px;
            }
            li:last-of-type {
              margin-left: auto;
            }
          `}
        >
          {menuItems
            .filter((item) => !burgerMenuItems.includes(item))
            .map((navMenuItem) => (
              <li key={navMenuItem}>
                <a
                  href="#"
                  css={css`
                    text-transform: uppercase;
                    text-decoration: none;
                    color: #fff;
                    font-size: 14px;
                    position: relative;
                    white-space: nowrap;

                    &:before {
                      content: '';
                      position: absolute;
                      width: 100%;
                      border-bottom: 1px solid #fff;
                      bottom: -4px;
                      visibility: hidden;
                      transform: scaleX(0);
                      transform-origin: left center;
                      transition: transform ease-in-out 0.2s,
                        transform-origin step-end 0.2s, visibility 0.2s;
                    }

                    &:hover::before {
                      visibility: visible;
                      transform: scaleX(1);
                      transform-origin: right center;
                    }
                  `}
                >
                  {navMenuItem}
                </a>
              </li>
            ))}
        </ul>
      </nav>
      <button
        css={css`
          ${btn}

          ${mq[1]} {
            position: static;
          }
        `}
        onClick={() => toggleOpen()}
      >
        <BiMenu color="#fff" />
      </button>

      <motion.div
        onClick={() => toggleOpen()}
        variants={variants.overlay}
        animate={isOpen ? 'open' : 'closed'}
        css={css`
          display: none;
          position: absolute;
          top: 0;
          height: 100vh;
          width: 100%;
          z-index: 10;
          background-color: rgba(0, 0, 0, 0.5);
        `}
      >
        <motion.nav
          variants={variants.menu}
          css={burgerMenu}
          onClick={(e) => e.stopPropagation()}
        >
          <motion.button
            css={css`
              ${btn}
              ${mq[1]} {
                top: 40px;
              }
            `}
            onClick={(e) => {
              toggleOpen()
              e.stopPropagation()
            }}
          >
            <BiX color="#fff" />
          </motion.button>
          <ul
            css={css`
              padding-top: 60px;
              ${mq[1]} {
                padding-top: 100px;
              }
              li {
                list-style: none;
                border-bottom: solid 1px rgba(255, 255, 255, 0.18);
                margin-right: 18px;
                ${mq[0]} {
                  margin-right: 50px;
                }
              }
            `}
          >
            {menuItems.map((item) => (
              <motion.li
                variants={variants.items}
                key={item}
                css={
                  ![...burgerMenuItems, 'Shop'].includes(item)
                    ? css`
                        ${mq[1]} {
                          display: none;
                        }
                      `
                    : undefined
                }
              >
                <a
                  href="#"
                  css={css`
                    padding: 12px 0;
                    display: block;
                    width: 100%;
                    text-align: end;
                    text-decoration: none;
                    text-transform: uppercase;
                    color: #fff;
                    transition: color 0.4s;

                    &:hover {
                      color: #8b939b;
                    }
                  `}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </motion.div>
    </header>
  )
}

export default Header
