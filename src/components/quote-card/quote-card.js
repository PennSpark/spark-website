import React from "react";
import "./style.css";

const QuoteCard = ({ name, quote }) => {
  return (
    <div className="quote-card-wrapper">
      <h2>{name}</h2>
      <p>
        <i>{quote}</i>
      </p>
    </div>
  );
};

export default QuoteCard;
