import React from "react";
import { Link } from "react-router-dom";
import '../index.css'

const Animal = ({ animal }) => {
  ///////////////////////////
  // Style Objects
  ///////////////////////////
  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };

  return (
    <div style={div}>
      <div className="animals">
      <Link to={`/zoo/${animal.id}`}>
        <h1>{animal?.country}</h1>
      </Link>
      <h2>{animal?.animal}</h2>
      </div>
    </div>
  );
};

export default Animal; 

