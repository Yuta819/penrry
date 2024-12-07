"use client";

import React, { useEffect, useState } from "react";

export default function ClubDetailsPage({ params }) {
  const [htmlContent, setHtmlContent] = useState(""); // HTML内容を保存する状態
  const [id, setId] = useState(null); // パラメータIDを保存する状態

  // 非同期的に params を解決して ID を取得
  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    };

    resolveParams();
  }, [params]);

  // ID に基づいて HTML を取得
  useEffect(() => {
    if (!id) return;

    const fetchHtml = async () => {
      try {
        // publicディレクトリからHTMLを取得
        const response = await fetch(`/club/${id}/details.html`);
        if (!response.ok) {
          throw new Error(`Failed to load HTML for club ID ${id}`);
        }
        const text = await response.text();
        setHtmlContent(text);
      } catch (error) {
        console.error("Failed to fetch HTML:", error);
      }
    };

    fetchHtml();
  }, [id]);

  // HTMLが取得されるまで読み込み中を表示
  if (!id || !htmlContent) {
    return <p>読み込み中...</p>;
  }

  // 取得したHTMLを描画
  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
      }}
    />
  );
}
