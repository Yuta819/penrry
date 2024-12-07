'use client';
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function FloatingPanel({
  image,
  title,
  description,
  size,
  rotateY,
  rotateX
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    (<motion.div
      className="relative cursor-pointer"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transformStyle: 'preserve-3d',
      }}
      initial={{ rotateY, rotateX }}
      animate={{ 
        rotateY: isHovered ? 0 : rotateY,
        rotateX: isHovered ? 0 : rotateX,
      }}
      transition={{ type: 'spring', stiffness: 100 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}>
      <motion.div
        className="absolute inset-0 rounded-lg shadow-lg"
        style={{ backfaceVisibility: 'hidden' }}>
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg" />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-blue-500 rounded-lg flex items-center justify-center"
        style={{ 
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
        }}>
        <div className="text-white text-center p-4">
          <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
          <p className="text-xs md:text-sm">{description}</p>
        </div>
      </motion.div>
    </motion.div>)
  );
}

