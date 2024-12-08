"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface FloatingPanelProps {
  image: string; // 画像URL（public配下、または許可された外部URL）
  title: string; // タイトルテキスト
  description: string; // 説明テキスト
  size: number; // パネルの一辺のサイズ(px)
  rotateY: number; // 初期のY軸回転角度
  rotateX: number; // 初期のX軸回転角度
}

export function FloatingPanel({
  image,
  title,
  description,
  size,
  rotateY,
  rotateX,
}: FloatingPanelProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transformStyle: "preserve-3d",
      }}
      initial={{ rotateY, rotateX }}
      animate={{
        rotateY: isHovered ? 0 : rotateY,
        rotateX: isHovered ? 0 : rotateX,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div style={{ backfaceVisibility: "hidden" }}>
        <Image
          src={image}
          alt={title}
          fill // layout="fill"の代替
          className="rounded-lg object-cover"
        />
      </motion.div>
      <motion.div
        style={{
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
        }}
      >
        <div className="text-white text-center p-4">
          <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
          <p className="text-xs md:text-sm">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
