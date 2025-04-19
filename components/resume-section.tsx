"use client"

import { motion } from "framer-motion"
import { DownloadIcon, ZoomInIcon, ZoomOutIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ResumeSection() {
  const [scale, setScale] = useState(1)

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.1, 1.5))
  }

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.1, 0.5))
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Resume</h2>

        <div className="flex justify-end mb-4 space-x-2">
          <Button variant="outline" size="sm" onClick={zoomOut}>
            <ZoomOutIcon className="h-4 w-4 mr-2" />
            Zoom Out
          </Button>
          <Button variant="outline" size="sm" onClick={zoomIn}>
            <ZoomInIcon className="h-4 w-4 mr-2" />
            Zoom In
          </Button>
          <Button>
            <DownloadIcon className="h-4 w-4 mr-2" />
            Download Resume
          </Button>
        </div>

        <motion.div
          className="glassmorphism p-6 md:p-10 overflow-hidden"
          whileHover={{ boxShadow: "0 0 30px rgba(124, 58, 237, 0.3)" }}
          style={{ transformOrigin: "top center" }}
        >
          <motion.div
            style={{ scale }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-inner p-8 min-h-[800px] transform-gpu"
          >
            {/* Resume Content */}
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Yashvi Dholakiya</h1>
                <p className="text-muted-foreground">Frontend Developer</p>
                <div className="flex justify-center gap-4 mt-2 text-sm">
                  <span>example@email.com</span>
                  <span>+1 (123) 456-7890</span>
                  <span>Location, Country</span>
                </div>
              </div>

              <div className="grid gap-8">
                {/* Summary */}
                <div>
                  <h2 className="text-xl font-bold border-b pb-2 mb-4">Professional Summary</h2>
                  <p className="text-muted-foreground">
                    Passionate frontend developer with expertise in React, Next.js, and modern JavaScript. Dedicated to
                    creating responsive, accessible, and performant web applications with clean code and attention to
                    detail.
                  </p>
                </div>

                {/* Experience */}
                <div>
                  <h2 className="text-xl font-bold border-b pb-2 mb-4">Work Experience</h2>

                  <div className="mb-6">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold">Frontend Developer</h3>
                      <span className="text-sm text-muted-foreground">Jan 2022 - Present</span>
                    </div>
                    <p className="text-muted-foreground mb-1">Company Name, Location</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                      <li>Developed responsive web applications using React and Next.js</li>
                      <li>Implemented state management solutions with Redux and Context API</li>
                      <li>Collaborated with designers to implement pixel-perfect UI components</li>
                      <li>Optimized application performance and improved load times by 40%</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold">Web Development Intern</h3>
                      <span className="text-sm text-muted-foreground">Jun 2021 - Dec 2021</span>
                    </div>
                    <p className="text-muted-foreground mb-1">Company Name, Location</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                      <li>Assisted in developing and maintaining client websites</li>
                      <li>Created responsive layouts using HTML, CSS, and JavaScript</li>
                      <li>Participated in code reviews and implemented feedback</li>
                    </ul>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-xl font-bold border-b pb-2 mb-4">Education</h2>
                  <div className="mb-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold">Bachelor of Technology in Computer Science</h3>
                      <span className="text-sm text-muted-foreground">2020 - 2024</span>
                    </div>
                    <p className="text-muted-foreground">Gujarat Technological University</p>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h2 className="text-xl font-bold border-b pb-2 mb-4">Skills</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold mb-2">Technical Skills</h3>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        <li>JavaScript, TypeScript, HTML, CSS</li>
                        <li>React, Next.js, Redux</li>
                        <li>Tailwind CSS, Styled Components</li>
                        <li>Git, GitHub, CI/CD</li>
                        <li>Responsive Design, Accessibility</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Soft Skills</h3>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        <li>Problem Solving</li>
                        <li>Team Collaboration</li>
                        <li>Communication</li>
                        <li>Time Management</li>
                        <li>Adaptability</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
