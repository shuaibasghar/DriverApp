import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface TripleDotIconProps {
  fillColor?: string;
  width?: number;
  height?: number;
}

const TripleDotIcon: React.FC<TripleDotIconProps> = props => {
  const {fillColor, width, height} = props;

  return (
    <Svg
      width={width ? width : '4'}
      height={height ? height : '16'}
      viewBox="0 0 4 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
        fill={fillColor ? fillColor : 'white'}
      />
      <Path
        d="M2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10Z"
        fill={fillColor ? fillColor : 'white'}
      />
      <Path
        d="M2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.89543 12 0 12.8954 0 14C0 15.1046 0.89543 16 2 16Z"
        fill={fillColor ? fillColor : 'white'}
      />
    </Svg>
  );
};

export default TripleDotIcon;
