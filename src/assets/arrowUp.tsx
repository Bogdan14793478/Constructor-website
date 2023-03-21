import React from "react";

type Props = {
  fill: string;
};

const arrowUp = ({ fill = "white" }: Props) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.125 6.38376V16.75H9.875V6.38376L5.94187 10.3169L5.05812 9.43313L10.5 3.99126L15.9419 9.43313L15.0581 10.3169L11.125 6.38376Z"
        fill={fill}
      />
    </svg>
  );
};

export default arrowUp;
