import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface SendVoiceIconProps {
  fillColor?: string;
  width?: number;
  height?: number;
}

const SendVoiceIcon: React.FC<SendVoiceIconProps> = props => {
  const {fillColor, width, height} = props;

  return (
    <Svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="12" fill="#4666FF" />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 10.9999C21.1046 10.9999 22 11.8954 22 12.9999V18.9999C22 20.1045 21.1046 20.9999 20 20.9999C18.8954 20.9999 18 20.1045 18 18.9999V12.9999C18 11.8954 18.8954 10.9999 20 10.9999ZM15 18C15.5523 18 16 18.4477 16 19C16 21.2091 17.7909 23 20 23C22.2091 23 24 21.2091 24 19C24 18.4477 24.4477 18 25 18C25.5523 18 26 18.4477 26 19C26 21.9741 23.836 24.4428 20.9967 24.9176C20.9989 24.9447 21 24.9722 21 24.9999V26.9999H23C23.5523 26.9999 24 27.4476 24 27.9999C24 28.5522 23.5523 28.9999 23 28.9999H20H17C16.4478 28.9999 16 28.5522 16 27.9999C16 27.4476 16.4478 26.9999 17 26.9999H19V24.9999C19 24.9722 19.0012 24.9447 19.0034 24.9176C16.164 24.4429 14 21.9741 14 19C14 18.4477 14.4477 18 15 18Z"
        fill="white"
      />
    </Svg>
  );
};

export default SendVoiceIcon;