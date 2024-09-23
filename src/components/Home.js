import React from "react";
import './Home.css';
function Home() {
  return (
    <div className="mainDiv">
      <div className="promptfield">
          <input type="text" placeholder="enter your prompt"></input>
          <button type="button" class="btn"><img src="..\assets\arrow-down.png"></img></button>
      </div>
    </div>
  );
}

export default Home;
