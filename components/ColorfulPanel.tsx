// components/ColorfulPanel.tsx

"use client";

import Image from "next/image";
import { motion, HTMLMotionProps, MotionProps } from "framer-motion";
import React from "react";

// ColorfulPanelPropsインターフェースを定義
interface ColorfulPanelProps extends MotionProps {
  title: string;
  category: string;
  image: string;
  color: string;
  className?: string;
}

export function ColorfulPanel({
  title,
  category,
  image,
  color,
  className, // classNameを受け取る
  style, // styleを受け取る
  ...rest // その他のプロパティを受け取る
}: ColorfulPanelProps) {
  return (
    <motion.div
      style={{ position: "relative", ...style }}
      className={`relative aspect-square overflow-hidden rounded-lg cursor-pointer ${
        className || ""
      }`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      {...rest}
      // @ts-ignore
    >
      <Image src={image} alt={title} fill className="z-0 object-cover" />
      <div
        className="absolute inset-0 z-10 opacity-70 transition-opacity duration-300 hover:opacity-90"
        style={{ backgroundColor: color }}
      />
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm">{category}</p>
      </div>
    </motion.div>
  );
}
