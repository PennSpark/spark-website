import * as React from "react";
import FadeIn from 'react-fade-in';

import "./style.css";
import "../../styles/global.css";
import "../../styles/animations.css";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";

// import Fall21 from "./fall21"
// import Fall22 from "./fall22"
// import Fall23 from "./fall23"
// import Fall24 from "./fall24"
// import Spring21 from "./spring21"
// import Spring22 from "./spring22"
// import Spring23 from "./spring23"
// import Spring24 from "./spring24"

// const seasons = [
//   { id: "f24", name: "Fall 2024", component: Fall24 },
//   { id: "s24", name: "Spring 2024", component: Spring24 },
//   { id: "f23", name: "Fall 2023", component: Fall23 },
//   { id: "s23", name: "Spring 2023", component: Spring23 },
//   { id: "f22", name: "Fall 2022", component : Fall22 },
//   { id: "s22", name: "Spring 2022", component: Spring22 },
//   { id: "f21", name: "Fall 2021", component: Fall21 },
//   { id: "s21", name: "Spring 2021", component: Spring21 },
// ];

const ProjectsPage = () => {
    return (
        <Layout title="Projects | Spark 💡">
            <Navbar />
            <FadeIn>
                <div id="header-section">
                    <h1>
                        PROJECTS
                    </h1>
                </div>
            </FadeIn>
        </Layout>
    );
};

export default ProjectsPage;