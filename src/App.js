import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
//import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main className="text-gray-400 bg-blue-900 body-font">
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Contact /> 
    </main>
  );
}
