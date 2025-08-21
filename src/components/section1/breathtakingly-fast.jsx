import Bolt from "@/lib/svgs/bolt";
import Card from "./card";

const BreathtakinglyFast = () => {
  return (
    <Card className="col-[auto/span_4] lg:col-[auto/span_2]">
      <div className="absolute top-[-92px] [mask-image:linear-gradient(black,transparent_70%)]">
        <Bolt />
      </div>
      <h3 className="text-center text-[26px] leading-[1.2] tracking-[-0.01em]">
        Breathtakingly fast
      </h3>
      <p className="mt-4 max-w-[480px] text-balance text-center leading-[1.3] text-[#b4bcd0]">
        Built for speed with 50ms interactions and real-time sync.
      </p>
    </Card>
  );
};

export default BreathtakinglyFast;
