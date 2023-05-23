import React, { FC } from "react";

interface SearchIconProps {
  size?: number;
  color?: string;
}

const SearchIcon: FC<SearchIconProps> = ({ size, color }) => (
  <svg
    style={{
      width: size ? `${size}px` : "100px",
      height: "auto",
    }}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.3272 10.8439C13.118 9.7673 13.5851 8.4382 13.5851 7C13.5851 3.41015 10.6749 0.5 7.08508 0.5C3.49523 0.5 0.585083 3.41015 0.585083 7C0.585083 10.5899 3.49523 13.5 7.08508 13.5C8.52367 13.5 9.8531 13.0327 10.9298 12.2415L10.929 12.2422C10.9585 12.2822 10.9913 12.3204 11.0275 12.3566L14.878 16.2071C15.2685 16.5976 15.9017 16.5976 16.2922 16.2071C16.6827 15.8166 16.6827 15.1834 16.2922 14.7929L12.4417 10.9424C12.4055 10.9062 12.3672 10.8734 12.3272 10.8439ZM12.5851 7C12.5851 10.0376 10.1226 12.5 7.08508 12.5C4.04752 12.5 1.58508 10.0376 1.58508 7C1.58508 3.96243 4.04752 1.5 7.08508 1.5C10.1226 1.5 12.5851 3.96243 12.5851 7Z"
      fill={color}
    />
  </svg>
);

export default SearchIcon;
