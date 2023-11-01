import React from "react";
import MenuBar from "../component/MenuBar";

const Contacts = () => {
  const menuItems = [
    { id: 1, title: "Linkedin", href: "/" },
    { id: 2, title: "Github", href: "/Experiences" },
    { id: 3, title: "Instagram", href: "/Projects" },
  ];
  return (
    <>
      <MenuBar />
      <div>Contacts</div>
    </>
  );
};

export default Contacts;
