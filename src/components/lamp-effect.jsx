"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useWindowDimensions from "../hooks/window-dimensions";

const LampEffect = ({ color, children }) => {
  const lampRef = useRef(null);
  const isLampInView = useInView(lampRef, { margin: "-50%", once: true });

  const { width } = useWindowDimensions();

  const [lampWidth, setLampWidth] = useState(width >= 1024 ? 65 : 20);
  const [lampExpandDiff, setLampExpandDiff] = useState(width > 1024 ? 10 : 30);

  useEffect(() => {
    if (width >= 1024) {
      setLampWidth(65);
      setLampExpandDiff(10);
    } else {
      setLampWidth(20);
      setLampExpandDiff(30);
    }
  }, [width]);

  return (
    <div className="relative flex w-full" ref={lampRef}>
      <div className="absolute bottom-0 left-0 z-10 h-40 w-full bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]"></div>
      <motion.div
        initial={{
          backgroundImage: `conic-gradient(from 90deg at ${
            lampWidth + lampExpandDiff
          }% 0%, ${color}50 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)`,
        }}
        animate={
          isLampInView
            ? {
                backgroundImage: `conic-gradient(from 90deg at ${lampWidth}% 0%, ${color} 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)`,
              }
            : {}
        }
        transition={{
          duration: 0.7,
        }}
        className="h-96 flex-1 bg-[0px_0px] [background-size:100%_100%]"
      ></motion.div>
      <motion.div
        initial={{
          backgroundImage: `conic-gradient(from 90deg at ${
            lampWidth + lampExpandDiff
          }% 0%, ${color}50 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)`,
        }}
        animate={
          isLampInView
            ? {
                backgroundImage: `conic-gradient(from 90deg at ${lampWidth}% 0%, ${color} 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)`,
              }
            : {}
        }
        transition={{
          duration: 0.7,
        }}
        className="h-96 flex-1 bg-[0px_0px] [background-size:100%_100%] [transform:scale(-1,1)]"
      ></motion.div>
      <div className="absolute top-20 z-20 flex h-fit w-full justify-center">
        <motion.h1
          initial={{
            y: 50,
          }}
          animate={isLampInView ? { y: 0 } : {}}
          transition={{
            duration: 0.7,
          }}
          className="pb-4 text-center text-[40px] font-medium leading-[0.9] tracking-[-0.01em] text-[unset] [-webkit-box-decoration-break:clone] [-webkit-text-fill-color:transparent] [background:radial-gradient(40%_70%_at_50%_100%,rgba(255,255,255,0.4),rgb(255,255,255))_text] lg:text-[80px]"
        >
          {children}
        </motion.h1>
      </div>
    </div>
  );
};

export default LampEffect;
