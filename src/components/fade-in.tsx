"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"

type FadeInProps = {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: "div" | "section" | "article"
}

export function FadeIn({ children, delay = 0, className, as = "div" }: FadeInProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const MotionComponent = motion[as]

  return (
    <MotionComponent
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </MotionComponent>
  )
}