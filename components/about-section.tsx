"use client"

import { motion } from "framer-motion"
import { BookOpenIcon, CodeIcon, MusicIcon, GlobeIcon } from "lucide-react"

function GeometricBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
      <svg className="absolute w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          </pattern>
          <linearGradient id="geo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--purple-400)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--blue-400)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />

        {/* Geometric shapes */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.circle
            key={`circle-${i}`}
            cx={`${Math.random() * 100}%`}
            cy={`${Math.random() * 100}%`}
            r={Math.random() * 50 + 20}
            fill="url(#geo-gradient)"
            opacity={Math.random() * 0.2 + 0.1}
            animate={{
              cx: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
              cy: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
            }}
            transition={{
              duration: Math.random() * 50 + 30,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}

        {Array.from({ length: 10 }).map((_, i) => (
          <motion.rect
            key={`rect-${i}`}
            x={`${Math.random() * 100}%`}
            y={`${Math.random() * 100}%`}
            width={Math.random() * 100 + 50}
            height={Math.random() * 100 + 50}
            fill="url(#geo-gradient)"
            opacity={Math.random() * 0.1 + 0.05}
            animate={{
              rotate: [0, 180, 360],
              x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
            }}
            transition={{
              duration: Math.random() * 60 + 40,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

const educationData = [
  {
    id: 1,
    year: "2020 - 2024",
    degree: "Bachelor of Technology in Computer Science",
    institution: "Gujarat Technological University",
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    year: "2018 - 2020",
    degree: "Higher Secondary Education",
    institution: "Gujarat Secondary Education Board",
    logo: "/placeholder.svg?height=80&width=80",
  },
]

const hobbies = [
  { id: 1, name: "Reading", icon: <BookOpenIcon className="w-8 h-8" /> },
  { id: 2, name: "Coding", icon: <CodeIcon className="w-8 h-8" /> },
  { id: 3, name: "Music", icon: <MusicIcon className="w-8 h-8" /> },
  { id: 4, name: "Travel", icon: <GlobeIcon className="w-8 h-8" /> },
]

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <div className="container mx-auto px-4 py-16 relative">
      <GeometricBackground />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
          About Me
        </motion.h2>

        <motion.div variants={itemVariants} className="mb-16 text-lg text-center leading-relaxed">
          <p className="mb-4">
            I'm a passionate developer with a love for creating beautiful, functional digital experiences. My journey in
            tech began with a curiosity about how things work, which evolved into a deep appreciation for the art and
            science of software development.
          </p>
          <p>
            I believe in the power of technology to solve real-world problems and enhance human experiences. When I'm
            not coding, you can find me exploring new technologies, reading about design principles, or working on
            personal projects that challenge my skills and creativity.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Education Timeline</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 via-pink-500 to-blue-500 rounded-full" />

            {/* Timeline items */}
            {educationData.map((item, index) => (
              <motion.div
                key={item.id}
                className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                  <h4 className="text-xl font-semibold">{item.degree}</h4>
                  <p className="text-muted-foreground">{item.institution}</p>
                  <p className="text-sm text-muted-foreground">{item.year}</p>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10">
                  <motion.div
                    className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                </div>

                <div className={`w-1/2 ${index % 2 === 0 ? "pl-12" : "pr-12 text-right"}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-2"
                  >
                    <img
                      src={item.logo || "/placeholder.svg"}
                      alt={item.institution}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold mb-8 text-center">Hobbies & Interests</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hobbies.map((hobby) => (
              <motion.div
                key={hobby.id}
                className="glassmorphism p-6 flex flex-col items-center text-center"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(124, 58, 237, 0.5)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.2, rotate: 5 }} className="mb-4 text-primary">
                  {hobby.icon}
                </motion.div>
                <h4 className="font-medium">{hobby.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
