import React from 'react'

import { css } from '@emotion/react'
import { mq } from './Header'

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
    img: '/images/CRS-25.webp',
    caption: 'Recent Launch',
    title: 'CRS-25 Mission',
    button: { title: 'Rewatch', link: '#' },
  },
  {
    img: '/images/Starlink.webp',
    caption: 'Recent Launch',
    title: 'Starlink Mission',
    button: { title: 'Rewatch', link: '#' },
  },
  {
    img: '/images/Starship.webp',
    title: 'Starship Update',
    button: { title: 'Learn More', link: '#' },
  },
  {
    img: '/images/StarshipLand.webp',
    title: 'Starship to Land NASA Astronauts on the Moon',
    button: { title: 'Learn More', link: '#' },
  },
]

type Props = {
  imgURL: string
}
const Section = (props: Content) => {
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
      <div
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

          & > * {
            text-transform: uppercase;
          }
        `}
      >
        {props.caption ? (
          <p
            css={css`
              font-size: 20px;
              line-height: 2;
            `}
          >
            {props.caption}
          </p>
        ) : null}
        <h1
          css={css`
            margin-bottom: 0.5em;
            font-weight: bold;
            font-size: 46px;
          `}
        >
          {props.title}
        </h1>
        <button
          title={props.button.title}
          css={css`
            background-color: transparent;
            border: 1px solid #fff;
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
              padding: 18px 54px;
              display: block;
            `}
            href={props.button.link}
          >
            {props.button.title}
          </a>
        </button>
      </div>
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
