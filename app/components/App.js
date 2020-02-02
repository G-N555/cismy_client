import React from "react";
import News from "./News/News";
import Genre from "./Genre/Genre";
import Area from "./Area/Area";
import SearchBar from "./SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">Header</header>
      <News />
      <SearchBar />
      <Area />
      <Genre />
    </div>
  );
}

export default App;
