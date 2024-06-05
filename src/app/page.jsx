import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "./components/layout/featured/Featured";
import CategoryList from "./components/layout/categoryList/CategoryList";
import CardList from "./components/layout/cardList/CardList";
import Menu from "./components/layout/menu/Menu";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page}/>
        <Menu />
      </div>
    </div>
  );
}