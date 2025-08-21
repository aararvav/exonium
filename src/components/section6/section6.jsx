import Window from "@/lib/svgs/window";
import Image from "next/image";

const Section6 = () => {
  return (
    <div className="container-lg -mt-40 flex flex-col items-center gap-10 pb-20">
      <Image
        src={"/logo-assets/linear-app-icon.png"}
        alt="logo"
        width={128}
        height={128}
      />
      <h1
        className="my-6 text-balance pb-0.5 text-center text-[40px] font-medium leading-[1] -tracking-[0.01em]  [-webkit-text-fill-color:transparent] [color:unset] lg:text-[80px] lg:tracking-tight"
        style={{
          background:
            "radial-gradient(40% 70% at 50% 0%, rgba(255, 255, 255, 0.6), rgb(255, 255, 255)) text",
        }}
      >
        Built for the future.
        <br />
        Available today.
      </h1>
      <div className="flex items-center justify-center gap-5">
        <button className="flex h-12 items-center gap-2 rounded-full bg-[#5e6ad2] px-4 font-medium leading-[48px]">
          Sign up for free
        </button>
        <button className="hidden h-12 items-center gap-2 rounded-full bg-[hsla(0,0%,100%,.07)] px-4 font-medium leading-[48px] hover:bg-[hsla(0,0%,100%,.15)] lg:flex">
          <Window /> Download
        </button>
      </div>
    </div>
  );
};

export default Section6;
