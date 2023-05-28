import React, { FC } from "react";

interface PointsIconProps {
  size?: number;
  color?: string;
}

const PointsIcon: FC<PointsIconProps> = ({ size, color }) => (
  <svg
    style={{
      width: size ? `${size}px` : "100px",
      height: "auto",
    }}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.0235 1.35635C10.3775 1.00282 10.8511 0.794803 11.3509 0.773329C11.8507 0.751855 12.3405 0.918487 12.7235 1.24035L12.8515 1.35735L14.7515 3.25635H17.4375C17.9419 3.25644 18.4276 3.44712 18.7974 3.79019C19.1672 4.13325 19.3936 4.60337 19.4315 5.10635L19.4375 5.25635V7.94235L21.3375 9.84235C21.6913 10.1964 21.8995 10.6702 21.9209 11.1703C21.9424 11.6703 21.7756 12.1603 21.4535 12.5434L21.3365 12.6704L19.4365 14.5704V17.2564C19.4366 17.7609 19.2461 18.2469 18.903 18.6169C18.5599 18.9869 18.0896 19.2135 17.5865 19.2514L17.4375 19.2564H14.7525L12.8525 21.1564C12.4984 21.5102 12.0246 21.7184 11.5245 21.7398C11.0245 21.7613 10.5345 21.5945 10.1515 21.2724L10.0245 21.1564L8.12447 19.2564H5.43747C4.93289 19.2565 4.4469 19.0659 4.07692 18.7229C3.70694 18.3798 3.48031 17.9095 3.44247 17.4064L3.43747 17.2564V14.5704L1.53747 12.6704C1.18366 12.3163 0.975468 11.8425 0.953992 11.3424C0.932516 10.8424 1.09932 10.3524 1.42147 9.96935L1.53747 9.84235L3.43747 7.94235V5.25635C3.43756 4.75195 3.62824 4.2662 3.97131 3.89644C4.31437 3.52667 4.78449 3.30018 5.28747 3.26235L5.43747 3.25635H8.12347L10.0235 1.35635ZM11.4375 2.77235L9.53747 4.67235C9.2053 5.004 8.76706 5.20825 8.29947 5.24935L8.12347 5.25635H5.43747V7.94235C5.43759 8.41224 5.27226 8.86718 4.97047 9.22735L4.85147 9.35735L2.95147 11.2574L4.85147 13.1564C5.18349 13.4884 5.3881 13.9266 5.42947 14.3944L5.43747 14.5704V17.2564H8.12347C8.59336 17.2562 9.0483 17.4216 9.40847 17.7234L9.53847 17.8424L11.4375 19.7424L13.3375 17.8424C13.6695 17.5103 14.1077 17.3057 14.5755 17.2644L14.7515 17.2564H17.4375V14.5704C17.4373 14.1005 17.6027 13.6455 17.9045 13.2854L18.0235 13.1554L19.9235 11.2564L18.0235 9.35635C17.6915 9.02433 17.4868 8.58607 17.4455 8.11835L17.4375 7.94235V5.25635H14.7515C14.2816 5.25647 13.8266 5.09114 13.4665 4.78935L13.3365 4.67035L11.4365 2.77035L11.4375 2.77235ZM14.5175 8.24035C14.6974 8.061 14.9389 7.95688 15.1929 7.94912C15.4468 7.94137 15.6942 8.03057 15.8847 8.1986C16.0753 8.36663 16.1948 8.6009 16.2189 8.85382C16.243 9.10675 16.1699 9.35936 16.0145 9.56035L15.9305 9.65435L11.0505 14.5344C10.8599 14.7251 10.606 14.8393 10.3368 14.8551C10.0677 14.871 9.80208 14.7874 9.59047 14.6204L9.49447 14.5354L7.09047 12.1314C6.90922 11.9518 6.80344 11.7098 6.79479 11.4548C6.78614 11.1998 6.87527 10.9512 7.04394 10.7598C7.2126 10.5684 7.44805 10.4486 7.70209 10.4251C7.95613 10.4016 8.20955 10.4761 8.41047 10.6334L8.50447 10.7164L10.2725 12.4844L14.5175 8.24035Z"
      fill={color}
    />
  </svg>
);

export default PointsIcon;
