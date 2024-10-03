



import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use loadAll, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use loadFull, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use loadSlim, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use loadBasic, install the "@tsparticles/basic" package too.

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#FFFFFF",
        },
      },
      fpsLimit: 130,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "repulse",  // Changed hover mode to "repulse" for circular movement
          },
        },
        modes: {
          repulse: {
            distance: 150,  // Increased the repulse distance for a wider effect
            duration: 1,    // Shortened the duration to create faster movement away
          },
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 100,
          },
        },
      },
      particles: {
        color: {
          value: "#FF0000",
        },
        links: {
          color: "#FF0000",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 0.35,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 4,  // Increased the movement speed of particles
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 900,
          },
          value: 300,  // Increased the number of particles
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2 },  // Reduced the size of the particles
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />; 
};

export default ParticlesComponent;
