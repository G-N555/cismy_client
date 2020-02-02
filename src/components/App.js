import React from "react";
import News from "./News/News";
import Genre from "./Genre/Genre";
import Area from "./Area/Area";
import SearchBar from "./SearchBar/SearchBar";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.App}>
      <header className="App-header">Header</header>
      <News />
      {/* <SearchBar />
      <Area />
      <Genre /> */}
    </div>
  );
}

export default App;
