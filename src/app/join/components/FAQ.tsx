"use client";

import { useState } from "react";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "Do I need to be interested in both tech & design to join?",
    answer:
      "Nope! As long as you're curious about one of the fields, we welcome you to apply. We don't expect developers to design or designers to develop, although the option is open if you're interested in both!",
  },
  {
    id: 2,
    question: "Which track should I apply for: Blue or Red?",
    answer:
      "Choose the track that best matches what you want to focus on this year. If you're more excited about building, pick the dev track. If you're drawn to visuals, research, and UX, pick the design track.",
  },
  {
    id: 3,
    question: "What makes a strong applicant?",
    answer:
      "We look for curiosity, follow-through, and a willingness to learn. Prior experience helps, but clear effort in your portfolio or projects matters much more than a long resume.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="faq-container">
      {faqItems.map((item, index) => {
        const isOpen = item.id === openId;

        return (
          <div
            key={item.id}
            className={`faq-item ${
              isOpen ? "faq-item-expanded" : "faq-item-collapsed"
            }`}
            onClick={() => setOpenId(isOpen ? null : item.id)}
          >
            <div className="faq-item-header">
              <div className="faq-question-block">
                <span className="faq-number">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                <span className="faq-question">{item.question}</span>
              </div>

              <button
                type="button"
                className="faq-toggle"
                aria-label={isOpen ? "Collapse" : "Expand"}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenId(isOpen ? null : item.id);
                }}
              >
                {/* + icon when closed, X icon when open */}
                {isOpen ? (
                  <svg
                    className="faq-toggle-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                  >
                    <line
                      x1="3"
                      y1="3"
                      x2="42"
                      y2="42"
                      stroke="black"
                      strokeWidth="2.5"
                    />
                    <line
                      x1="42"
                      y1="3"
                      x2="3"
                      y2="42"
                      stroke="black"
                      strokeWidth="2.5"
                    />
                  </svg>
                ) : (
                  <svg
                    className="faq-toggle-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                  >
                    <line
                      x1="23.7529"
                      y1="0"
                      x2="23.7529"
                      y2="45"
                      stroke="black"
                      strokeWidth="2.5"
                    />
                    <line
                      x1="45"
                      y1="23.7539"
                      x2="0"
                      y2="23.7539"
                      stroke="black"
                      strokeWidth="2.5"
                    />
                  </svg>
                )}
              </button>
            </div>

            <p
              className={`faq-answer ${
                isOpen ? "faq-answer-visible" : "faq-answer-hidden"
              }`}
            >
              {item.answer}
            </p>
          </div>
        );
      })}
    </div>
  );
}
