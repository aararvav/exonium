import Keyboard from "@/lib/svgs/keyboard";
import Card from "./card";
import Bolt from "@/lib/svgs/bolt";
import Linear from "@/lib/svgs/linear";
import ChevronRight from "@/lib/svgs/chevron-right";
import User from "@/lib/svgs/user";
import CircleHalf from "@/lib/svgs/circle-half";
import Signal from "@/lib/svgs/signal";
import PriceTag from "@/lib/svgs/price-tag";
import BuiltForYourKeyboard from "./built-for-your-keyboard";
import BreathtakinglyFast from "./breathtakingly-fast";
import DesignedForModernSoftwareTeams from "./designed-for-modern-software-teams";
import MeetYourCommandLine from "./meet-your-command-line";

const Section1 = () => {
  return (
    <div
      className="relative z-[10] -mt-28"
      style={{
        background:
          "radial-gradient(ellipse 100% 40% at 50% 60%, rgba(102, 99, 246, 0.07), rgba(255,255,255,0))",
      }}
    >
      <div className="container-lg mb-5 text-center">
        <h1 className="text-4xl leading-none tracking-tight lg:text-[56px]">
          Unlike any tool <br /> you&apos;ve used before
        </h1>
        <p className="mx-auto mb-12 mt-6 max-w-2xl text-balance text-[18px] leading-[1.3] text-[#b4bcd0] lg:text-[22px]">
          Designed to the last pixel and engineered with unforgiving precision,
          Exonium combines UI elegance with world-class performance.
        </p>

        <div className="grid [grid-gap:24px] lg:grid-cols-6">
          <BuiltForYourKeyboard />
          <BreathtakinglyFast />
          <DesignedForModernSoftwareTeams />
          <MeetYourCommandLine />
        </div>
      </div>
    </div>
  );
};

export default Section1;
