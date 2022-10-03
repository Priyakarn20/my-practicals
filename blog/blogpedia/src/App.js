import React from "react";
import './App.css';
import Posts from "./components/posts/posts";

function App() {
  return (
    <div className="main-container">
     <h1 className="main-heading">
        Blogpedia
      </h1>
      
    <Posts />

    </div>
  );
}

export default App;
