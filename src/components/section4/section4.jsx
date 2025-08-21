import Image from "next/image";
import LampEffect from "../lamp-effect";
import DesktopGraph from "@/lib/svgs/desktop-graph";
import Users from "@/lib/svgs/users";
import File from "@/lib/svgs/file";
import Map from "@/lib/svgs/map";
import Timeline from "@/lib/svgs/timeline";
import Inbox from "@/lib/svgs/inbox";

const Section4 = () => {
  return (
    <div className="pb-52">
      <LampEffect color="#1F3140">
        Build momentum <br /> with cycles
      </LampEffect>
      <div className="container-lg">
        <div className="relative z-10 mx-auto -mt-20 aspect-[1084/515] w-full overflow-hidden rounded-[14px]">
          <div className="absolute inset-0 backdrop-blur [mask-image:linear-gradient(black,transparent)] before:absolute before:inset-0 before:bg-[#1F3140]"></div>
          <Image src="/img5.avif" fill alt="" className="" />
        </div>
      </div>
      <h3 className="mx-auto mt-16 max-w-xs text-center text-2xl leading-[1.3] lg:mt-0 lg:max-w-[43rem] lg:text-[32px]">
        Plan visually, collaborate in cross-team projects, and make better
        decisions with progress insights and project updates.
      </h3>

      <div className="my-[72px] h-[1px] w-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]"></div>

      <div className="container-lg">
        <div className="grid grid-cols-2 text-xs [column-gap:4px] [row-gap:36px] lg:grid-cols-3 lg:text-base lg:[column-gap:0px]">
          <div className="flex max-w-64 gap-2 text-[#b4bcd0]">
            <Users />
            <h4 className="leading-normal">
              <span className="text-white">Multi-team projects.</span>{" "}
              Collaborate across teams and departments.
            </h4>
          </div>
          <div className="flex max-w-64 gap-2 text-[#b4bcd0]">
            <File />
            <h4 className="leading-normal">
              <span className="text-white">Project documents.</span>
              Write project briefs and specs directly in Exonium.
            </h4>
          </div>
          <div className="flex max-w-64 gap-2 text-[#b4bcd0]">
            <Map />
            <h4 className="leading-normal">
              <span className="text-white">Custom roadmaps.</span> Organize
              projects across multiple roadmaps.
            </h4>
          </div>
          <div className="flex max-w-64 gap-2 text-[#b4bcd0]">
            <Timeline />
            <h4 className="leading-normal">
              <span className="text-white">Timeline view.</span> Visualize the
              product journey ahead.
            </h4>
          </div>
          <div className="flex max-w-64 gap-2 text-[#b4bcd0]">
            <DesktopGraph />
            <h4 className="leading-normal">
              <span className="text-white">Project insights.</span>
              Track scope, velocity, and progress over time.
            </h4>
          </div>
          <div className="flex max-w-64 gap-2 text-[#b4bcd0]">
            <Inbox />
            <h4 className="leading-normal">
              <span className="text-white">Personal notifications.</span> Stay
              in the loop on project activity and updates.
            </h4>
          </div>
        </div>

        <div className="mt-[140px] grid gap-6 lg:grid-cols-2">
          <div className="relative flex aspect-[1.1/1] flex-col justify-start overflow-hidden rounded-3xl border border-white/20 px-6 py-8 [background:radial-gradient(ellipse_at_center,rgb(31,49,64),rgba(255,255,255,0))] lg:rounded-[48px] lg:px-12">
            <h3 className="mb-2 text-2xl leading-[1.3] tracking-[-0.01em]">
              Project updates
            </h3>
            <p className="max-w-[310px] leading-normal text-[#b4bcd0]">
              Keep everyone up-to-date on the health and progress of projects.
            </p>
            <div className="absolute -bottom-7 aspect-video w-[400px] lg:bottom-0 lg:w-[500px]">
              <div className="relative h-full w-full">
                <Image src={"/img6.avif"} alt="" fill />
              </div>
            </div>
          </div>
          <div className="relative flex aspect-[1.1/1] flex-col justify-start overflow-hidden rounded-3xl border border-white/20 px-6 py-8 [background:radial-gradient(ellipse_at_center,rgb(31,49,64),rgba(255,255,255,0))] lg:rounded-[48px] lg:px-12">
            <h3 className="mb-2 text-2xl leading-[1.3] tracking-[-0.01em]">
              Focus on the big picture
            </h3>
            <p className="max-w-[310px] leading-normal text-[#b4bcd0]">
              Explore every company project in one view to easily identify what
              needs attention.
            </p>
            <div className="absolute -bottom-14 left-0 aspect-video w-[400px] lg:bottom-0 lg:w-[500px]">
              <div className="relative h-full w-full">
                <Image src={"/img7.avif"} alt="" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
