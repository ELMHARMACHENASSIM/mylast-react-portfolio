import AnimatedCursor from "react-animated-cursor";
import "./index.css";
// import routerDom from "./layouts/Index";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import Loading from "./layouts/components/Loading";

gsap.registerPlugin(
  useGSAP,
  Flip,
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  Draggable,
  MotionPathPlugin,
  EaselPlugin,
  PixiPlugin,
  TextPlugin,
  RoughEase,
  ExpoScaleEase,
  SlowMo,
  CustomEase
);
function App() {
  const [isMobile, setIsMobile] = useState(false);
   const [loading, setLoading] = useState(!localStorage.getItem('loadingShown'));

  useEffect(() => {
    // Simulate data fetching by setting a timeout for loading
    const timeout = setTimeout(() => {
      setLoading(false); 
      localStorage.setItem('loadingShown', 'true');// Stop loading after a delay
    }, 10000); // Adjust this duration as needed
    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the width for mobile
    };

    // Set initial value
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {/* <RouterProvider router={routerDom} /> */}
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Home />
          <About />
          <Skills />
          <Services />
          <Works />
          <Contact />
          {!isMobile && (
            <AnimatedCursor
              innerSize={10}
              outerSize={30}
              color="253, 247, 228"
              outerAlpha={1}
              innerScale={0.7}
              outerScale={3}
              clickables={[
                "a",
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                "label[for]",
                "select",
                "textarea",
                "button",
                ".link",
                "h1",
                ".icons",
                ".cv",
                ".logo",
              ]}
              hasBlendMode={true}
              outerStyle={{
                border: "1px solid black",
                mixBlendMode: "difference",
              }}
            />
          )}
        </>
      )}
    </>
  );
}

export default App;
