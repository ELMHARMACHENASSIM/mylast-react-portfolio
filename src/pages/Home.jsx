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

const Home = () => {
  return (
    <>
    <section className="relative py-[120px] h-[100vh]" id="Home">
      <div
        className="myContainer h-[100%]  flex justify-center items-center "
        id="Home"
      >
        <div className=" relative w-[100%] sm:h-[100%] font-Boldstorm text-center leading-[90px] sm:leading-[50px]  ">
         <MoveCyrcle/>
          <h1 className="font-Sign text-body-color text-[100px] sm:text-[40px]">
            Hello I&lsquo;m
          </h1>
          <h1 className="text-[120px] sm:text-[40px] text-body-color p-0 font-KOLAK">GRAPHIC DESIGNER</h1>
          <h1 className="text-[120px] sm:text-[40px] text-body-color p-0 font-KOLAK">UI UX DESIGNER </h1>
          <h1 className="text-[120px] sm:text-[40px] text-body-color p-0 font-KOLAK">FRONTEND </h1>
          <h1 className="text-[120px] sm:text-[40px] text-body-color p-0 font-KOLAK">DEVELOPER</h1>
          <div className="cv flex w-[100%] justify-between sm:flex-col items-center sm:gap-[50px]">
            <div className="border-body-color border-[1px]  py-[10px] px-[20px] h-[50px] gap-[10px] flex justify-center items-center pointer-events-none">
              <FontAwesomeIcon
                icon={faArrowDownLong}
                className="text-body-color"
              />
              <p className="font-Poppins-R pointer-events-none text-body-color">
                Download CV
              </p>
            </div>
            <div className="flex gap-[20px] ">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-[20px] icons text-body-color"
              />
              <FontAwesomeIcon
                icon={faGithub}
                className="text-[20px] icons text-body-color"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-[20px] icons text-body-color"
              />
              <FontAwesomeIcon
                icon={faInstagramSquare}
                className="text-[20px] icons text-body-color"
              />
              <FontAwesomeIcon
                icon={faSquareXTwitter}
                className="text-[20px] icons text-body-color"
              />
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-[20px] icons text-body-color"
              />
            </div>
          </div>
        </div>
        <div className="w-[100%] absolute bottom-[50px] left-[0] flex justify-center items-center">
          <a href="#About">
            <img src={scrollBar} alt="" className="w-[40px] h-[40px]" loading="lazy"/>
          </a>
        </div>
      </div>
      </section>
    </>
  );
};
export default Home;
