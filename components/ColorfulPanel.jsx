import Image from 'next/image'
import { motion } from 'framer-motion'

export function ColorfulPanel({
  title,
  category,
  image,
  color
}) {
  return (
    (<motion.div
      className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}>
      <Image src={image} alt={title} layout="fill" objectFit="cover" className="z-0" />
      <div
        className="absolute inset-0 z-10 opacity-70 transition-opacity duration-300 hover:opacity-90"
        style={{ backgroundColor: color }} />
      <div
        className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm">{category}</p>
      </div>
    </motion.div>)
  );
}

