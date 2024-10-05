import {
  faFacebook,
  faGithub,
  faInstagramSquare,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowDownLong, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import scrollBar from "../assets/images/scroll.svg";
import MoveCyrcle from "../layouts/MoveCyrcle";
import pdfCv from "/public/portfolio-dev.pdf";
const Home = () => {
  return (
    <>
      <section className="relative py-[120px] h-[100vh] select-none" id="Home">
        <div
          className="myContainer h-[100%]  flex justify-center items-center "
          id="Home"
        >
          <div className=" relative w-[100%]  font-Boldstorm text-center leading-[90px] sm:leading-[50px] md:leading-[60px] lg:leading-[70px]  ">
            <MoveCyrcle />
            <h1 className="font-Sign text-body-color text-[100px] sm:text-[40px] md:text-[50px] lg:text-[80px]">
              Hello I&lsquo;m
            </h1>
            <h1 className="text-[120px] sm:text-[40px] md:text-[70px] lg:text-[80px] text-body-color p-0 font-KOLAK">
              GRAPHIC DESIGNER
            </h1>
            <h1 className="text-[120px] sm:text-[40px] md:text-[70px] lg:text-[80px] text-body-color p-0 font-KOLAK">
              UI UX DESIGNER{" "}
            </h1>
            <h1 className="text-[120px] sm:text-[40px] md:text-[70px] lg:text-[80px] text-body-color p-0 font-KOLAK">
              FRONTEND{" "}
            </h1>
            <h1 className="text-[120px] sm:text-[40px] md:text-[70px] lg:text-[80px] text-body-color p-0 font-KOLAK">
              DEVELOPER
            </h1>
            <div className="cv flex w-[100%] justify-between sm:flex-col items-center sm:gap-[50px] ">
              <a
                href={pdfCv}
                download="my-cv.pdf"
                className="border-body-color border-[1px]  py-[10px] px-[20px] select-none h-[50px] gap-[10px] flex justify-center items-center "
              >
                <FontAwesomeIcon
                  icon={faArrowDownLong}
                  className="text-body-color"
                />
                <p className="font-Poppins-R pointer-events-none text-body-color">
                  Download CV
                </p>
              </a>
              <div className="flex gap-[20px] ">
                <a href="https://www.facebook.com/elmharmachenassim/" rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-[20px] icons text-body-color"
                  />
                </a>
                <a href="https://github.com/ELMHARMACHENASSIM" rel="noopener noreferrer" target="_blank">
                  
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-[20px] icons text-body-color"
                  />
                </a>
                <a href="https://www.linkedin.com/in/nassim-el-m-harmache-167a61201/" rel="noopener noreferrer" target="_blank">
                 
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-[20px] icons text-body-color"
                  />
                </a>
                <a href="https://www.instagram.com/elmharmachenassim/" rel="noopener noreferrer" target="_blank">
                  
                  <FontAwesomeIcon
                    icon={faInstagramSquare}
                    className="text-[20px] icons text-body-color"
                  />
                </a>
                <a href="" rel="noopener noreferrer" target="_blank">
                  {" "}
                  <FontAwesomeIcon
                    icon={faSquareXTwitter}
                    className="text-[20px] icons text-body-color"
                  />
                </a>{" "}
              
              </div>
            </div>
          </div>
          <div className="w-[100%] absolute bottom-[50px] left-[0] flex justify-center items-center">
            <a href="#About">
              <img
                src={scrollBar}
                alt=""
                className="w-[40px] h-[40px]"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
