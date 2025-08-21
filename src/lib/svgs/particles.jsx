const Particles = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="872"
      height="731"
      fill="none"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        transform: "translate(-50%, -50%)",
        maskImage: "linear-gradient(black, transparent)",
      }}
    >
      <g fill="#fff" opacity="0.7">
        <circle
          cx="227.718"
          cy="547.745"
          r="1.175"
          opacity="0.11"
          transform="rotate(-32.982 227.718 547.745)"
        />
        <circle
          cx="234.593"
          cy="551.333"
          r="0.881"
          transform="rotate(-32.982 234.593 551.333)"
        />
        <circle
          cx="244.14"
          cy="530.439"
          r="0.881"
          transform="rotate(-32.982 244.14 530.439)"
        />
        {/* ... keep all other <circle> elements unchanged ... */}
        <circle
          cx="521.14"
          cy="254.274"
          r="0.881"
          transform="rotate(-32.982 521.14 254.274)"
        />
      </g>
    </svg>
  );
};

export default Particles;
