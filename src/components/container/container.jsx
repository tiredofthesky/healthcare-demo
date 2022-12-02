import React from "react";
import Aside from "../aside_panel/aside";
import Header from "../header/header";
import Cards from "../cards/cards";
import "./container.scss";

function Container() {
  return (
    <div className="container">
      
      <Aside />
      <Header/>
      <Cards/>
    </div>
    
  );
}

export default Container;
