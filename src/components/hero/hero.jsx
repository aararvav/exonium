"use client";


import ChevronRight from "@/lib/svgs/chevron-right";
import DashboardMock from "./dashboard-mock";
import { motion } from "framer-motion";
import Link from "next/link";

const easeDownVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <div
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.3), hsla(0,0%,100%,0))",
      }}
    >
      <div className="container-lg flex flex-col items-center pt-28 text-center lg:pt-24">
        
        {/* Top badge
        <motion.button
          initial="initial"
          animate="animate"
          variants={easeDownVariants}
          transition={{
            duration: 0.5,
            type: "spring",
            ease: "easeOut",
          }}
          className="flex h-7 items-center gap-2 rounded-full border border-white/5 bg-white/10 px-3 text-xs font-medium leading-7 backdrop-blur-md hover:bg-white/20 transition"
        >
          Exonium Mobile v0.1 <ChevronRight />
        </motion.button> */}

        {/* Heading with gradient */}
        <motion.h1
          initial="initial"
          animate="animate"
          variants={easeDownVariants}
          transition={{
            duration: 0.5,
            type: "spring",
            ease: "easeOut",
            delay: 0.08,
          }}
          className="my-6 text-balance pb-1.5 text-[44px] font-medium leading-[1] -tracking-[0.01em] bg-clip-text text-transparent lg:text-[80px] lg:tracking-tight"
          style={{
            background:
              "linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38))",
            WebkitBackgroundClip: "text",
          }}
        >
          Exonium is a better way to build products
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial="initial"
          animate="animate"
          variants={easeDownVariants}
          transition={{
            duration: 0.5,
            type: "spring",
            ease: "easeOut",
            delay: 0.16,
          }}
          className="mb-12 text-balance text-lg font-normal leading-[1.3] text-[#b4bcd0] lg:text-[22px]"
        >
          Meet the new standard for modern software development. Streamline
          issues, sprints, and product roadmaps.
        </motion.p>

        {/* CTA Button */}
        <Link href="/signup">
          <motion.span
            initial="initial"
            animate="animate"
            variants={easeDownVariants}
            transition={{
              duration: 0.5,
              type: "spring",
              ease: "easeOut",
              delay: 2.5,
            }}
            className="border-2 border-blue-400 bg-[#003366] flex h-12 items-center gap-2 rounded-full px-6 text-white font-medium leading-[48px] hover:bg-transparent transition duration-700 transition shadow-lg cursor-pointer"
            role="button"
            tabIndex={0}
          >
            Get started <ChevronRight />
          </motion.span>
        </Link>

        {/* Dashboard mock (image/preview) */}
        <DashboardMock />
      </div>
    </div>
  );
};

export default Hero;
