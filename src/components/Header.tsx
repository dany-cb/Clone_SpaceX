import { BiMenu, BiX } from 'react-icons/bi'
import { css } from '@emotion/react'
import { motion, useCycle, Variant } from 'framer-motion'

import Logo from './Logo'
import { useEffect, useState } from 'react'

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
  /* ${testBGBlack}; */

  ${mq[1]} {
    height: 100px;
    padding: 32px 50px;
    align-items: baseline;
  }
  position: fixed;
  z-index: 20;
  top: 0;

  @media (min-width: 1400px) {
    right: 0;
    width: calc(50vw + 700px);
  }

  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const blackOverlay = css`
  width: 100vw;
  height: 100%;
  top: 0;
  right: 0;
  position: absolute;
  background-color: #000;
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
        x: {
          type: 'tween',
          duration: 0.3,
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
      y: 0,
      opacity: 0,
    },
  },
}

let prevScrollTop = 0

/* Main Component */
function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true) //State of hamburger menu

  const [showOverlay, setOverlay] = useState(false)
  console.log('overlay', showOverlay)
  const [isVisible, setVisible] = useState(true)
  const checkScroll = () => {
    window.scrollY > prevScrollTop && setVisible(false)

    window.scrollY < prevScrollTop && setVisible(true)
    if (window.scrollY != prevScrollTop) {
      toggleOpen(0)
      window.scrollY > window.innerHeight ? setOverlay(true) : setOverlay(false)
    }
    prevScrollTop = window.scrollY
    window.requestAnimationFrame(checkScroll)
  }
  useEffect(() => {
    checkScroll()
  }, [])

  return (
    <motion.header
      css={header}
      animate={
        isVisible ? { opacity: 1 } : { opacity: 0, pointerEvents: 'none' }
      }
    >
      <motion.div
        css={blackOverlay}
        initial={{ y: -100 }}
        animate={isVisible && showOverlay ? { y: 0 } : { y: -100 }}
        transition={{ ease: 'easeInOut' }}
      ></motion.div>
      <Logo
        addCss={css`
          ${mq[1]} {
            width: 210px;
            margin-right: 24px;
          }
        `}
      />
      <nav css={menu}>
        <ul
          css={css`
            display: flex;
            li {
              list-style: none;
              margin: 0 14px;
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
                    font-weight: bold;
                    font-size: 14px;
                    position: relative;
                    white-space: nowrap;

                    &:before {
                      content: '';
                      position: absolute;
                      width: 100%;
                      border-bottom: 1px solid #fff;
                      bottom: -4px;
                      transform: scaleX(0);
                      transform-origin: right center;
                      transition: transform cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
                    }

                    &:hover::before {
                      transform: scaleX(1);
                      transform-origin: left center;
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
            align-self: center;
            margin-top: 8px;
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
          right: 0;
          height: 100vh;
          width: 100vw;
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
                initial={{
                  y: 20,
                  opacity: 0,
                }}
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
    </motion.header>
  )
}

export { Header as default, mq }
