import * as React from "react";
import { useState, useEffect } from "react";
import FadeIn from "react-fade-in";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";

const TestPage = () => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/getNotionData");
        const result = await response.json();
        if (result.success) {
          setPages(result.data);
        }
      } catch (err) {
        console.error("Error fetching Notion data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout title="About | Spark 💡">
      <Navbar />
      <FadeIn>
        <div id="header-section">
          <h1>
            about <span id="header-spark-text">spark</span>
          </h1>
        </div>

        <div className="content-section">
          <p className="larger-text">Hello, this is a test page made by Kevin!</p>

          {loading ? (
            <p>Loading Notion data...</p>
          ) : (
            <ul>
              {pages.map((page) => (
                <li key={page.id}>
                  <strong>{page.name}</strong> — {page.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </FadeIn>
    </Layout>
  );
};

export default TestPage;
