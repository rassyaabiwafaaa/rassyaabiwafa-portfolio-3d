import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Typhography */}
      <div className={`${styles.paddingX} absolute z-10 md:z-0 inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#375eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Rassya Abiwafa</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I am Front End Developer and Video Editor</p>
        </div>
      </div>
      {/* 3D Object */}
      <ComputersCanvas />

      {/* Gift Object */}
      <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start">
            <motion.div
              animate={{
                y: [0, 35, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
