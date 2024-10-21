"use client";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { NavLink } from "./NavLink";
import styles from "./Navbar.module.css";

const navbarItems = [
  {
    title: "ABOUT US",
    link: "/about_us",
  },
  {
    title: "DESTINATION",
    link: "/destination",
  },
  {
    title: "NASA COLLABORATION",
    link: "/nasa_collaboration",
  },
];

export const Navbar = () => {
  const currentPath = usePathname();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <a href="/">
          <img src="/shared/logo.svg" alt="" /> GALACTICA
        </a>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          {navbarItems.map((navElement, index) => (
            <NavLink
              key={index}
              title={navElement.title}
              link={navElement.link}
              number={String(index + 1).padStart(2, "0")}
              isActive={navElement.link === currentPath}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};
