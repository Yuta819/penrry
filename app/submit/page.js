"use client";

import React from "react";

export default function Submit() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>部活・サークル情報を投稿する</h1>
      <p>
        全国の大学部活・サークルを盛り上げるために、ぜひ情報を投稿してください！
      </p>
      <p>以下のフォームに記入し、あなたの部活やサークルを紹介してください。</p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSe8GL9XGLOIZElbr4UUHNijcttR2x1VDOGjZRAhMLmHj3GTRQ/viewform?usp=sf_link"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          color: "#fff",
          backgroundColor: "#0070f3",
          textDecoration: "none",
          borderRadius: "4px",
        }}
      >
        Googleフォームで投稿する
      </a>
    </div>
  );
}
