import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface SendMessageIconProps {
  fillColor?: string;
  width?: number;
  height?: number;
}

const SendMessageIcon: React.FC<SendMessageIconProps> = props => {
  const {fillColor, width, height} = props;

  return (
    <Svg
      width="11"
      height="11"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 122.88 122.88"
      {...props}>
      <Path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.21,61.21,0,0,1,61.44,0ZM87.06,35.79,66.39,96.94l-9.46-31-31-9.46L87.06,35.79ZM99.15,23.73a53.33,53.33,0,1,0,15.62,37.71A53.16,53.16,0,0,0,99.15,23.73Z" />
    </Svg>
  );
};

export default SendMessageIcon;