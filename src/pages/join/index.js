import * as React from "react";

import "./style.css";
import "../../styles/global.css";
import "../../styles/animations.css";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";

import JoinUs from "../../components/sections/join-us/join-us";

const JoinPage = () => {
  return (
    <Layout title="Join | Spark 💡">
      <Navbar />
      {/* <div className="hit-counters">
        <img src="https://hitwebcounter.com/counter/counter.php?page=7926321&style=0007&nbdigits=5&type=ip&initCount=0" />
      </div> */}
      <JoinUs />
      {/* <div
        style={{
          backgroundColor: "#EAD2DD",
          textAlign: "center",
          height: "30vh",
          minHeight: "200px",
        }}
      >
        <img
          src={CoverImg}
          style={{ height: "100%", maxWidth: "100%", objectFit: "cover" }}
        />
      </div> */}



    </Layout>
  );
};

export default JoinPage;
