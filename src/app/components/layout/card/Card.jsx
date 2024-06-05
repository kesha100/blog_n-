// src/components/Card.jsx
import React from "react";
import Link from "next/link";
import styles from "./card.module.css";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{item.date.substring(0, 10)}</span>
          <span className={styles.author}> - {item.author}</span>
        </div>
        <Link href={`/posts/${item.id}`}>
          <h1 className={styles.title}>{item.title}</h1>
        </Link>
        <p className={styles.description}>{item.description}</p>
      </div>
    </div>
  );
};

export default Card;
