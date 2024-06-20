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
      <div
        className="myContainer   h-[100vh] flex justify-center items-center"
        id="Home"
      >
        <div className=" relative w-[100%] font-Boldstorm text-center leading-[90px]  ">
        
         <MoveCyrcle/>
          <h1 className="font-Sign text-body-color text-[100px]">
            Hello I&lsquo;m
          </h1>
          <h1 className="text-[120px] text-body-color p-0 font-KOLAK">GRAPHIC DESIGNER</h1>
          <h1 className="text-[120px] text-body-color p-0 font-KOLAK">UI UX DESIGNER </h1>
          <h1 className="text-[120px] text-body-color p-0 font-KOLAK">
            FRONTEND <br /> DEVELOPER
          </h1>
          <div className="cv flex w-[100%] justify-between items-center ">
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
    </>
  );
};
export default Home;
