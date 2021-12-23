// The main component in React and acts as a container for all other components

import React from "react";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import HomePage from "./layouts/HomePage";
function App() {

  return (
    <div className="page">
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
