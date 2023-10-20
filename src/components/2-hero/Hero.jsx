import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./me.jpg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Software Engineer, Web Devoloper
        </motion.h1>

        <p className="sub-title">
        Hello, I am Youssef Montaser. I am a front-end website developer.
         I have been training for three years in website development to gain a lot of experience.
          This is a personal website in React.
        </p>

        <div className="all-icons flex">
          <a className="icon icon-instagram" href="https://www.instagram.com/y0usef.m0ntaser/" target="_blank" ></a>
          <a className="icon icon-github" href="https://github.com/yuosef0" target="_blank" ></a>
          <a className="icon icon-linkedin" href="https://www.linkedin.com/in/youssef-montaser-83b6a6242/" target="_blank"></a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
