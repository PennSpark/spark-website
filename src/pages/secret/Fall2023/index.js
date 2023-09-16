import React from "react";
import QuoteCard from "../../../components/quote-card/quote-card";
import "./style.css";

const QuotesPage = () => {
  return (
    <div className="quote-page-container">
      <h1 className="quote-page-heading">Fall 2023 Quotes!</h1>
      <div className="quote-card-container">
        <QuoteCard
          name="Kashyap Chaturvedula"
          quote="you belong in a museum"
        ></QuoteCard>
        <QuoteCard name="Kashyap Chaturvedula" quote="test quote"></QuoteCard>
      </div>
    </div>
  );
};

export default QuotesPage;
