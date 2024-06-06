// src/components/layout/cardList/CardList.jsx
"use client";

import React, { useState, useEffect } from "react";
import styles from "./blog.module.css";
import Card from "../../components/layout/card/Card";
import postsData from "../../mock/data.json"; // Adjust the path to your JSON file

const CardList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate fetching data from JSON file
    setData(postsData.posts);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
