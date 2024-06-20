
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
  return (
    <>
   
    <div className="md:flex sm:flex justify-center items-center sm:w-[100%]  sm:h-[100vh] md:w-[100%]  md:h-[100vh] lg:hidden xl:hidden xxl:hidden">
          <h1 className=" text-body-color font-Poppins-R text-[20px] text-center">mobile & tablet coming soon <br/> &lt;/&gt; </h1>

    </div>
 
    <div className="md:hidden sm:hidden ">
      {/* <RouterProvider router={routerDom} /> */}
      <Header />
      <Home />   
      <About />
      <Skills />
      <Services/>
      <Works/>
      <Contact/>
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
          ".logo"
        ]}
        hasBlendMode={true}
        outerStyle={{
          border: "1px solid black",
          mixBlendMode: "difference",
        }}
      />
      </div>
    </>
  );
}

export default App;
