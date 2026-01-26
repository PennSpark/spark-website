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
    <div className="flex w-full max-w-[1401px] flex-col gap-6">
      {faqItems.map((item, index) => {
        const isOpen = item.id === openId;

        return (
          <div
            key={item.id}
            onClick={() => setOpenId(isOpen ? null : item.id)}
            className={`
              w-full cursor-pointer rounded-[30px] border border-black
              px-12 py-8 box-border
              flex flex-col justify-start
              transition-colors duration-200
              select-none
              ${isOpen ? "bg-[#FFD552]" : "bg-white"}
            `}
          >
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <h2 className='text-left'>
                  {String(index + 1).padStart(2, "0")}. {item.question}
                </h2>
              </div>

              <div
                className='w-8 h-8 flex justify-center items-center'
                aria-label={isOpen ? "Collapse" : "Expand"}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenId(isOpen ? null : item.id);
                }}
              >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    className={isOpen ? "rotate-135 transition-transform duration-200" : "rotate-0 transition-transform duration-200"}
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
              </div>
            </div>

            {/* Answer with simple expand/collapse animation */}
            <p
              className={`
                text-left pr-9
                transition-all duration-200
                ${isOpen ? "mt-4 max-h-40 opacity-100" : "mt-0 max-h-0 opacity-0 overflow-hidden"}
              `}
            >
              {item.answer}
            </p>
          </div>
        );
      })}
    </div>
  );
}
