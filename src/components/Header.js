// Header.js
import React, { useState } from "react";
import "./Header.css"; // 正しいCSSファイルをインポート

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${menuOpen ? "open" : ""}`}>
      <div className="header-title">
        <h1>My Portfolio(仮)</h1> {/* サイトのタイトル */}
      </div>
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#hero" className="nav-link" onClick={toggleMenu}>
          Hero
        </a>
        <a href="#about" className="nav-link" onClick={toggleMenu}>
          About
        </a>
        <a href="#footer" className="nav-link" onClick={toggleMenu}>
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header; // 1回だけdefault export
