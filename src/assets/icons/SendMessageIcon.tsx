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
      width={width ? width : '21'}
      height={height ? height : '20'}
      viewBox="0 0 21 20"
      fill="#8E939D"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.800049 13.2669V14.3556V18.8C0.800049 19.3523 1.24776 19.8 1.80005 19.8H19.4C19.9523 19.8 20.4 19.3523 20.4 18.8V1.20001C20.4 0.647728 19.9523 0.200012 19.4 0.200012H1.80005C1.24776 0.200012 0.800049 0.647727 0.800049 1.20001V13.2669ZM2.40005 13.9674L7.72872 9.04861C7.80644 8.97687 7.92659 8.97804 8.00289 9.0513L17.5324 18.2H2.40005V14.3556V13.9674ZM9.11096 7.8971L18.8 17.199V1.80001H2.40005V11.7899L6.64347 7.87292C7.34296 7.22724 8.42426 7.23783 9.11096 7.8971ZM14.4113 7.82219C15.3133 7.82219 16.0446 7.09092 16.0446 6.18885C16.0446 5.28679 15.3133 4.55552 14.4113 4.55552C13.5092 4.55552 12.7779 5.28679 12.7779 6.18885C12.7779 7.09092 13.5092 7.82219 14.4113 7.82219Z"
        fill="#8E939D"
        stroke="lightgray"
        strokeWidth="0.5"
      />
    </Svg>
  );
};

export default SendMessageIcon;
