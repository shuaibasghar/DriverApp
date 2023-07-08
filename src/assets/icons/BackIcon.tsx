import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface BackIconProps {
  fillColor?: string;
  width?: number;
  height?: number;
}

const BackIcon: React.FC<BackIconProps> = props => {
  const {fillColor, width, height} = props;

  return (
    <Svg
      width={width ? width : '10'}
      height={height ? height : '16'}
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M2.75174 8.00071L8.80878 1.95123C9.02309 1.73647 9.14326 1.44543 9.14286 1.14212C9.14246 0.838807 9.02151 0.54808 8.80664 0.333892C8.59177 0.119703 8.30057 -0.00040073 7.99709 1.00458e-06C7.69362 0.000402739 7.40273 0.121278 7.18843 0.336034L0.329778 7.19097C0.124293 7.39893 0.00636319 7.67768 0.000250065 7.96989C-0.00586306 8.2621 0.100304 8.54554 0.296912 8.7619L7.18843 15.664C7.40273 15.8787 7.69362 15.9996 7.99709 16C8.30057 16.0004 8.59177 15.8803 8.80664 15.6661C9.02151 15.4519 9.14246 15.1612 9.14286 14.8579C9.14326 14.5546 9.02309 14.2635 8.80878 14.0488L2.75174 8.00071Z"
        fill={fillColor ? fillColor : 'white'}
      />
    </Svg>
  );
};

export default BackIcon;