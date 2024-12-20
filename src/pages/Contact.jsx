import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TitleAbout from "../layouts/components/TitleAbout";
import {
  faFacebook,
  faGithub,
  faInstagramSquare,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [inputvalueName, setInputvalueName] = useState("");
  const [inputvalueEmail, setInputvalueEmail] = useState("");
  const [inputvaluePhone, setInputvaluePhone] = useState("");
  const [inputvalueMessage, setInputvalueMessage] = useState("");
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    if (
      !inputvalueName ||
      !inputvalueEmail ||
      !inputvaluePhone ||
      !inputvalueMessage
    ) {
      return;
    }

    setLoading(true);

    emailjs
      .sendForm("service_qo02ruh", "template_yze6qwg", form.current, {
        publicKey: "cnRFcxpXd_AkVRBFX",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setInputvalueName("");
          setInputvalueEmail("");
          setInputvaluePhone("");
          setInputvalueMessage("");
          setLoading(false);
          alert("message send");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <TitleAbout title="Contact Me" />
      <section className="relative my-[50px] h-[100vh] select-none" id="Contact">
        <div className="myContainer h-[100%] flex justify-center flex-col gap-[30px] items-center">
          <h1 className="text-body-color text-[30px] font-KOLAK">CONTACT ME</h1>
          <form
            action=""
            className=" flex w-[60%] sm:w-[100%] justify-center items-center flex-col gap-[20px] font-Poppins-E"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="w-[100%] flex justify-center gap-[20px] sm:flex-col">
              <div className="w-[40%] sm:w-[100%]">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Username"
                  className="w-[100%] h-[60px] bg-transparent border-body-color border-[1px] placeholder-body-color text-body-color focus:border-body-color"
                  value={inputvalueName}
                  onChange={(e) => {
                    setInputvalueName(e.target.value);
                  }}
                />
              </div>
              <div className="w-[60%] sm:w-[100%]">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="w-[100%] h-[60px] bg-transparent border-body-color border-[1px] placeholder-body-color text-body-color focus:border-body-color"
                  value={inputvalueEmail}
                  onChange={(e) => {
                    setInputvalueEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-[100%] flex justify-center gap-[20px]">
              <div className="w-[100%]">
                <input
                  type="number"
                  name="user_phone"
                  placeholder="Your phone"
                  className="w-[100%] h-[60px]  bg-transparent border-body-color border-[1px] placeholder-body-color text-body-color focus:border-body-color"
                  value={inputvaluePhone}
                  onChange={(e) => {
                    setInputvaluePhone(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-[100%] flex justify-center gap-[20px]">
              <div className="w-[100%]">
                <textarea
                  name="message"
                  id=""
                  placeholder="Message"
                  className="w-[100%]  h-[120px] bg-transparent border-body-color border-[1px] placeholder-body-color text-body-color focus:border-body-color"
                  value={inputvalueMessage}
                  onChange={(e) => {
                    setInputvalueMessage(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="bg-transparent border-body-color border-[1px] text-body-color px-[15px] py-[10px]"
                disabled={loading}
              >
                {loading ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 text-dark animate-spin  fill-body-color"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "Send Message"
                )}{" "}
              </button>
            </div>
          </form>
          <span className="text-body-color font-KOLAK">OR</span>
          <div className="w-[100%] flex justify-center gap-[20px]">
       
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
      </section>
    </>
  );
};
export default Contact;
