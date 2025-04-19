"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([])
  const [trailId, setTrailId] = useState(0)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      // Add trail more frequently
      if (trailId % 2 === 0) {
        // Changed from 3 to 2 to add more trails
        setTrails((prev) => [
          ...prev.slice(-15), // Keep more trails (15 instead of 10)
          { x: e.clientX, y: e.clientY, id: trailId },
        ])
      }
      setTrailId((prev) => prev + 1)
    }

    const updateHoverState = () => {
      const hoveredElements = document.querySelectorAll("a, button, input, textarea, select, [role='button']")
      let isHovering = false

      hoveredElements.forEach((element) => {
        if (element.matches(":hover")) {
          isHovering = true
        }
      })

      setIsHovered(isHovering)
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousemove", updateHoverState)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousemove", updateHoverState)
    }
  }, [trailId])

  if (typeof window === "undefined") return null

  return (
    <>
      {isVisible && (
        <>
          {trails.map((trail, index) => (
            <motion.div
              key={trail.id}
              className="cursor-trail"
              initial={{ opacity: 0.8, scale: 1 }}
              animate={{
                opacity: 0,
                scale: 0,
                x: trail.x,
                y: trail.y,
              }}
              transition={{ duration: 0.8 }}
              style={{
                left: trail.x,
                top: trail.y,
              }}
            />
          ))}

          <motion.div
            className={`cursor-dot ${isHovered ? "hovered" : ""}`}
            animate={{
              x: position.x,
              y: position.y,
              scale: isHovered ? 1.5 : 1,
            }}
            transition={{
              type: "spring",
              mass: 0.1,
              stiffness: 1000,
              damping: 30,
            }}
          />

          <motion.div
            className={`cursor-outline ${isHovered ? "hovered" : ""}`}
            animate={{
              x: position.x,
              y: position.y,
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{
              type: "spring",
              mass: 0.6,
              stiffness: 200,
              damping: 20,
            }}
          />
        </>
      )}
    </>
  )
}
