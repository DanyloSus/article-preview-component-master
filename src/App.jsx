import React from "react";
import Content from "./Elements/Content";

function App() {
  return (
    <main className="md:w-[50%] w-[83.3333%] bg-white md:min-h-[33.3333%] min-h-[75%] max-h-[75%] flex overflow-x-visible rounded-xl md:flex-row flex-col">
      <img
        src="./drawers.jpg"
        alt="drawers"
        className="md:w-[42%] w-full object-cover md:object-left md:rounded-l-xl rounded-t-xl h-52 object-top md:h-auto"
      />
      <Content />
    </main>
  );
}

export default App;
