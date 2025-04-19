"use client"

import { motion } from "framer-motion"

function CircuitBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
      <svg className="absolute w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--purple-400)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--blue-400)" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Main circuit lines */}
        {Array.from({ length: 20 }).map((_, i) => {
          const startX = Math.random() * 100
          const startY = Math.random() * 100
          const endX = startX + (Math.random() * 40 - 20)
          const endY = startY + (Math.random() * 40 - 20)

          return (
            <motion.path
              key={`line-${i}`}
              d={`M ${startX} ${startY} L ${endX} ${endY}`}
              stroke="url(#circuit-gradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "linear",
                delay: Math.random() * 2,
              }}
            />
          )
        })}

        {/* Circuit nodes */}
        {Array.from({ length: 30 }).map((_, i) => {
          const x = Math.random() * 100
          const y = Math.random() * 100
          const size = Math.random() * 5 + 2

          return (
            <motion.circle
              key={`node-${i}`}
              cx={`${x}%`}
              cy={`${y}%`}
              r={size}
              fill="url(#circuit-gradient)"
              animate={{
                opacity: [0.2, 0.8, 0.2],
                r: [size, size * 1.5, size],
              }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 3,
              }}
            />
          )
        })}

        {/* Circuit components */}
        {Array.from({ length: 15 }).map((_, i) => {
          const x = Math.random() * 100
          const y = Math.random() * 100
          const width = Math.random() * 15 + 10
          const height = Math.random() * 15 + 10

          return (
            <motion.rect
              key={`component-${i}`}
              x={`${x}%`}
              y={`${y}%`}
              width={width}
              height={height}
              rx="2"
              ry="2"
              stroke="url(#circuit-gradient)"
              strokeWidth="1"
              fill="none"
              animate={{
                opacity: [0.1, 0.4, 0.1],
                strokeWidth: [1, 2, 1],
              }}
              transition={{
                duration: Math.random() * 6 + 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          )
        })}
      </svg>
    </div>
  )
}

const skills = [
  {
    id: 1,
    name: "React",
    logo: "/placeholder.svg?height=60&width=60",
    description: "Building interactive UIs with React and its ecosystem including hooks, context, and state management",
  },
  {
    id: 2,
    name: "Next.js",
    logo: "/placeholder.svg?height=60&width=60",
    description: "Creating full-stack applications with server-side rendering, static site generation, and API routes",
  },
  {
    id: 3,
    name: "TypeScript",
    logo: "/placeholder.svg?height=60&width=60",
    description: "Developing type-safe applications with enhanced developer experience and code quality",
  },
  {
    id: 4,
    name: "Tailwind CSS",
    logo: "/placeholder.svg?height=60&width=60",
    description: "Crafting responsive and modern UIs with utility-first CSS framework",
  },
  {
    id: 5,
    name: "Framer Motion",
    logo: "/placeholder.svg?height=60&width=60",
    description: "Creating fluid animations and interactive UI components with the power of physics-based animations",
  },
  {
    id: 6,
    name: "Node.js",
    logo: "/placeholder.svg?height=60&width=60",
    description: "Building scalable backend services and APIs with JavaScript runtime environment",
  },
  {
    id: 7,
    name: "MongoDB",
    logo: "/placeholder.svg?height=60&width=60",
    description: "Working with NoSQL databases to store and retrieve data efficiently",
  },
  {
    id: 8,
    name: "GraphQL",
    logo: "/placeholder.svg?height=60&width=60",
    description: "Implementing efficient data fetching with a powerful query language for APIs",
  },
  {
    id: 9,
    name: "Git & GitHub",
    logo: "/placeholder.svg?height=60&width=60",
    description: "Version control and collaboration with distributed version control system",
  },
  {
    id: 10,
    name: "UI/UX Design",
    logo: "/placeholder.svg?height=60&width=60",
    description: "Creating user-centered designs with focus on usability and aesthetics",
  },
  {
    id: 11,
    name: "Jest & Testing",
    logo: "/placeholder.svg?height=60&width=60",
    description: "Writing unit and integration tests to ensure code quality and reliability",
  },
  {
    id: 12,
    name: "AWS",
    logo: "/placeholder.svg?height=60&width=60",
    description: "Deploying and managing cloud infrastructure with Amazon Web Services",
  },
]

export default function SkillsSection() {
  return (
    <div className="container mx-auto px-4 py-16 relative">
      <CircuitBackground />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Skills & Expertise</h2>

        {/* Background grid lines */}
        <div className="absolute inset-0 grid grid-cols-6 h-full w-full z-0 opacity-10 pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border-r border-primary h-full" />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border-b border-primary w-full" />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="glassmorphism p-6 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(124, 58, 237, 0.5)",
              }}
            >
              <motion.div className="flex items-center mb-4" initial={{ x: 0 }} whileHover={{ x: 5 }}>
                <div className="w-12 h-12 mr-4 rounded-lg overflow-hidden bg-background/50 flex items-center justify-center">
                  <img src={skill.logo || "/placeholder.svg"} alt={skill.name} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">{skill.name}</h3>
              </motion.div>

              <p className="text-muted-foreground">{skill.description}</p>

              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
                initial={{ scale: 0.8, opacity: 0.5 }}
                whileHover={{ scale: 1.2, opacity: 0.8 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500/50 to-pink-500/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
