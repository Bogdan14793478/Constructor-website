import React from "react";

type Props = {
  fill?: string;
  onClick?: () => void;
};

const copyIcon = ({ fill = "white", onClick }: Props) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <rect width="21" height="21" rx="2" fill="#4B97B8" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 13V15.5C13 16.2202 12.4702 16.75 11.75 16.75H5.5C4.77982 16.75 4.25 16.2202 4.25 15.5V9.25C4.25 8.52982 4.77982 8 5.5 8H8V5.5C8 4.77982 8.52982 4.25 9.25 4.25H15.5C16.2202 4.25 16.75 4.77982 16.75 5.5V11.75C16.75 12.4702 16.2202 13 15.5 13H13ZM11.75 13H9.25C8.52982 13 8 12.4702 8 11.75V9.25H5.5V15.5H11.75V13ZM9.25 5.5V11.75H15.5V5.5H9.25Z"
        fill={fill}
      />
    </svg>
  );
};

export default copyIcon;
