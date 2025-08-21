import BoxPlus from "@/lib/svgs/box-plus";
import LampEffect from "../lamp-effect";
import Image from "next/image";
import DottedCircle from "@/lib/svgs/dotted-circle";
import CircleHalf from "@/lib/svgs/circle-half";
import Stack from "@/lib/svgs/stack";
import MessageBubble from "@/lib/svgs/message-bubble";
import PaperFoldBottom from "@/lib/svgs/paper-fold-bottom";

const Section2 = () => {
  return (
    <div className="py-52">
      <LampEffect color="#352a4f">
        Issue tracking <br /> you&apos;ll enjoy using
      </LampEffect>
      <div className="container-lg">
        <div className="relative z-10 mx-auto -mt-20 aspect-[777/266] overflow-hidden rounded-[14px] lg:w-[777px]">
          <div className="absolute inset-0 backdrop-blur [mask-image:linear-gradient(black,transparent)] before:absolute before:inset-0 before:bg-[#352a4f]"></div>
          <Image src="/img1.avif" fill alt="" className="" />
        </div>
      </div>
      <h3 className="mx-auto mt-16 max-w-xs text-center text-2xl leading-[1.3] lg:mt-0 lg:max-w-[39rem] lg:text-[32px]">
        Create tasks in seconds, discuss issues in context, and breeze through
        your work in views tailored to you and your team.
      </h3>
      <div className="my-[72px] h-[1px] w-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]"></div>

      <div className="container-lg">
        <div className="grid grid-cols-2 text-xs [column-gap:4px] [row-gap:36px] lg:grid-cols-3 lg:text-base lg:[column-gap:0px]">
          <div className="flex max-w-64 gap-2 text-[#b4bcd0]">
            <BoxPlus />
            <h4 className="leading-normal">
              <span className="text-white">Parent and sub-issues.</span> Break
              larger tasks into smaller issues.
            </h4>
          </div>
          <div className="flex max-w-64 gap-2 text-[#b4bcd0]">
            <DottedCircle />
            <h4 className="leading-normal">
              <span className="text-white">Automated backlog.</span> Exonium will
              auto-close and auto-archive issues.
            </h4>
          </div>
          <div className="flex max-w-64 gap-2 text-[#b4bcd0]">
            <CircleHalf style={{ flexShrink: 0 }} />
            <h4 className="leading-normal">
              <span className="text-white">Custom workflows.</span> Define
              unique issue states for each team.
            </h4>
          </div>
          <div className="flex max-w-64 gap-2 text-[#b4bcd0]">
            <Stack />
            <h4 className="leading-normal">
              <span className="text-white">Filters and custom views.</span> See
              only what&apos;s relevant for you.
            </h4>
          </div>
          <div className="flex max-w-64 gap-2 text-[#b4bcd0]">
            <MessageBubble />
            <h4 className="leading-normal">
              <span className="text-white">Discussion.</span> Collaborate on
              issues without losing context.
            </h4>
          </div>
          <div className="flex max-w-64 gap-2 text-[#b4bcd0]">
            <PaperFoldBottom />
            <h4 className="leading-normal">
              <span className="text-white">Issue templates.</span> Guide your
              team to write effective issues.
            </h4>
          </div>
        </div>

        <div className="mt-[140px] grid gap-6 lg:grid-cols-2">
          <div className="relative flex aspect-[1.1/1] flex-col justify-start overflow-hidden rounded-3xl border border-white/20 px-6 py-8 [background:radial-gradient(ellipse_at_center,rgba(194,97,254,0.15),rgba(255,255,255,0))] lg:rounded-[48px] lg:px-12">
            <h3 className="mb-2 text-2xl leading-[1.3] tracking-[-0.01em]">
              List and board
            </h3>
            <p className="max-w-[310px] leading-normal text-[#b4bcd0]">
              Switch between list and board layout to view work from any angle.
            </p>
            <div className="absolute -bottom-[60%] -right-[90%] aspect-video w-[600px] lg:-bottom-[40%] lg:-right-[70%] lg:w-[800px]">
              <div className="relative h-full w-full">
                <Image src={"/img2.webp"} alt="" fill />
              </div>
            </div>
          </div>
          <div className="relative flex aspect-[1.1/1] flex-col justify-start overflow-hidden rounded-3xl border border-white/20 px-6 py-8 [background:radial-gradient(ellipse_at_center,rgba(194,97,254,0.15),rgba(255,255,255,0))] lg:rounded-[48px] lg:px-12">
            <h3 className="mb-2 text-2xl leading-[1.3] tracking-[-0.01em]">
              Make it yours
            </h3>
            <p className="max-w-[310px] leading-normal text-[#b4bcd0]">
              Quickly apply filters and operators to refine your issue lists and
              create custom views.
            </p>
            <div className="absolute -bottom-[30%] -right-[50%] aspect-video w-[500px] lg:-bottom-[20%] lg:-right-[45%] lg:w-[700px]">
              <div className="relative h-full w-full">
                <Image src={"/img3.avif"} alt="" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
