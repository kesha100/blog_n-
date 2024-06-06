"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Menu from "../../../components/layout/menu/Menu";
import styles from "./singlePage.module.css";
import Image from 'next/image';
import posts from '../../../mock/data.json';

const getData = async (id) => {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 100));
  const post = posts.posts.find((post) => post.id === parseInt(id, 10));
  console.log("Fetched post (server-side):", post);  // Server-side log
  return post;
};

const Post = ({ post }) => {
  const router = useRouter();

  useEffect(() => {
    console.log("Fetched post (client-side):", post);  // Client-side log
  }, [post]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className={styles.container}>
      <Menu />
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post?.title}</h1>
          <div className={styles.user}>
            {post?.image && (
              <div className={styles.userImageContainer}>
                <Image src={post.image} alt={post.title} width={150} height={150} className={styles.avatar} />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{post?.author}</span>
              <span className={styles.date}>{post?.date}</span>
            </div>
          </div>
        </div>
        {post?.image && (
          <div className={styles.imageContainer}>
            <Image src={post.image} alt={post.title} width={800} height={300} className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            {post?.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const paths = posts.posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: true };
};

