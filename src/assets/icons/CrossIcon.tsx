import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface CrossIconProps {
  stroke?: string;
  width?: number;
  height?: number;
}

const CrossIcon: React.FC<CrossIconProps> = props => {
  const {stroke, width, height} = props;

  return (
    <Svg
      width={width ? width : '14'}
      height={height ? height : '14'}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M2 2L12.246 12.246"
        stroke={stroke ? stroke : '#4666FF'}
        stroke-width="3"
        stroke-linecap="round"
      />
      <Path
        d="M12.246 2L2 12.246"
        stroke={stroke ? stroke : '#4666FF'}
        stroke-width="3"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default CrossIcon;
