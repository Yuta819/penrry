"use client";

import React, { useState } from "react";
import ArticleList from "../components/ArticleList";
import SearchBar from "../components/SearchBar";
import AnnouncementBox from "../components/AnnouncementBox";
import styles from "./page.module.css";

const mockData = [
  {
    id: 1,
    name: "バスケットボール部",
    university: "東京大学",
    description: "全国大会優勝経験を持つ強豪クラブです。",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "写真サークル",
    university: "早稲田大学",
    description: "風景写真やポートレートを撮影するサークルです。",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "軽音部",
    university: "慶應義塾大学",
    description: "音楽好きが集まるサークルで、毎年ライブを開催しています。",
    image: "https://via.placeholder.com/150",
  },
];

export default function Home() {
  const [filteredData, setFilteredData] = useState(mockData);

  const handleSearch = (query) => {
    const filtered = mockData.filter(
      (club) => club.name.includes(query) || club.university.includes(query)
    );
    setFilteredData(filtered);
  };

  return (
    <div className={styles.page}>
      <h1>全国大学部活・サークル記事一覧</h1>
      <AnnouncementBox announcements={[]} />
      <SearchBar onSearch={handleSearch} />
      <ArticleList articles={filteredData} />
    </div>
  );
}
