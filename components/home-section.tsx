"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { ArrowDownIcon } from "lucide-react"

export default function HomeSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Calculate mouse position as percentage of screen
      const x = (clientX / innerWidth - 0.5) * 2 // -1 to 1
      const y = (clientY / innerHeight - 0.5) * 2 // -1 to 1

      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  function WavyBackground() {
    return (
      <div className="absolute inset-0 overflow-hidden -z-10">
        <svg
          className="absolute w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(124, 58, 237, 0.1)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.1)" />
            </linearGradient>
            <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="100%" stopColor="rgba(124, 58, 237, 0.1)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 0,800 C 0,800 0,266.66666666666663 0,266.66666666666663 C 93.97129186602871,284.4019138755981 187.94258373205741,302.13732071113616 278,285 C 368.0574162679426,267.86267928886384 454.2009569377991,215.8516746411483 560,210 C 665.7990430622009,204.1483253588517 791.2535885167464,244.45645933014354 885,261 C 978.7464114832536,277.54354066985646 1040.7846889952152,270.32296650717706 1129,268 C 1217.2153110047848,265.67703349282294 1331.6076555023924,268.25167703349284 1446,271 C 1446,271 1446,800 1446,800 Z"
            fill="url(#gradient1)"
            animate={{
              d: [
                "M 0,800 C 0,800 0,266.66666666666663 0,266.66666666666663 C 93.97129186602871,284.4019138755981 187.94258373205741,302.13732071113616 278,285 C 368.0574162679426,267.86267928886384 454.2009569377991,215.8516746411483 560,210 C 665.7990430622009,204.1483253588517 791.2535885167464,244.45645933014354 885,261 C 978.7464114832536,277.54354066985646 1040.7846889952152,270.32296650717706 1129,268 C 1217.2153110047848,265.67703349282294 1331.6076555023924,268.25167703349284 1446,271 C 1446,271 1446,800 1446,800 Z",
                "M 0,800 C 0,800 0,266.66666666666663 0,266.66666666666663 C 113.88516746411483,250.1913875598086 227.77033492822966,233.71770334928228 320,233 C 412.22966507177034,232.28229665071772 482.8038277511962,247.32057416267943 568,255 C 653.1961722488038,262.67942583732057 752.0143540669857,262.9999999999999 843,264 C 933.9856459330143,265.0000000000001 1017.1388755980862,266.6794258373206 1110,267 C 1202.8611244019138,267.3205741626794 1305.4305622009568,266.2822966507177 1408,265 C 1408,265 1408,800 1408,800 Z",
                "M 0,800 C 0,800 0,266.66666666666663 0,266.66666666666663 C 93.97129186602871,284.4019138755981 187.94258373205741,302.13732071113616 278,285 C 368.0574162679426,267.86267928886384 454.2009569377991,215.8516746411483 560,210 C 665.7990430622009,204.1483253588517 791.2535885167464,244.45645933014354 885,261 C 978.7464114832536,277.54354066985646 1040.7846889952152,270.32296650717706 1129,268 C 1217.2153110047848,265.67703349282294 1331.6076555023924,268.25167703349284 1446,271 C 1446,271 1446,800 1446,800 Z",
              ],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: 20,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M 0,800 C 0,800 0,533.3333333333334 0,533.3333333333334 C 85.02870813397132,515.7416267942583 170.05741626794262,498.14990138067064 274,507 C 377.9425837320574,515.8500986193294 500.7990430622009,551.1425837320574 606,559 C 711.2009569377991,566.8574162679426 798.7464114832536,547.2799043062201 885,539 C 971.2535885167464,530.7200956937799 1056.2153110047848,533.7377990430622 1147,536 C 1237.7846889952152,538.2622009569378 1334.3923444976077,539.7679425837321 1431,541 C 1431,541 1431,800 1431,800 Z"
            fill="url(#gradient2)"
            animate={{
              d: [
                "M 0,800 C 0,800 0,533.3333333333334 0,533.3333333333334 C 85.02870813397132,515.7416267942583 170.05741626794262,498.14990138067064 274,507 C 377.9425837320574,515.8500986193294 500.7990430622009,551.1425837320574 606,559 C 711.2009569377991,566.8574162679426 798.7464114832536,547.2799043062201 885,539 C 971.2535885167464,530.7200956937799 1056.2153110047848,533.7377990430622 1147,536 C 1237.7846889952152,538.2622009569378 1334.3923444976077,539.7679425837321 1431,541 C 1431,541 1431,800 1431,800 Z",
                "M 0,800 C 0,800 0,533.3333333333334 0,533.3333333333334 C 97.41626794258374,544.6650717703349 194.83253588516748,556.3301435406698 278,553 C 361.1674641148325,549.6698564593302 430.0861244019139,531.3444976076554 528,525 C 625.9138755980861,518.6555023923446 752.8229665071771,524.2918660287081 861,530 C 969.1770334928229,535.7081339712919 1058.6220095693779,541.4880382775119 1147,544 C 1235.3779904306221,546.5119617224881 1322.6889952153111,545.7559808612441 1410,545 C 1410,545 1410,800 1410,800 Z",
                "M 0,800 C 0,800 0,533.3333333333334 0,533.3333333333334 C 85.02870813397132,515.7416267942583 170.05741626794262,498.14990138067064 274,507 C 377.9425837320574,515.8500986193294 500.7990430622009,551.1425837320574 606,559 C 711.2009569377991,566.8574162679426 798.7464114832536,547.2799043062201 885,539 C 971.2535885167464,530.7200956937799 1056.2153110047848,533.7377990430622 1147,536 C 1237.7846889952152,538.2622009569378 1334.3923444976077,539.7679425837321 1431,541 C 1431,541 1431,800 1431,800 Z",
              ],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: 15,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    )
  }

  return (
    <motion.div
      ref={containerRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ opacity }}
    >
      <WavyBackground />

      <motion.div className="relative z-10 text-center px-4" style={{ y }}>
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className="inline-block gradient-text"
            style={{
              x: mousePosition.x * -20,
              y: mousePosition.y * -20,
              rotateX: mousePosition.y * 10,
              rotateY: mousePosition.x * -10,
            }}
          >
            Hi, I am Yashvi Dholakiya
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            x: mousePosition.x * -10,
            y: mousePosition.y * -10,
          }}
        >
          A passionate developer crafting digital experiences with creativity and precision
        </motion.p>

        <motion.div
          className="mt-12 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="glassmorphism p-1 rounded-full w-64 h-64 mx-auto overflow-hidden"
            whileHover={{ scale: 1.05 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.1}
            style={{
              rotateX: mousePosition.y * 20,
              rotateY: mousePosition.x * 20,
            }}
          >
            <Image
              src="https://media-hosting.imagekit.io/63aafe26d12a48c9/Yashvi_ghibli.png?Expires=1837928486&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KHKwlqVOGEwtm4U6dnBeb74868cO7ZxcdsfnXKg~R4517QB-1qsF8JoVjOfhnGe9B4Ffm7fKfO~QiIyrQ8aQNKSX9X4DJzeV1jB1cAAd~1DW8-aMnAnt9NW-loxe01UNVsKs2ouCzVJrjG7qFhu5voVstVOmidkIhXqgHoJJsnJH2AvbuEmp8M7NjTVHYaU26bA2Xh9zPNJESc9IE-YiiAysW3T7OgR8w6mLFe3XL5Eifw4g~JUlJcdqqjV-TYvwN2Fm8pUKdkv4W5zHGN-8V5ACMdDhTdZNB53rmT5IOPdk2fwppiVyJqeP2NtEzxk-M2N-Vd4CY4wziW-sF-ATnw__"
              alt="Yashvi Dholakiya"
              width={300}
              height={300}
              className="rounded-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 blur-xl -z-10" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <ArrowDownIcon className="w-8 h-8 text-muted-foreground" />
      </motion.div>
    </motion.div>
  )
}
