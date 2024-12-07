// Announcement Box Component
import React from "react";

export default function AnnouncementBox({ announcements }) {
  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "20px",
      }}
    >
      <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>お知らせ</h2>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {announcements.length > 0 ? (
          announcements.map((announcement, index) => (
            <li
              key={index}
              style={{
                marginBottom: "8px",
                borderBottom: "1px solid #eee",
                paddingBottom: "8px",
              }}
            >
              <strong>{announcement.title}</strong>
              <p style={{ margin: "5px 0", fontSize: "14px" }}>
                {announcement.content}
              </p>
            </li>
          ))
        ) : (
          <p>現在お知らせはありません。</p>
        )}
      </ul>
    </div>
  );
}
