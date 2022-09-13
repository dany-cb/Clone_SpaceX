import { SerializedStyles, css } from '@emotion/react'
import { motion } from 'framer-motion'

type Props = {
  css?: SerializedStyles
}
const DownArrow = (props: Props) => {
  return (
    <motion.div
      initial={{ x: -15 }}
      animate={{ y: [-10, -10, 0, 0], opacity: [0, 1, 1, 0] }}
      transition={{
        duration: 2,
        times: [0, 0.25, 0.75, 1],
        ease: 'easeInOut',
        repeat: Infinity,
        repeatDelay: 1,
      }}
      css={css`
        ${props.css}

        position: absolute;
        bottom: 30px;
        left: 50%;
      `}
    >
      <svg width="30px" height="20px" css={css``}>
        <path
          fill="none"
          stroke="#ffffff"
          strokeWidth="2px"
          d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
        ></path>
      </svg>
    </motion.div>
  )
}

export default DownArrow
