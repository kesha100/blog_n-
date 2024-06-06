// src/app/posts/[id]/page.jsx

import { useParams } from 'next/navigation';
import posts from '../../../mock/data.json';
import styles from './Post.module.css';

const getData = async (id) => {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 100));
  return posts.posts.find((post) => post.id === parseInt(id));
};

export default async function Post() {
  const { id } = useParams();
  const data = await getData(id);

  // If the post is not found, return a simple message
  if (!data) {
    return <p>Post not found.</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.date}>{data.date}</p>
      <p className={styles.author}>By {data.author}</p>
      <div className={styles.description}>{data.description}</div>
    </div>
  );
}
