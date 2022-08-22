/**
 * TODO:
 * - [] Add responsiveness
 * - [] Use map to render elements
 */

import { BiMenu, BiX } from 'react-icons/bi'
import { css } from '@emotion/react'
import { motion, useCycle, Variant } from 'framer-motion'

import Logo from './Logo'

type custVariants = {
  [key in 'overlay' | 'items' | 'menu']: { [key in 'open' | 'closed']: Variant }
}

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
/* Main Component */
function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true)

  const variants: custVariants = {
    overlay: {
      open: {
        display: 'block',
        visibility: 'visible',
        transition: {
          delayChildren: 0.2,
        },
      },
      closed: {
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
            duration: 0.2,
            ease: 'easeInOut',
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
            ease: 'easeInOut',
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
      <button css={btn} onClick={() => toggleOpen()}>
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
          background-color: rgba(0, 0, 0, 0.5);
        `}
      >
        <motion.nav
          variants={variants.menu}
          css={hiddenMenu}
          onClick={(e) => e.stopPropagation()}
        >
          <motion.button
            css={btn}
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
            <motion.li variants={variants.items}>
              <a href="#">Falcon 9</a>
            </motion.li>
            <motion.li variants={variants.items}>
              <a href="#">Falcon Heavy</a>
            </motion.li>
            <motion.li variants={variants.items}>
              <a href="#">Dragon</a>
            </motion.li>
            <motion.li variants={variants.items}>
              <a href="#">Starship</a>
            </motion.li>
            <motion.li variants={variants.items}>
              <a href="#">Human Spaceflight</a>
            </motion.li>
            <motion.li variants={variants.items}>
              <a href="#">Rideshare</a>
            </motion.li>
            <motion.li variants={variants.items}>
              <a href="#">Starlink</a>
            </motion.li>
            <motion.li variants={variants.items}>
              <a href="#">Mission</a>
            </motion.li>
            <motion.li variants={variants.items}>
              <a href="#">Launches</a>
            </motion.li>
            <motion.li variants={variants.items}>
              <a href="#">Careers</a>
            </motion.li>
            <motion.li variants={variants.items}>
              <a href="#">Updates</a>
            </motion.li>
            <motion.li variants={variants.items}>
              <a href="#">Shop</a>
            </motion.li>
          </ul>
        </motion.nav>
      </motion.div>
    </header>
  )
}

export default Header
