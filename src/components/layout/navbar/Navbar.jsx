import React from "react";
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from "next/link";
// import ThemeToggle from "../themeToggle/ThemeToggle";
// import AuthLinks from "../authLinks/AuthLinks";
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}></div>
                <Image src="/facebook.png" alt="facebook" width={24} height={24}/>
                <Image src="/instagram.png" alt="instagram" width={24} height={24}/>
                <Image src="/tiktok.png" alt="tiktok" width={24} height={24}/>
                <Image src="/youtube.png" alt="youtube" width={24} height={24}/>

            <div className={styles.logo}></div>
            <div className={styles.links}></div>
    
            <nav>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </nav>




        </div>
    );
};
export default Navbar;