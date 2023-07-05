import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface HistoryIconProps {
  fillColor?: string;
  width?: number;
  height?: number;
}

const HistoryIcon: React.FC<HistoryIconProps> = props => {
  const {fillColor, width, height} = props;

  return (
    <Svg
      width={width ? width : '18'}
      height={height ? height : '18'}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9 17.25C13.5563 17.25 17.25 13.5563 17.25 9C17.25 4.44365 13.5563 0.75 9 0.75C4.44365 0.75 0.75 4.44365 0.75 9C0.75 13.5563 4.44365 17.25 9 17.25Z"
        stroke="#C0C5D1"
        stroke-width="1.5"
      />
      <Path
        d="M8.99805 3.01001V9.31702H13.2501"
        stroke="#C0C5D1"
        stroke-width="1.5"
      />
    </Svg>
  );
};

export default HistoryIcon;
