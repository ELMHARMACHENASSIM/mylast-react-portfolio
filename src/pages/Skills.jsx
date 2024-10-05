import TitleAbout from "../layouts/components/TitleAbout";
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
import SkillsSvg from "../assets/images/skills.svg";
const Skills = () => {
  return (
    <>
      <TitleAbout title="Skills" />
      <section className="relative my-[50px] h-[100vh] sm:h-[100%] md:h-[100%] lg:h-[100%] select-none" id="Skills">
        <div className="md:w-[100%] w-[50%] sm:hidden md:block  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute flex justify-center items-center z-[-1] opacity-[0.5]">
          <img src={SkillsSvg} alt="" srcSet="" loading="lazy" />
        </div>
        <div className="myContainer h-[100%] py-[50px] flex justify-center items-center">
          <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.05)] p-[50px] sm:p-[0px]">
            <div className="">
              <h1 className="text-start sm:text-center text-[40px] font-Boldstorm text-body-color py-[20px]">
                Languages
              </h1>
              <div className="flex justify-start sm:flex-col md:flex-wrap lg:flex-wrap items-center w-[100%] gap-[50px]">
                <div className="flex gap-[15px] border-body-color border-[1px]  text-body-color justify-center items-center  p-[10px] w-[150px]">
                  <img src={Html} className="w-[40px]" alt="" loading="lazy" />
                  <span>Html5</span>
                </div>
                <div className="flex gap-[15px] border-body-color border-[1px]  text-body-color justify-center items-center  p-[10px] w-[150px]">
                  <img src={Css} className="w-[40px]" alt="" loading="lazy" />
                  <span>Css3</span>
                </div>
                <div className="flex gap-[15px] border-body-color border-[1px]  text-body-color justify-center items-center  p-[10px] w-[150px]">
                  <img src={Js} className="w-[40px]" alt="" loading="lazy" />
                  <span>Javascript</span>
                </div>
                <div className="flex gap-[15px] border-body-color border-[1px]  text-body-color justify-center items-center  p-[10px] w-[150px]">
                  <img src={Php} className="w-[40px]" alt="" loading="lazy" />
                  <span>Php</span>
                </div>
              </div>
            </div>
            <div className="">
              <h1 className="text-start sm:text-center text-[40px] font-Boldstorm text-body-color py-[20px]">
                fremworks and library
              </h1>
              <div className="flex justify-start sm:flex-col md:flex-wrap lg:flex-wrap items-center w-[100%] gap-[50px]">
                <div className="flex  gap-[15px] justify-center items-center border-body-color border-[1px]  p-[10px] w-[150px] text-body-color">
                  <img
                    src={ReactJs}
                    className="w-[40px]"
                    alt=""
                    loading="lazy"
                  />{" "}
                  <span>ReactJs</span>
                </div>
                <div className="flex  gap-[15px] justify-center items-center border-body-color border-[1px]  p-[10px] w-[150px] text-body-color">
                  <img
                    src={Tailwind}
                    className="w-[40px]"
                    alt=""
                    loading="lazy"
                  />{" "}
                  <span>Tailwind</span>
                </div>
                <div className="flex  gap-[15px] justify-center items-center border-body-color border-[1px]  p-[10px] w-[150px] text-body-color">
                  <img
                    src={Bootstrap}
                    className="w-[40px]"
                    alt=""
                    loading="lazy"
                  />{" "}
                  <span>Bootstrap</span>
                </div>
                <div className="flex  gap-[15px] justify-center items-center border-body-color border-[1px]  p-[10px] w-[150px] text-body-color">
                  <img src={Sass} className="w-[40px]" alt="" loading="lazy" />{" "}
                  <span>Sass</span>
                </div>
                <div className="flex  gap-[15px] justify-center items-center border-body-color border-[1px]  p-[10px] w-[150px] text-body-color">
                  <img
                    src={Laravel}
                    className="w-[40px]"
                    alt=""
                    loading="lazy"
                  />{" "}
                  <span>laravel</span>
                </div>
              </div>
            </div>
            <div className="">
              <h1 className="text-start sm:text-center text-[40px] font-Boldstorm text-body-color py-[20px]">
                Tools
              </h1>
              <div className="flex justify-start sm:flex-col md:flex-wrap lg:flex-wrap items-center w-[100%] gap-[50px]">
                <div className="flex  gap-[15px] justify-center items-center border-body-color border-[1px]  p-[10px] w-[150px] text-body-color">
                  <img src={Git} className="w-[40px]" alt="" loading="lazy" />{" "}
                  <span>Git</span>
                </div>
                <div className="flex  gap-[15px] justify-center items-center border-body-color border-[1px]  p-[10px] w-[150px] text-body-color">
                  <img
                    src={Github}
                    className="w-[40px]"
                    alt=""
                    loading="lazy"
                  />{" "}
                  <span>GitHub</span>
                </div>
              </div>
            </div>
            <div className="">
              <h1 className="text-start sm:text-center text-[40px] font-Boldstorm text-body-color py-[20px]">
                software
              </h1>
              <div className="flex justify-start sm:flex-col md:flex-wrap lg:flex-wrap items-center w-[100%] gap-[50px] sm:py-[20px]">
                <div className="flex  gap-[15px] justify-center items-center border-body-color border-[1px]  p-[10px] w-[150px] text-body-color">
                  <img
                    src={Vscode}
                    className="w-[40px]"
                    alt=""
                    loading="lazy"
                  />{" "}
                  <span>VScode</span>
                </div>
                <div className="flex  gap-[15px] justify-center items-center border-body-color border-[1px]  p-[10px] w-[150px] text-body-color">
                  <img src={Figma} className="w-[40px]" alt="" loading="lazy" />{" "}
                  <span>Figma</span>
                </div>
                <div className="flex  gap-[15px] justify-center items-center border-body-color border-[1px]  p-[10px] w-[150px] text-body-color">
                  <img
                    src={Photoshop}
                    className="w-[40px]"
                    alt=""
                    loading="lazy"
                  />{" "}
                  <span>Photoshop</span>
                </div>
                <div className="flex  gap-[15px] justify-center items-center border-body-color border-[1px]  p-[10px] w-[150px] text-body-color">
                  <img
                    src={Illustrator}
                    className="w-[40px]"
                    alt=""
                    loading="lazy"
                  />{" "}
                  <span>illustrator</span>
                </div>
                <div className="flex  gap-[15px] justify-center items-center border-body-color border-[1px]  p-[10px] w-[150px] text-body-color">
                  <img src={Xd} className="w-[40px]" alt="" loading="lazy" />{" "}
                  <span>Adobe Xd</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
