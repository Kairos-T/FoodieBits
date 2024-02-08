// Wayne
// Import usages
import { useEffect, useRef, useState } from "react";
import World from "./world.jsx";

// Initialise Globe Scene for ThreeJS
// Export default
const ThreeGlobeScene = (windowSize, color) => {
  const canvasRef = useRef(null);
  const [world, setWorld] = useState(null);
  const cleanUp = (world) => {
    if (world) {
      if (world.container.childNodes.length > 0) {
        world.container.removeChild(world.renderer.domElement);
      }
    }
  };
  useEffect(() => {
    const initGlobeScene = () => {
      // Three.js code to set up your 3D scene
      const globe = new World(windowSize, color);
      setWorld(globe);
      globe.updateColor(color);
    };
    initGlobeScene();
    return () => {
      cleanUp(world);
    };
  }, []);

  useEffect(() => {
    // Three.js code to set up your 3D scene
    if (world) {
      world.updateSize(windowSize);
    }
  }, [windowSize]);

  useEffect(() => {
    if (world) {
      world.updateColor(color);
    }
  }, [color]);

  useEffect(() => {
    // Animation Loop
    const renderGlobeScene = () => {
      requestAnimationFrame(renderGlobeScene);
      if (world) {
        world.renderWorld();
        window.world = world;
      }
    };
    renderGlobeScene();
    // Clean up Three.js resources when component unmounts
    return () => {
      cleanUp(world);
    };
  }, [world]);
};
export default ThreeGlobeScene;