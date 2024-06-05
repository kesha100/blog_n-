// src/components/CardList.jsx
"use client";

import React, { useState, useEffect } from "react";
import styles from "./cardList.module.css";
import posts from "../mock/data.json";
import Card from "../card/Card";

const CardList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      // Simulate network latency
      await new Promise((resolve) => setTimeout(resolve, 100));
      setData(posts);
    };

    fetchData();
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
