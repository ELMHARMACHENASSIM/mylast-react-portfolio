import "./style.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import PropTypes from "prop-types"; // Import PropTypes

const TitleAbout = (props) => {

  function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 1000,
      stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });
    ParallaxText.propTypes = {
      children: PropTypes.node.isRequired, // Validate children prop
      baseVelocity: PropTypes.number.isRequired, // Validate baseVelocity prop
    };
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 2500);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div className="parallax font-KOLAK ">
        <motion.div className="scroller text-body-color flex items-center " style={{ x }}>
          <span className="strok">{children} </span>
          <span className="">{children} </span>
          <span className="strok">{children} </span>
          <span className="">{children} </span>
          <span className="strok">{children} </span>
          <span className="">{children} </span>
          <span className="strok">{children} </span>
          <span className="">{children} </span>
          <span className="strok">{children} </span>
          <span className="">{children} </span>
          <span className="strok">{children} </span>
          <span className="">{children} </span>
          <span className="strok">{children} </span>
          <span className="">{children} </span>
          <span className="strok">{children} </span>
          <span className="">{children} </span>
          <span className="strok">{children} </span>
          <span className="">{children} </span>
          <span className="strok">{children} </span>
          <span className="">{children} </span>
          <span className="strok">{children} </span>
          <span className="">{children} </span>
          <span className="strok">{children} </span>
          <span className="">{children} </span>
          <span className="strok">{children} </span>
          <span className="">{children} </span>
          <span className="strok">{children} </span>
          <span className="">{children} </span>
          <span className="strok">{children} </span>
          <span className="">{children} </span>
          <span className="strok">{children} </span>
          <span className="">{children} </span>
          <span className="strok">{children} </span>
          <span className="">{children} </span>
          <span className="strok">{children} </span>
          <span className="">{children} </span>
          <span className="strok">{children} </span>
          <span className="">{children} </span>
          <span className="strok">{children} </span>
          <span className="">{children} </span>
          <span className="strok">{children} </span>
          <span className="">{children} </span>
          <span className="strok">{children} </span>
          <span className="">{children} </span>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <section className="skew-y-[10deg] py-[50px]">
        <ParallaxText className="font-Boldstorm" baseVelocity={-5}>
          {props.title}&nbsp;&nbsp;{" "}
        </ParallaxText>
        <ParallaxText className="" baseVelocity={5}>
          {props.title}&nbsp; &nbsp;{" "}
        </ParallaxText>
      </section>
    </>
  );
};

export default TitleAbout;
