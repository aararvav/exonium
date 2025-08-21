const CircleHalf = ({ style }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#9c9da1"
      role="img"
      focusable="false"
      aria-hidden="true"
      style={style ? style : {}}
    >
      <path d="M13.5 8C13.5 4.96243 11.0376 2.5 8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5C11.0376 13.5 13.5 11.0376 13.5 8ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM12 8C12 10.2091 10.2091 12 8 12V4C10.2091 4 12 5.79086 12 8Z"></path>
    </svg>
  );
};

export default CircleHalf;
