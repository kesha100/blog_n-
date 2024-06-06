import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "../components/layout/featured/Featured";
import CategoryList from "../components/layout/categoryList/CategoryList";
import CardList from "../components/layout/cardList/CardList";
import Menu from "../components/layout/menu/Menu";

const Home = () =>{

  return (
    <div className={styles.container}>
      <h2>Welcome to Blog</h2>
    
    </div>
  );
}

export default Home;