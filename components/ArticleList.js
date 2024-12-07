import React from "react";
import Link from "next/link";

export default function ArticleList({ articles }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {articles.map((article) => (
        <Link href={`/club/${article.id}`} key={article.id} passHref>
          <div
            style={{
              display: "flex",
              gap: "20px",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
            }}
          >
            <img
              src={article.image}
              alt={article.name}
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
            <div style={{ flex: 1 }}>
              <h2 style={{ margin: "0 0 10px", color: "#333" }}>
                {article.name}
              </h2>
              <p style={{ margin: "0 0 10px", color: "#555" }}>
                {article.description}
              </p>
              <span style={{ color: "#0070f3", textDecoration: "none" }}>
                詳細を見る &rarr;
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
