import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface TickIconProps {
  fillColor?: string;
  stroke?: string;
  width?: number;
  height?: number;
}

const TickIcon: React.FC<TickIconProps> = props => {
  const {fillColor, stroke, width, height} = props;

  return (
    <Svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M1 4.07692L4.07692 6.53846L9 1"
        stroke="#4666FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default TickIcon;
