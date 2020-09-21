import React from "react"
import Particles from "react-tsparticles"

// Inline-css seems to be the only way I could get
// the welcome div overtop of tsparticles
const welcomeStyle = {
  width: "500px",
  height: "350px",
  position: "absolute",
  backgroundColor: "white",
  opacity: "0.5",
}

const tsparticlesStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
}

const Hero = () => {
  return (
    <section className="hero">
      <div id="welcome" style={welcomeStyle}>
        Welcome
      </div>
      <Particles
        style={tsparticlesStyle}
        params={{
          backgroundMode: {
            enable: true,
            zIndex: 0,
          },
          background: {
            color: {
              value: "31189F",
            },
          },
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#feb633",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#f2f7a0",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.48927153781200905,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 10,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#2b2c2c",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "top",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 962.0472365193136,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </section>
  )
}

export default Hero
