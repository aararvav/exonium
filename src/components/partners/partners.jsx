import Arc from "@/lib/svgs/arc";
import CashApp from "@/lib/svgs/cash-app";
import Descript from "@/lib/svgs/descript";
import Hex from "@/lib/svgs/hex";
import Mercury from "@/lib/svgs/mercury";
import Ramp from "@/lib/svgs/ramp";
import Raycast from "@/lib/svgs/raycast";
import Remote from "@/lib/svgs/remote";
import Retool from "@/lib/svgs/retool";
import Runway from "@/lib/svgs/runway";
import SuperCell from "@/lib/svgs/supercell";
import Vercel from "@/lib/svgs/vercel";

const Partners = () => {
  return (
    <div className="flex flex-col items-center py-5">
      <p className="my-12 text-center text-[18px] max-w-xs lg:max-w-max lg:text-[22px] leading-[1.3]">
        <span className="text-[#b4bcd0]">
          Powering the world&apos;s best product teams.
        </span>
        <br className="hidden lg:block" />
        From next-gen startups to established enterprises.
      </p>

      <div className="grid grid-cols-2 max-w-xs lg:max-w-max lg:grid-cols-6 [row-gap:32px] [column-gap:24px]">
        <Ramp />
        <Hex />
        <Vercel />
        <Descript />
        <CashApp />
        <SuperCell />
        <Mercury />
        <Retool />
        <Remote />
        <Arc />
        <Raycast />
        <Runway />
      </div>
    </div>
  );
};

export default Partners;
