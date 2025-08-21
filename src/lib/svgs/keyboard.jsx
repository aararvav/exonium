const Keyboard = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="40"
      viewBox="0 0 56 40"
      fill="none"
      aria-hidden="true"
    >
      <rect x="0.5" y="0.5" width="55" height="39" rx="6.5" fill="#0f1724" stroke="#374151" />
      <g fill="#fff" opacity="0.9">
        {/* Row 1 keys */}
        <rect x="6" y="8" width="6" height="6" rx="1" />
        <rect x="14" y="8" width="6" height="6" rx="1" />
        <rect x="22" y="8" width="6" height="6" rx="1" />
        <rect x="30" y="8" width="6" height="6" rx="1" />
        <rect x="38" y="8" width="6" height="6" rx="1" />

        {/* Row 2 keys */}
        <rect x="6" y="18" width="6" height="6" rx="1" />
        <rect x="14" y="18" width="6" height="6" rx="1" />
        <rect x="22" y="18" width="6" height="6" rx="1" />
        <rect x="30" y="18" width="6" height="6" rx="1" />
        <rect x="38" y="18" width="14" height="6" rx="1" />
      </g>
    </svg>
  );
};

export default Keyboard;
