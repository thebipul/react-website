import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/pages/Footer/footer";
import Intro from "./components/pages/homepage/intro";
import About from "./components/pages/about/about";
import Skills from "./components/pages/skills/skills";
import Experience from "./components/pages/experience/experience";
import Hobbies from "./components/pages/hobbies/hobbies";
import Projects from "./components/pages/projects/projects";
import Particles from "react-tsparticles";

function App() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        autoPlay={true}
        options={{
          fpsLimit: 240,
          backgroundMask: {
            composite: "destination-out",
            cover: {
              color: {
                value: "#fff",
                opacity: 1,
                enable: false,
              },
            },
          },
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              // value: "#FF0000",
            },
            links: {
              blink: false,
              color: {
                value: "#fff",
              },
              consent: false,
              distance: 150,
              enable: false,
              frequency: 1,
              opacity: 0.4,
              shadow: {
                blur: 5,
                color: {
                  value: "#00ff00",
                },
              },
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <Router>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <Navbar />

        <Intro />
        <Routes>
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/experiences" component={Experience} />
          <Route exact path="/hobbies" component={Hobbies} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Footer} />
        </Routes>
        <About />

        <Skills />

        <Experience />

        <Hobbies />

        <Projects />

        <Footer />
      </Router>
    </>
  );
}

export default App;
