import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface UploadIconProps {
  fillColor?: string;
  width?: number;
  height?: number;
}

const UploadIcon: React.FC<UploadIconProps> = props => {
  const {fillColor, width, height} = props;

  return (
    <Svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M1.39919 9.19932C1.39919 9.19932 4.99895 5.59957 7.99874 2.59977C9.99049 0.608016 12.5579 1.15937 14.0281 2.62952C15.4982 4.09967 15.9901 6.60761 13.9983 8.59936C11.3735 11.2242 9.04867 13.549 6.79882 15.7989C6.19886 16.3988 4.67045 17.2703 3.49904 16.0989C2.21607 14.8159 3.22882 13.4288 3.82878 12.8288C6.07862 10.579 9.3784 7.27921 9.3784 7.27921"
        stroke="#8E939D"
        stroke-width="1.3"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default UploadIcon;
