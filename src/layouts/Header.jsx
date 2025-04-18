import { motion, useScroll } from "framer-motion";
import LogoAnimation from "./LogoAnimation";
import { useState, useEffect } from "react";
import BurgerBtn from "./components/BurgerBtn";

// Using just default options

const Header = () => {
  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    
  };
  useEffect(() => {
    // Check if the current scroll position is greater than the previous one
    const handleScroll = () => {
      const currentScrollY = scrollY.get();
      setIsHidden(currentScrollY > prevScrollY && currentScrollY > 0);
      setPrevScrollY(currentScrollY);
      setIsOpen(false);
    };
    scrollY.onChange(handleScroll);

    return () => {
      // Clean up the event listener
      scrollY.onChange(null);
    };
  }, [scrollY, prevScrollY]);

  return (
    <>
      <header
        className={` w-[100%] h-[120px] select-none fixed backdrop-blur-[10px] bg-[rgba(0,0,0,0.2)] z-[999] ${
          isHidden ? "-translate-y-full" : ""
        } transition-transform duration-300 ease-in-out`}
      >
        <nav className="myContainer flex justify-start items-center gap-[20px] h-[100%] sm:justify-between md:justify-between">
          <div className="w-[20%] sm:w-[40%] flex justify-start items-center">
            <div className="w-[120px] h-[70px] sm:w-[80px] flex justify-center items-center">
              <LogoAnimation className="w-[100%] h-[100%]" />
            </div>
          </div>
          <ul className="link flex justify-start items-center flex-1 sm:hidden md:hidden">
            <li className="">
              <a href="#Home" className={"text-body-color "}>
                <span className="py-[10px] px-[15px] font-Poppins-R ">
                  HOME
                </span>
              </a>
            </li>
            <li className="">
              <a href="#About" className={"text-body-color  "}>
                <span className="py-[10px] px-[15px] font-Poppins-R ">
                  ABOUT
                </span>
              </a>
            </li>
            <li className="">
              <a href="#Skills" className={"text-body-color  "}>
                <span className="py-[10px] px-[15px] font-Poppins-R ">
                  SKILLS
                </span>
              </a>
            </li>
            <li className="">
              <a href="#Services" className={"text-body-color  "}>
                <span className="py-[10px] px-[10px] font-Poppins-R ">
                  SERVICES
                </span>
              </a>
            </li>
            <li className="">
              <a href="#Works" className={"text-body-color  "}>
                <span className="py-[10px] px-[10px] font-Poppins-R ">
                  WORKS
                </span>
              </a>
            </li>
          </ul>
          <ul className="w-[15%] flex justify-end sm:hidden md:hidden">
            <li className=" py-[5px] px-[10px] border-body-color border-[1px]">
              <a href="#Contact" className={"text-body-color "}>
                <span className=" font-Poppins-R text-body-color">
                  Contact me
                </span>
              </a>
            </li>
          </ul>
          <div className="sm:block border-[1px] relative border-[white] rounded-full lg:hidden xl:hidden 2l:hidden">
            <BurgerBtn onClick={handleClick} />
          </div>
          <div className={`absolute left-0 top-[100%] w-[100%] ${isOpen ? "block" : "hidden"} md:hidden 2l:hidden l:hidden lg:hidden`}>
            <ul
              className='w-[100%] py-[20px] bg-black flex justify-center items-center   flex-col gap-[25px] h-[100%]'
            >
              <li className="py-[10px]">
                <a href="#Home" className={"text-body-color "}>
                  <span className="py-[10px] px-[15px] font-Poppins-R ">
                    HOME
                  </span>
                </a>
              </li>
              <li className="py-[10px]">
                <a href="#About" className={"text-body-color  "}>
                  <span className="py-[10px] px-[15px] font-Poppins-R ">
                    ABOUT
                  </span>
                </a>
              </li>
              <li className="py-[10px]">
                <a href="#Skills" className={"text-body-color  "}>
                  <span className="py-[10px] px-[15px] font-Poppins-R ">
                    SKILLS
                  </span>
                </a>
              </li>
              <li className="py-[10px]">
                <a href="#Services" className={"text-body-color  "}>
                  <span className="py-[10px] px-[10px] font-Poppins-R ">
                    SERVICES
                  </span>
                </a>
              </li>
              <li className="py-[10px]">
                <a href="#Works" className={"text-body-color  "}>
                  <span className="py-[10px] px-[10px] font-Poppins-R ">
                    WORKS
                  </span>
                </a>
              </li>
              <li className="py-[10px]">
                <a href="#Contact" className={"text-body-color "}>
                  <span className=" font-Poppins-R text-body-color">
                    Contact me
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <motion.div
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{ scaleX: scrollYProgress }}
          className="bg-body-color z-[100] h-[2px] "
        />
      </header>
    </>
  );
};
export default Header;
