import React from "react";

type Props = {
  fill?: string;
  onClick: () => void;
};

const arrowDown = ({ fill = "white", onClick }: Props) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.875 14.6162V4.24999H11.125V14.6162L15.0581 10.6831L15.9419 11.5669L10.5 17.0087L5.05813 11.5669L5.94188 10.6831L9.875 14.6162Z"
        fill={fill}
      />
    </svg>
  );
};

export default arrowDown;
