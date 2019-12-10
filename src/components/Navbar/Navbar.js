import React from "react";

import "./Navbar.scss";

const Navbar = () => {
  const scrollToContacts = () => {
    document.querySelector(".footer").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar__menu-item">Галерея</div>
      <div className="navbar__menu-item" onClick={scrollToContacts}>
        Контакты
      </div>
      <div className="navbar__menu-item">О нас</div>
      <div className="navbar__menu-item">Календарь</div>
    </nav>
  );
};

export default Navbar;
