import React from "react";

type Props = {
  fill: string;
};

const paragraph = ({ fill = "white" }: Props) => {
  return (
    <svg
      width="26"
      height="25"
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_277)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.1666 17.7083V19.7917H2.58331V17.7083H17.1666ZM23.4166 13.5417V15.625H2.58331V13.5417H23.4166ZM17.1666 9.37501V11.4583H2.58331V9.37501H17.1666ZM23.4166 5.20834V7.29168H2.58331V5.20834H23.4166Z"
          fill="#97AACD"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_277">
          <rect width="25" height="25" fill={fill} transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default paragraph;
