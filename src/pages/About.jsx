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


const About = () => {
  return (
    <>
      <TitleAbout title="About"  />
      <section className="relative my-[50px] h-[100vh] sm:h-[100%] md:h-[100%] lg:h-[100%] select-none" id="About">
        <div className="md:w-[100%] w-[50%] sm:hidden md:block top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute flex justify-center items-center z-[-1] opacity-[0.5]">
          <img src={AboutSvg} alt="" srcSet="" loading="lazy"/>
        </div>
        <div className="myContainer h-[100%] flex justify-center items-center gap-[20px] ">
          <div className="maintitle font-Boldstorm   text-body-color text-center flex justify-center items-center gap-[20px] flex-col  backdrop-blur-[10px] bg-[rgba(255,255,255,0.05)] py-[50px]">
            <h1 className=" font-KOLAK text-[30px]">Hi my name is nassim</h1>
            <h1 className="text-[20px] font-Poppins-E p-0 w-[50%] sm:w-[100%]">
              i’m 27 yo I’m a UI/UX & Graphic Designer & Frontend developer i
              have my baccalaureate in science field and a technician degree in
              multimedia development i master web developing languages and
              graphic design family adobe and i’m way to excited to get deeper
              and professional in this field.
            </h1>
      
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
      </section>
    </>
  );
};
export default About;
