"use client";

import Plus from "@/lib/svgs/plus";
import LampEffect from "../lamp-effect";
import { motion } from "framer-motion";
import Fox from "@/lib/svgs/fox";
import Figma from "@/lib/svgs/figma";
import Z from "@/lib/svgs/z";
import F from "@/lib/svgs/f";
import Github from "@/lib/svgs/github";
import Bars from "@/lib/svgs/bars";
import ChevronRight from "@/lib/svgs/chevron-right";
import Clock from "@/lib/svgs/clock";
import Gear from "@/lib/svgs/gear";
import Warning from "@/lib/svgs/warning";
import DesktopGraph from "@/lib/svgs/desktop-graph";
import Box from "@/lib/svgs/box";
import Robot from "@/lib/svgs/robot";

const Section5 = () => {
  return (
    <div className="overflow-hidden pb-52">
      <LampEffect color="#3E2476">
        Exonium workflows. <br /> Exponential results.
      </LampEffect>
      <div className="container-lg -mt-10">
        <div className="relative z-10 flex h-36 w-full items-center justify-center pb-40">
          <div className="absolute right-[calc(50%+290px)] z-10 flex size-[40px] items-center justify-center rounded-full bg-[url(/circle.svg)] bg-no-repeat backdrop-blur-lg [background-size:40px_40px]">
            <Figma />
          </div>
          <div className="absolute right-[calc(50%+200px)] z-10 flex size-[56px] items-center justify-center rounded-full bg-[url(/circle.svg)] bg-no-repeat backdrop-blur-lg [background-size:56px_56px]">
            <Fox />
          </div>
          <div className="absolute right-[calc(50%+100px)] z-10 flex size-[72px] items-center justify-center rounded-full bg-[url(/circle.svg)] bg-no-repeat backdrop-blur-lg [background-size:72px_72px]">
            <Z />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              scale: [0.8, 1, 1, 0.8],
              opacity: [0.2, 1, 0.2],
              transition: { repeat: Infinity, duration: 1.6, delay: 0 },
            }}
            className="absolute size-72 rounded-full [background:linear-gradient(90deg,rgb(21,11,48)_0%,rgb(91,57,184)_100%)]"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              scale: [0.8, 1, 1, 0.8],
              opacity: [0.2, 1, 0.2],
              transition: { repeat: Infinity, duration: 1.6, delay: 0.2 },
            }}
            className="absolute size-[15rem] rounded-full [background:linear-gradient(90deg,rgb(21,11,48)_0%,rgb(91,57,184)_100%)]"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              scale: [0.8, 1, 1, 0.8],
              opacity: [0.2, 1, 0.2],
              transition: { repeat: Infinity, duration: 1.6, delay: 0.4 },
            }}
            className="absolute size-48 rounded-full [background:linear-gradient(90deg,rgb(21,11,48)_0%,rgb(91,57,184)_100%)]"
          ></motion.div>
          <div className="absolute flex size-36 items-center justify-center rounded-full backdrop-blur-[6px] [background:linear-gradient(rgba(108,56,255,0.3)_0%,rgba(139,98,255,0.3)_100%)]">
            <Plus />
          </div>
          <div className="absolute left-[calc(50%+100px)] z-10 flex size-[72px] items-center justify-center rounded-full bg-[url(/circle.svg)] bg-no-repeat backdrop-blur-lg [background-size:72px_72px]">
            <F />
          </div>
          <div className="absolute left-[calc(50%+200px)] z-10 flex size-[56px] items-center justify-center rounded-full bg-[url(/circle.svg)] bg-no-repeat backdrop-blur-lg [background-size:56px_56px]">
            <Github style={{ width: 28 }} />
          </div>
          <div className="absolute left-[calc(50%+290px)] z-10 flex size-[40px] items-center justify-center rounded-full bg-[url(/circle.svg)] bg-no-repeat backdrop-blur-lg [background-size:40px_40px]">
            <Bars />
          </div>
        </div>

        <h3 className="mx-auto mt-16 max-w-xs text-center text-2xl leading-[1.3] lg:mt-0 lg:max-w-[43rem] lg:text-[32px]">
          From customer support integrations to powerful Git automations, Exonium
          streamlines the entire product development process.
        </h3>
        <div className="flex justify-center pt-10">
          <button className="flex h-7 items-center gap-2 rounded-full border border-white/5 bg-white/10 px-3 text-xs font-medium leading-7 backdrop-blur-md">
            Discover integrations <ChevronRight />{" "}
          </button>
        </div>
        <div className="my-[72px] h-[1px] w-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]"></div>

        <div className="container-lg">
          <div className="grid grid-cols-2 text-xs [column-gap:4px] [row-gap:36px] lg:grid-cols-3 lg:text-base lg:[column-gap:0px]">
            <div className="flex max-w-64 gap-2 text-[#b4bcd0]">
              <Robot />
              <h4 className="leading-normal">
                <span className="text-white">GitHub and GitLab.</span> Sync PRs
                with issues that close automatically.
              </h4>
            </div>
            <div className="flex max-w-64 gap-2 text-[#b4bcd0]">
              <Clock />
              <h4 className="leading-normal">
                <span className="text-white">Slack and Discord.</span> Create
                issues and set up alerts.
              </h4>
            </div>
            <div className="flex max-w-64 gap-2 text-[#b4bcd0]">
              <Gear />
              <h4 className="leading-normal">
                <span className="text-white">Sentry.</span>
                Automatically create issues from code exceptions.
              </h4>
            </div>
            <div className="flex max-w-64 gap-2 text-[#b4bcd0]">
              <Warning />
              <h4 className="leading-normal">
                <span className="text-white">Airbyte.</span>
                Sync workspace data to external warehouses and databases.
              </h4>
            </div>
            <div className="flex max-w-64 gap-2 text-[#b4bcd0]">
              <DesktopGraph />
              <h4 className="leading-normal">
                <span className="text-white">Front, Intercom, Zendesk.</span>{" "}
                Keep a tight loop with your users.
              </h4>
            </div>
            <div className="flex max-w-64 gap-2 text-[#b4bcd0]">
              <Box />
              <h4 className="leading-normal">
                <span className="text-white">Figma.</span>
                Streamline work across design and engineering.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
