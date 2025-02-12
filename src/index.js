import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // スタイルをインポート
import App from "./App"; // メインのAppコンポーネントをインポート

// ReactアプリをHTMLの#root要素にマウント
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
