// src/components/layout/cardList/CardList.jsx
"use client";
import React, { useState, useEffect } from "react";
import styles from "./cardList.module.css";
import Card from "../card/Card";
import postsData from "../../../mock/data.json";
import Link from "next/link";

const CardList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(postsData.posts);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {data.map((item) => (
          <Link key={item.id} href={`/blog/${item.slug}`}>
            <a><Card item={item} /></a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardList;
