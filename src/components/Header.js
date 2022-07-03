import React from "react";
import starImage from "./../Img/star.jpg";
// import { Link } from "react-router-dom";


function Header(){
  return (
    <React.Fragment>
    <h1 className="animate__animated animate__pulse">Tarot</h1>
    <img src={starImage} alt="Bright single star" /> 
    </React.Fragment>
  );
}

export default Header;