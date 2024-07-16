import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TitleAbout from "../layouts/components/TitleAbout";
import AboutSvg from '../assets/images/about.svg';
import {
  faFacebook,
  faGithub,
  faInstagramSquare,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <TitleAbout title="About"  />
      <section className="h-[100vh] relative my-[50px]" id="About">
        <div className="w-[50%] sm:hidden h-[50%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute flex justify-center items-center z-[-1] opacity-[0.2]">
          <img src={AboutSvg} alt="" srcSet="" loading="lazy"/>
        </div>
        <div className="myContainer h-[100%] flex justify-center items-center gap-[20px] ">
          <div className="maintitle font-Boldstorm   text-body-color text-center flex justify-center items-center gap-[20px] flex-col  backdrop-blur-[10px] bg-[rgba(255,255,255,0.05)] py-[50px]">
            <h1 className=" font-KOLAK text-[30px]">Hi my names is nassim</h1>
            <h1 className="text-[20px] font-Poppins-E p-0 w-[50%] sm:w-[100%]">
              i’m 27 yo I’m a UI/UX & Graphic Designer & Frontend developer i
              have my baccalaureate in science field and a technician degree in
              multimedia development i master web developing languages and
              graphic design family adobe and i’m way to excited to get deeper
              and professional in this field.
            </h1>
            <div className="w-[100%] flex justify-center gap-[20px]">
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
      </section>
    </>
  );
};
export default About;
