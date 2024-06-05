import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import posts from '../mock/data.json';

const getData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Return the mock data
    return posts;
};

const CategoryList = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const categories = await getData();
          setData(categories);
        } catch (error) {
          console.error("Failed to fetch data", error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <h1 className={styles.title}>Popular Categories</h1>
        <div className={styles.categories}>
          {data.map((item) => (
            <Link
              key={item.id}
              href={`/blog?cat=${item.name.toLowerCase()}`}
              className={`${styles.category} ${styles[item.slug]}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  