//トップセクションを作成

import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      id="hero"
      style={{ height: "100vh", textAlign: "center", paddingTop: "50px" }}
    >
      <h1>けもみみ</h1>
      <p>ここに自己紹介を書きます。</p>
    </section>
  );
};

export default Hero;
