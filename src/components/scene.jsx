// Wayne
// Import usages
import { useState, useEffect } from "react";
import World from "./world.jsx";

// Initialise Globe Scene for ThreeJS
// Export default
const ThreeGlobeScene = (windowSize, color) => {
  const [world, setWorld] = useState(null);
  const [click, setClick] = useState(false);
  const cleanUp = (world) => {
    if (world) {
      console.log(`Before ${world.container.childNodes.length}`);
      if (world.container.childNodes.length > 0) {
        world.container.removeChild(world.renderer.domElement);
      }
      console.log(`After ${world.container.childNodes.length}`);
    }
  };
  useEffect(() => {
    const initGlobeScene = () => {
      console.log("Start Init");
      // Three.js code to set up your 3D scene
      const globe = new World(windowSize, color);
      setWorld(globe);
      console.log(color);
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
      console.log(`Scene.jsx: ${windowSize}`);
    }
  }, [windowSize]);

  useEffect(() => {
    if (world) {
      world.updateColor(color);
      console.log(`Scene.jsx: ${color}`);
    }
  }, [color]);

  useEffect(() => {
    // Animation Loop
    const renderGlobeScene = () => {
      requestAnimationFrame(renderGlobeScene);
      if (world) {
        world.renderWorld();
      }
    };
    renderGlobeScene();
    // Clean up Three.js resources when component unmounts
    return () => {
      cleanUp(world);
    };
  }, [world]);

  // Handle Click
  useEffect(() => {
    const handleMouseEnter = () => {
      if (world && world.earth.earthGroup){
        console.log("Scanned")
        const found = world.positionLock(windowSize);
      }
    };
    document.getElementById("three-container").addEventListener("mouseenter", handleMouseEnter);
    return () => {
      // Dispose remove event listeners
      document.getElementById("three-container").removeEventListener("mouseenter", handleMouseEnter);
    };
  });
};
export default ThreeGlobeScene;