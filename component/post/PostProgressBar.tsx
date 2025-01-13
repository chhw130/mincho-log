'use client'

import { useScroll, useSpring, motion } from 'motion/react'

const PostProgressBar = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })
  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 10,
        originX: 0,
        zIndex: 1000,
        backgroundColor: '#A5DE9F',
      }}
    />
  )
}

export default PostProgressBar
