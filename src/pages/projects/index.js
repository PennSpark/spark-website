import * as React from "react";
import FadeIn from 'react-fade-in';

import "./style.css";
import "../../styles/global.css";
import "../../styles/animations.css";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";

import headerImg from "/public/static/projects/project-home-header.png";

// import Fall21 from "./fall21"
// import Fall22 from "./fall22"
// import Fall23 from "./fall23"
// import Fall24 from "./fall24"
// import Spring21 from "./spring21"
// import Spring22 from "./spring22"
// import Spring23 from "./spring23"
import Spring24 from "./spring24/spring24.js";

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

const seasons = [
    { id: "s24", name: "Spring 2024", component: Spring24 },
];

const ProjectsPage = () => {
    return (
        <Layout title="Projects | Spark 💡">
            <div className="projects-page">
                <Navbar />

                <FadeIn>
                    <div className="projects-hero" style={{ "--header-img": `url(${headerImg})` }}>
                        <h1 className="projects-hero__title">Project Showcases</h1>
                    </div>
                </FadeIn>

                {seasons.map(({ name, component: SeasonComp }) => {
                    if (!SeasonComp) return null;
                    const id = name.toLowerCase().replace(/\s+/g, "-");

                    return (
                        <section key={name} id={id} className="season-section">
                            <h2>{name}</h2>
                            <hr />
                            <SeasonComp />
                        </section>
                    );
                })}
            </div>
        </Layout>
    );
};

export default ProjectsPage;