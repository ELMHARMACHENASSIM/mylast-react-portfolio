import { NavLink } from "react-router-dom";
import Logo from '../assets/images/logo.svg';

// Using just default options

const Header = () => {
// Using just default options

  return (
    <>
      <header className="w-[100%] h-[70px]">
        <nav className="myContainer flex justify-between items-center gap-[20px] h-[100%]">
          <ul className="link flex justify-start  gap-[20px] items-center max-w-[40%] ">
            <li className="py-[10px] px-[10px]">
              <NavLink to={"/home"} className={"text-black "}>
                <span className="py-[10px] px-[15px] font-Poppins-R ">HOME</span>
              </NavLink>
            </li>
            <li className="py-[10px] px-[10px]">
              <NavLink to={"/about"} className={"text-black  "}>
                <span className="py-[10px] px-[15px] font-Poppins-R ">ABOUT</span>
              </NavLink>
            </li>
            <li className="py-[10px] px-[10px]">
              <NavLink to={"/skills"} className={"text-black  "}>
                <span className="py-[10px] px-[15px] font-Poppins-R ">SKILLS</span>
              </NavLink>
            </li>
            
          </ul>
          <div className="w-[15%] flex justify-center items-center">
               <div className="logo  w-[80px] h-[80px]">
            <img src={Logo} alt="logo nassim" className="w-[100%] h-[100%]" title="logo"/>
          </div>
          </div>
       
          <ul className="link flex justify-end  gap-[20px] items-center max-w-[40%] ">
            <li className="py-[10px] px-[15px]">
              <NavLink to={"/services"} className={"text-black  "}>
                <span className="py-[10px] px-[10px] font-Poppins-R ">SERVICES</span>
              </NavLink>
            </li>
            <li className="py-[10px] px-[15px]">
              <NavLink to={"/works"} className={"text-black  "}>
                <span className="py-[10px] px-[10px] font-Poppins-R ">WORKS</span>
              </NavLink>
            </li>
            <li className="py-[10px] px-[15px]">
              <NavLink to={"/contact"} className={"text-black"}>
                <span className="py-[10px] px-[10px] font-Poppins-R ">CONTACT</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
