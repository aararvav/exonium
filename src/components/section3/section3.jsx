import Image from "next/image";
import LampEffect from "../lamp-effect";
import Robot from "@/lib/svgs/robot";
import Clock from "@/lib/svgs/clock";
import Gear from "@/lib/svgs/gear";
import Warning from "@/lib/svgs/warning";
import DesktopGraph from "@/lib/svgs/desktop-graph";
import Box from "@/lib/svgs/box";

const Section3 = () => {
  return (
    <div className="pb-52">
      <LampEffect color="#303a75">
        Build momentum <br /> with cycles
      </LampEffect>
      <div className="container-lg">
        <div className="relative z-10 mx-auto -mt-20 aspect-[1084/515] w-full overflow-hidden rounded-[14px]">
          <div className="absolute inset-0 backdrop-blur [mask-image:linear-gradient(black,transparent)] before:absolute before:inset-0 before:bg-[#303a75]"></div>
          <Image src="/img4.avif" fill alt="" className="" />
        </div>
      </div>
      <h3 className="mx-auto mt-16 max-w-xs text-center text-2xl leading-[1.3] lg:mt-0 lg:max-w-[43rem] lg:text-[32px]">
        Cycles focus your team on what work should happen next. A healthy
        routine to maintain velocity and make meaningful progress.
      </h3>

      <div className="my-[72px] h-[1px] w-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]"></div>

      <div className="container-lg">
        <div className="grid grid-cols-2 text-xs [column-gap:4px] [row-gap:36px] lg:grid-cols-3 lg:text-base lg:[column-gap:0px]">
          <div className="flex max-w-64 gap-2 text-[#b4bcd0]">
            <Robot />
            <h4 className="leading-normal">
              <span className="text-white">Automatic tracking.</span> Any
              started issues are added to the current cycle.
            </h4>
          </div>
          <div className="flex max-w-64 gap-2 text-[#b4bcd0]">
            <Clock />
            <h4 className="leading-normal">
              <span className="text-white">Scheduled.</span> Unfinished work
              rolls over to the next cycle automatically.
            </h4>
          </div>
          <div className="flex max-w-64 gap-2 text-[#b4bcd0]">
            <Gear />
            <h4 className="leading-normal">
              <span className="text-white">Fully configurable.</span> Define
              start date, end date, duration, and more.
            </h4>
          </div>
          <div className="flex max-w-64 gap-2 text-[#b4bcd0]">
            <Warning />
            <h4 className="leading-normal">
              <span className="text-white">Predict delays.</span> Get warnings
              for at-risk cycles.
            </h4>
          </div>
          <div className="flex max-w-64 gap-2 text-[#b4bcd0]">
            <DesktopGraph />
            <h4 className="leading-normal">
              <span className="text-white">Scope creep.</span> Understand which
              issues are added mid-cycle.
            </h4>
          </div>
          <div className="flex max-w-64 gap-2 text-[#b4bcd0]">
            <Box />
            <h4 className="leading-normal">
              <span className="text-white">Be prepared.</span> Schedule work in
              advance with upcoming cycles.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
