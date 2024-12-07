'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { FloatingPanel } from './FloatingPanel'

const panels = [
  {
    image: '/placeholder.svg?height=400&width=400&text=Sports',
    title: 'スポーツ',
    description: '大学対抗戦や個人競技での活躍'
  },
  {
    image: '/placeholder.svg?height=400&width=400&text=Culture',
    title: '文化',
    description: '芸術、音楽、演劇などの文化活動'
  },
  {
    image: '/placeholder.svg?height=400&width=400&text=Technology',
    title: 'テクノロジー',
    description: '最新技術を駆使した学生プロジェクト'
  },
  {
    image: '/placeholder.svg?height=400&width=400&text=Volunteer',
    title: 'ボランティア',
    description: '地域貢献や社会奉仕活動'
  },
  {
    image: '/placeholder.svg?height=400&width=400&text=Research',
    title: '研究',
    description: '革新的な学術研究や発見'
  }
]

export function FloatingPanelsSection() {
  const containerRef = useRef(null)
  const controls = useAnimation()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile);
  }, [])

  useEffect(() => {
    const initialAnimation = async () => {
      await controls.start((i) => ({
        y: ['-100vh', '0vh'],
        x: isMobile ? '0%' : [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
        transition: { delay: i * 0.2, type: 'spring', stiffness: 50, damping: 20 },
      }))

      setInterval(() => {
        controls.start((i) => ({
          y: ['100vh', '0vh'],
          x: isMobile ? '0%' : [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
          transition: { delay: i * 0.2, type: 'spring', stiffness: 50, damping: 20 },
        }))
      }, 10000)
    }

    initialAnimation()
  }, [controls, isMobile])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e) => {
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height

      container.style.setProperty('--mouse-x', `${x}`)
      container.style.setProperty('--mouse-y', `${y}`)
    }

    container.addEventListener('mousemove', handleMouseMove)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
    };
  }, [])

  return (
    (<div
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900"
      style={{ 
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}>
      {panels.map((panel, index) => {
        const size = isMobile ? 150 : Math.random() * (300 - 200) + 200
        const rotateY = isMobile ? 0 : (Math.random() - 0.5) * 30
        const rotateX = isMobile ? 0 : (Math.random() - 0.5) * 30
        return (
          (<motion.div
            key={panel.title}
            className="absolute"
            custom={index}
            animate={controls}
            style={{
              left: isMobile ? '50%' : `${Math.random() * 100}%`,
              top: isMobile ? `${(index + 1) * 20}%` : `${Math.random() * 100}%`,
              x: '-50%',
              y: '-50%',
              zIndex: panels.length - index,
            }}>
            <FloatingPanel {...panel} size={size} rotateY={rotateY} rotateX={rotateX} />
          </motion.div>)
        );
      })}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          className="text-3xl md:text-5xl lg:text-7xl font-bold text-white text-center z-10 px-4">
          学生たちの<br />輝く瞬間
        </h1>
      </div>
    </div>)
  );
}

