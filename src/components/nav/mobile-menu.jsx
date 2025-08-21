"use client";

import Github from "@/lib/svgs/github";
import Slack from "@/lib/svgs/slack";
import Twitter from "@/lib/svgs/twitter";
import Youtube from "@/lib/svgs/youtube";
import { motion } from "framer-motion";

const MobileMenu = ({ show }) => {
  return (
    <motion.div
      initial={{
        y: "-100%",
      }}
      animate={
  show ? { y: "0%" } : { y: "-100%" }
      }
      transition={{
  duration: 0.7, type: "tween",
      }}
      className="container-lg fixed top-0 z-40 flex min-h-screen w-full flex-col bg-[#000212] pt-20 text-lg lg:hidden"
    >
      <div className="grid grid-cols-2">
        <ul className="space-y-3">
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Method</li>
          <li className="cursor-pointer">Customers</li>
          <li className="cursor-pointer">Changelog</li>
          <li className="cursor-pointer">Integrations</li>
          <li className="cursor-pointer">Docs</li>
        </ul>
        <ul className="space-y-3">
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Careers</li>
        </ul>
      </div>
      <div className="flex flex-1 items-end gap-10 pb-5">
        <Twitter />
        <Github />
        <Slack />
        <Youtube />
      </div>
    </motion.div>
  );
};

export default MobileMenu;
