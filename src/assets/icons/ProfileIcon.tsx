import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface ProfileIconProps {
  fillColor?: string;
  stroke?: string;
  width?: number;
  height?: number;
}

const ProfileIcon: React.FC<ProfileIconProps> = props => {
  const {fillColor, stroke, width, height} = props;

  return (
    <Svg
      width={width ? width : '19'}
      height={height ? height : '19'}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9.49886 8.028C11.5086 8.028 13.1379 6.39876 13.1379 4.389C13.1379 2.37924 11.5086 0.75 9.49886 0.75C7.4891 0.75 5.85986 2.37924 5.85986 4.389C5.85986 6.39876 7.4891 8.028 9.49886 8.028Z"
        stroke={stroke ? stroke : '#C0C5D1'}
        stroke-width="1.5"
      />
      <Path
        d="M9.49956 11.695C6.09191 11.695 3.22366 13.7044 2.43544 16.408C3.18345 16.4114 4.13588 16.4168 5.21963 16.4228C8.17654 16.4394 11.8565 16.4601 14.5847 16.4601C15.4396 16.4601 16.0868 16.458 16.5771 16.4547C15.8084 13.7276 12.9268 11.695 9.49956 11.695ZM9.49956 10.195C14.3478 10.195 18.2782 13.6483 18.2782 17.9083C18.2676 18.0273 3.8299 17.904 1.14687 17.904C0.872575 17.904 0.721565 17.9052 0.720949 17.9082C0.720949 13.6483 4.65127 10.195 9.49956 10.195ZM0.720949 17.9082C0.720947 17.9082 0.720947 17.9082 0.720949 17.9082V17.9082Z"
        fill={fillColor ? fillColor : '#C0C5D1'}
      />
    </Svg>
  );
};

export default ProfileIcon;
