import React from "react";
import "./Card.css";
const Card = ({ children }) => {
  return <div className="cardBase">{children}</div>;
};

export default Card;
