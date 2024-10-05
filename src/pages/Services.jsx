import TitleAbout from "../layouts/components/TitleAbout";
import ServicesSvg from "../assets/images/serviices.svg";
import Html from "../assets/svg/html.svg";
import Css from "../assets/svg/css3.svg";
import Js from "../assets/svg/js.svg";
import Php from "../assets/svg/php.svg";
import ReactJs from "../assets/svg/react.svg";
import Tailwind from "../assets/svg/tailwind.svg";
import Sass from "../assets/svg/sass.svg";
import Bootstrap from "../assets/svg/bootstrap.svg";
import Laravel from "../assets/svg/laravel.svg";
import Git from "../assets/svg/git.svg";
import Github from "../assets/svg/github.svg";
import Vscode from "../assets/svg/vscode.svg";
import Illustrator from "../assets/svg/illustrator.svg";
import Photoshop from "../assets/svg/photoshop.svg";
import Figma from "../assets/svg/figma.svg";
import Xd from "../assets/svg/xd.svg";

import { Carousel } from "flowbite-react";

const Services = () => {
  return (
    <>
      <TitleAbout title="Services" />
      <section
        className="relative my-[50px] h-[100vh] select-none"
        id="Services"
      >
        <div className="md:w-[100%] w-[50%] sm:hidden md:block  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute flex justify-center items-center z-[-1] opacity-[0.5]">
          <img src={ServicesSvg} alt="" srcSet="" loading="lazy" />
        </div>
        <div className="myContainer h-[100%] flex justify-center items-center ">
          <div className="w-[100%] h-[70%] sm:h-[100%]">
            <Carousel pauseOnHover>
              <div className=" text-body-color w-[100%] h-[100%] backdrop-blur-[10px] bg-[rgba(255,255,255,0.05)]  flex justify-center items-center flex-col gap-[20px]">
                <h1 className="text-[40px] sm:text-[30px]">Graphic designe</h1>
                <p className="w-[50%] sm:w-[60%] text-center">
                  Graphic design is a craft where professionals create visual
                  content to communicate messages. By applying visual hierarchy
                  and page layout techniques, designers use typography and
                  pictures to meet users specific needs and focus on the logic
                  of displaying elements in interactive designs to optimize the
                  user experience.
                </p>
                <div className="flex justify-center items-center flex-col gap-[10px]">
                  <h4>Tools</h4>
                  <div className="flex gap-[20px]">
                    <img
                      src={Illustrator}
                      alt=""
                      className="w-[30px]"
                      loading="lazy"
                    />
                    <img
                      src={Photoshop}
                      alt=""
                      className="w-[30px]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className=" text-body-color w-[100%] h-[100%] backdrop-blur-[10px] bg-[rgba(255,255,255,0.05)]  flex justify-center items-center flex-col gap-[20px]">
                <h1 className="text-[40px] sm:text-[30px]">Frontend Website</h1>
                <p className="w-[50%]  sm:w-[60%] text-center">
                  Front-end development is the development of visual and
                  interactive elements of a website that users interact with
                  directly. It&apos;s a combination of HTML, CSS and JavaScript,
                  where HTML provides the structure, CSS the styling and layout,
                  and JavaScript the dynamic behaviour and interactivity.
                </p>
                <div className="flex justify-center items-center flex-col gap-[10px]">
                  <h4>Tools</h4>
                  <div className="flex gap-[20px] sm:flex-wrap sm:justify-center sm:p-[10px]">
                    <img
                      src={Html}
                      alt=""
                      className="w-[30px]"
                      loading="lazy"
                    />
                    <img src={Css} alt="" className="w-[30px]" loading="lazy" />
                    <img src={Js} alt="" className="w-[30px]" loading="lazy" />
                    <img
                      src={Sass}
                      alt=""
                      className="w-[30px]"
                      loading="lazy"
                    />
                    <img
                      src={Tailwind}
                      alt=""
                      className="w-[30px]"
                      loading="lazy"
                    />
                    <img
                      src={Bootstrap}
                      alt=""
                      className="w-[30px]"
                      loading="lazy"
                    />
                    <img
                      src={ReactJs}
                      alt=""
                      className="w-[30px]"
                      loading="lazy"
                    />
                    <img src={Git} alt="" className="w-[30px]" loading="lazy" />
                    <img
                      src={Github}
                      alt=""
                      className="w-[30px]"
                      loading="lazy"
                    />
                    <img
                      src={Vscode}
                      alt=""
                      className="w-[30px]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className=" text-body-color w-[100%] h-[100%] backdrop-blur-[10px] bg-[rgba(255,255,255,0.05)]  flex justify-center items-center flex-col gap-[20px]">
                <h1 className="text-[40px] sm:text-[30px]">UI/UX designe</h1>
                <p className="w-[50%] sm:w-[60%] text-center">
                  Get started. In digital design, user interface (UI) refers to
                  the interactivity, look, and feel of a product screen or web
                  page, while user experience (UX) covers a user&apos;s overall
                  experience with the product or website.
                </p>
                <div className="flex justify-center items-center flex-col gap-[10px]">
                  <h4>Tools</h4>
                  <div className="flex gap-[20px]">
                    <img
                      src={Figma}
                      alt=""
                      className="w-[30px]"
                      loading="lazy"
                    />
                    <img src={Xd} alt="" className="w-[30px]" loading="lazy" />
                  </div>
                </div>
              </div>
              <div className=" text-body-color w-[100%] h-[100%] backdrop-blur-[10px] bg-[rgba(255,255,255,0.05)]  flex justify-center items-center flex-col gap-[20px]">
                <h1 className="text-[40px] sm:text-[30px]">Backend Website</h1>
                <p className="w-[50%] text-center">
                  The backend (or “server side”) is the portion of the website
                  you don&apos;t see. It&apos;s responsible for storing and
                  organizing data, and ensuring everything on the client-side
                  actually works. The backend communicates with the frontend,
                  sending and receiving information to be displayed as a web
                  page
                </p>
                <div className="flex justify-center items-center flex-col gap-[10px]">
                  <h4>Tools</h4>
                  <div className="flex gap-[20px]">
                    <img src={Php} alt="" className="w-[30px]" loading="lazy" />
                    <img
                      src={Laravel}
                      alt=""
                      className="w-[30px]"
                      loading="lazy"
                    />
                    <img src={Git} alt="" className="w-[30px]" loading="lazy" />
                    <img
                      src={Github}
                      alt=""
                      className="w-[30px]"
                      loading="lazy"
                    />
                    <img
                      src={Vscode}
                      alt=""
                      className="w-[30px]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;
