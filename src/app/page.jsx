import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Nav from "@/components/nav/nav";
import Partners from "@/components/partners/partners";
import Section1 from "@/components/section1/section1";
import Section2 from "@/components/section2/section2";
import Section3 from "@/components/section3/section3";
import Section4 from "@/components/section4/section4";
import Section5 from "@/components/section5/section5";
import Section6 from "@/components/section6/section6";
import SmoothScroll from "@/components/smooth-scroll";
import Particles from "@/lib/svgs/particles";

export default function Home() {
  return (
    <SmoothScroll>
      <>
        <Nav />
        <Hero />
        <Partners />
        <div className="pointer-events-none relative mx-auto -mt-32 h-[600px] w-full select-none overflow-hidden [mask-image:radial-gradient(circle,black,transparent_80%)] before:absolute before:inset-0 before:opacity-40 before:[background:radial-gradient(circle_at_bottom_center,#7877C6,transparent_70%)] after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,118,197,0.4)] after:bg-[#000212]">
          <Particles />
        </div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <div className="pointer-events-none relative mx-auto -mt-64 h-[600px] w-full rotate-180 select-none overflow-hidden [mask-image:radial-gradient(circle,black,transparent_80%)] before:absolute before:inset-0 before:opacity-40 before:[background:radial-gradient(circle_at_bottom_center,#7877C6,transparent_70%)] after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,118,197,0.4)] after:bg-[#000212]">
          <Particles />
        </div>
        <Section6 />
        <Footer />
      </>
    </SmoothScroll>
  );
}
