import User from "@/lib/svgs/user";
import Card from "./card";
import CircleHalf from "@/lib/svgs/circle-half";
import Signal from "@/lib/svgs/signal";
import PriceTag from "@/lib/svgs/price-tag";

const MeetYourCommandLine = () => {
  return (
    <Card className="col-[auto/span_4] justify-start">
      <h3 className="text-center text-[26px] leading-[1.2] tracking-[-0.01em]">
        Meet your command line
      </h3>
      <p className="mt-4 max-w-[480px] text-balance text-center leading-[1.3] text-[#b4bcd0]">
        Complete any action in seconds with the global command menu.
      </p>
      <div className="relative mt-5 flex w-full flex-1 justify-center opacity-60">
        <div className="absolute left-0 flex h-[130%] w-[120%] flex-col gap-3 overflow-hidden rounded-xl border border-white/10 bg-white/10 pt-3 text-left lg:left-auto lg:h-[110%] lg:w-11/12">
          <span className="mx-4 w-fit rounded bg-white/5 px-2 py-0.5 text-xs text-white/50">
            LIN-111 Walkway lighting
          </span>
          <div className="relative px-4">
            <input
              type="text"
              placeholder="Type a command or search..."
              className="peer bg-transparent text-xl caret-[#5e6ad2] outline-none placeholder:text-sm lg:placeholder:text-base"
            />
            <div className="absolute bottom-0 top-0 w-[1.5px] animate-cursor peer-focus:animate-none" />
          </div>
          <div className="mt-3.5 flex-1">
            <span className="flex h-[46px] cursor-pointer items-center gap-2 bg-white/15 px-5 text-sm hover:bg-white/15">
              <User />
              Assign to...
            </span>
            <span className="flex h-[46px] cursor-pointer items-center gap-2 px-5 text-sm hover:bg-white/15">
              <CircleHalf />
              Change status...
            </span>
            <span className="flex h-[46px] cursor-pointer items-center gap-2 px-5 text-sm hover:bg-white/15">
              <Signal />
              Change priority...
            </span>
            <span className="flex h-[46px] cursor-pointer items-center gap-2 px-5 text-sm hover:bg-white/15">
              <PriceTag />
              Add labels...
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MeetYourCommandLine;
