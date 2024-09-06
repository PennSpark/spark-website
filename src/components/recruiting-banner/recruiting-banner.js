import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";

const RecruitingBanner = () => {
  const [visible, setVisible] = useState(true);
  return (
    <CSSTransition
      in={visible}
      timeout={{
        enter: 0,
        exit: 500,
      }}
      unmountOnExit
      classNames="animate"
    >
      <div className="banner-container">
        <a className="banner-link" href="join">
          <h4 className="banner-text">
            {/* Apps are open, come join us! {":)"} */}
            Application deadline extended to 9/7 at 5PM EST!
          </h4>
          <i
            className="banner-icon"
            onClick={(e) => {
              setVisible(false);
              e.preventDefault();
            }}
          >
            &#10006;
          </i>
        </a>
      </div>
    </CSSTransition>
  );
};

export default RecruitingBanner;
