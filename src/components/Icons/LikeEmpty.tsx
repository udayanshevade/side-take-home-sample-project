import React from 'react';

const LikeEmpty = ({ onClick }: { onClick?: React.MouseEventHandler<SVGSVGElement> }) => (
  <svg
    data-testid="save-icon--empty"
    className="icon-like icon-like--empty"
    width="41"
    height="37"
    viewBox="0 0 41 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.3125 0.875C25.905 0.875 22.6346 2.46125 20.5 4.96792C18.3654 2.46125 15.095 0.875 11.6875 0.875C5.65582 0.875 0.916656 5.61417 0.916656 11.6458C0.916656 19.0483 7.57499 25.08 17.6604 34.245L20.5 36.8104L23.3396 34.2254C33.425 25.08 40.0833 19.0483 40.0833 11.6458C40.0833 5.61417 35.3442 0.875 29.3125 0.875ZM20.6958 31.3271L20.5 31.5229L20.3042 31.3271C10.9825 22.8867 4.83332 17.3054 4.83332 11.6458C4.83332 7.72917 7.77082 4.79167 11.6875 4.79167C14.7033 4.79167 17.6408 6.73042 18.6787 9.41333H22.3408C23.3592 6.73042 26.2967 4.79167 29.3125 4.79167C33.2292 4.79167 36.1667 7.72917 36.1667 11.6458C36.1667 17.3054 30.0175 22.8867 20.6958 31.3271Z"
      fill="white"
    />
  </svg>
);

export default LikeEmpty;
