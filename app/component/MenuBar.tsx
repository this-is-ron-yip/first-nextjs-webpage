import React from "react";
import styles from "./MenuBar.module.css";

const MenuBar = () => {
  const menuItems = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "Experiences", href: "/Experiences" },
    { id: 3, title: "Projects", href: "/Projects" },
    { id: 4, title: "Contacts", href: "/Contacts" },
  ];

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.ul}>
          {menuItems.map((menuItem) => (
            <li className={styles.li} key={menuItem.id}>
              <a className={styles.a} href={menuItem.href}>
                {menuItem.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MenuBar;
