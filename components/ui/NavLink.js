import Link from "next/link";
import classNames from "classnames";
import styles from "./Navbar.module.css";

export const NavLink = ({ title, link, isActive, number }) => {
  return (
    <li
      className={classNames(styles.navbarLinks, {
        [styles.isLinkActive]: isActive,
      })}
    >
      <Link href={link}>
        <b>{number}</b> {title}
      </Link>
    </li>
  );
};
