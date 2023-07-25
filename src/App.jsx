import React from "react";
import Content from "./Elements/Content";

function App() {
  return (
    <main className="w-[50%] bg-white h-[33.3333%] flex overflow-x-visible rounded-xl">
      <img
        src="./drawers.jpg"
        alt="drawers"
        className="w-[42%] object-cover object-left rounded-l-xl"
      />
      <Content />
    </main>
  );
}

export default App;
