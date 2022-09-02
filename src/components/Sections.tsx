import React, { useState } from 'react'

import { css } from '@emotion/react'
import { mq } from './Header'
import { motion, useCycle, Variants } from 'framer-motion'

const txtVariants: Variants = {
  hidden: {
    opacity: 0,
    top: 70,
  },
  visible: {
    opacity: 1,
    top: 0,
  },
}

type Content = {
  img: string
  caption?: string
  title: string
  button: {
    title: string
    link: string
  }
}
const content: Content[] = [
  {
    img: './images/CRS-25.webp',
    caption: 'Recent Launch',
    title: 'CRS-25 Mission',
    button: { title: 'Rewatch', link: '#' },
  },
  {
    img: './images/Starlink.webp',
    caption: 'Recent Launch',
    title: 'Starlink Mission',
    button: { title: 'Rewatch', link: '#' },
  },
  {
    img: './images/Starship.webp',
    title: 'Starship Update',
    button: { title: 'Learn More', link: '#' },
  },
  {
    img: './images/StarshipLand.webp',
    title: 'Starship to Land NASA Astronauts on the Moon',
    button: { title: 'Learn More', link: '#' },
  },
]

type Props = {
  imgURL: string
}
const Section = (props: Content) => {
  const [state, setState] = useState('hidden')
  return (
    /**
     * - FIXME: Add downward arrow and animation
     */
    <section
      css={css`
        width: 100%;
        height: 100vh;
        background-image: url(${props.img});
        background-size: cover;
        background-position: center;
        position: relative;
      `}
    >
      <motion.div
        onViewportEnter={() => {
          setState('visible')
          console.log('In view')
        }}
        viewport={{ once: true }}
        css={css`
          position: absolute;
          color: #fff;
          left: 20px;
          bottom: 90px;

          ${mq[0]} {
            bottom: 17%;
            left: 68px;
            max-width: 50%;
          }

          @media (min-width: 1400px) {
            left: calc(50vw - 632px);
          }

          & > * {
            text-transform: uppercase;
            position: relative;
          }
        `}
      >
        {props.caption ? (
          <motion.p
            variants={txtVariants}
            initial="hidden"
            animate={state}
            css={css`
              font-size: 20px;
              line-height: 2;
            `}
          >
            {props.caption}
          </motion.p>
        ) : null}
        <motion.h1
          variants={txtVariants}
          initial="hidden"
          animate={state}
          transition={{ delay: 0.1 }}
          css={css`
            margin-bottom: 0.5em;
            font-weight: bold;
            font-size: 46px;

            ${mq[1]} {
              margin-bottom: 0.7em;
            }
          `}
        >
          {props.title}
        </motion.h1>
        <motion.button
          variants={txtVariants}
          initial="hidden"
          animate={state}
          transition={{ delay: 0.2 }}
          title={props.button.title}
          css={css`
            background-color: transparent;
            position: relative;
            border: 2px solid #fff;
            color: inherit;
          `}
        >
          <a
            css={css`
              text-decoration: none;
              /* color: #fff; */
              width: 100%;
              height: 100%;
              color: inherit;
              padding: 16px 54px;
              font-weight: bold;
              font-size: 1em;
              display: block;
              position: relative;
              z-index: 2;
              transition: color ease-out 0.3s;

              &:hover {
                color: #000;

                & + div {
                  transform: scaleY(1);
                  transform-origin: bottom center;
                }
              }
            `}
            href={props.button.link}
          >
            {props.button.title}
          </a>
          <div
            css={css`
              width: 100%;
              height: 100%;
              top: 0;
              position: absolute;
              z-index: 1;
              transform: scaleY(0);
              transform-origin: top center;
              background-color: #fff;
              transition: transform cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
            `}
          ></div>
        </motion.button>
      </motion.div>
    </section>
  )
}

const Sections = () => {
  return (
    <>
      {content.map((section) => (
        <Section {...section} key={section.title} />
      ))}
    </>
  )
}

export default Sections
