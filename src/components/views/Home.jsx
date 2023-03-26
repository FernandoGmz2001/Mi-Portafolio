import { Projects } from "../common/Projects";
import { Header } from "../common/Header";
import { Navbar } from "../common/Navbar";

import React from "react";
import "../../styles/Home.css";
import AboutMe from "../common/AboutMe";
import Footer from "../common/Footer";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Projects />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default Home;
