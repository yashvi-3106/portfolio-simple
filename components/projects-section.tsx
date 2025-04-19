"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon, GithubIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const projectCategories = ["Featured", "Contributions", "Clones"]

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart functionality, and payment integration.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Featured",
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A dynamic portfolio website with 3D elements and smooth animations.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Featured",
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Featured",
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 4,
    title: "Open Source Contribution",
    description: "Contributed to an open-source library by adding new features and fixing bugs.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Contributions",
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 5,
    title: "UI Component Library",
    description: "Developed reusable UI components with comprehensive documentation.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Contributions",
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 6,
    title: "Twitter Clone",
    description: "A Twitter clone with core functionalities like tweets, likes, and follows.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Clones",
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 7,
    title: "Netflix Clone",
    description: "A Netflix-inspired streaming platform with movie recommendations.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Clones",
    demoLink: "#",
    githubLink: "#",
  },
]

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("Featured")
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const filteredProjects = projects.filter((project) => project.category === activeCategory)

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1))
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1))
  }

  const getProjectIndex = (offset: number) => {
    const length = filteredProjects.length
    return (currentIndex + offset + length) % length
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Projects</h2>

        <div className="mb-10 flex justify-center">
          <Tabs
            defaultValue="Featured"
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full max-w-md"
          >
            <TabsList className="grid grid-cols-3">
              {projectCategories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="relative" ref={carouselRef}>
          <div className="overflow-hidden py-10">
            <div className="relative h-[500px]">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => {
                  // Calculate position: -1 = left, 0 = center, 1 = right
                  let position = 0
                  if (index === getProjectIndex(-1)) position = -1
                  if (index === currentIndex) position = 0
                  if (index === getProjectIndex(1)) position = 1

                  // Only render visible projects (current, prev, next)
                  if (index !== currentIndex && index !== getProjectIndex(-1) && index !== getProjectIndex(1)) {
                    return null
                  }

                  return (
                    <motion.div
                      key={project.id}
                      className="absolute top-0 left-0 w-full h-full"
                      initial={{
                        opacity: 0,
                        x: position * 100 + "%",
                        scale: position === 0 ? 1 : 0.8,
                        zIndex: position === 0 ? 10 : 5,
                      }}
                      animate={{
                        opacity: position === 0 ? 1 : 0.7,
                        x: position * 100 + "%",
                        scale: position === 0 ? 1 : 0.8,
                        zIndex: position === 0 ? 10 : 5,
                      }}
                      exit={{
                        opacity: 0,
                        x: position * -100 + "%",
                        scale: 0.8,
                        zIndex: 5,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="glassmorphism h-full p-6 flex flex-col md:flex-row gap-6 overflow-hidden">
                        <motion.div
                          className="w-full md:w-1/2 rounded-xl overflow-hidden"
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        <div className="w-full md:w-1/2 flex flex-col justify-between">
                          <div>
                            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                            <p className="text-muted-foreground mb-6">{project.description}</p>
                          </div>
                          <div className="flex gap-4">
                            <Button asChild>
                              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                                <ExternalLinkIcon className="mr-2 h-4 w-4" />
                                Live Demo
                              </a>
                            </Button>
                            <Button variant="outline" asChild>
                              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                <GithubIcon className="mr-2 h-4 w-4" />
                                GitHub
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 rounded-full"
            onClick={prevProject}
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 rounded-full"
            onClick={nextProject}
          >
            <ChevronRightIcon className="h-6 w-6" />
          </Button>

          <div className="flex justify-center mt-6 gap-2">
            {filteredProjects.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
