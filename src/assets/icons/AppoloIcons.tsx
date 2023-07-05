import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface AppoloIconsProps {
  fillColor?: string;
  width?: number;
  height?: number;
}

const AppoloIcons: React.FC<AppoloIconsProps> = props => {
  const {fillColor, width, height} = props;

  return (
    <Svg
      width={width ? width : '44'}
      height={height ? height : '43'}
      viewBox="0 0 44 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M22.0111 0C34.0542 0 43.7574 9.45051 43.9953 21.0342C44.2465 33.1479 34.3053 42.8957 22.1961 42.9992C9.99439 43.1026 0.0796514 33.5616 0.000333434 21.7452C-0.0657648 9.6315 9.70356 0.0258564 22.0111 0ZM28.7927 23.3871C28.7002 23.1544 28.6341 22.9863 28.568 22.8441C27.7352 21.073 26.9155 19.3018 26.0827 17.5306C24.8401 14.8674 23.5842 12.2042 22.3415 9.52808C22.2094 9.24366 22.0639 8.9851 21.6938 8.9851C21.3236 8.9851 21.1782 9.25659 21.046 9.52808C20.7155 10.2391 20.385 10.9373 20.0545 11.6354C17.1859 17.7504 14.3172 23.8654 11.4486 29.9805C10.9594 31.0277 10.4571 32.0619 9.99439 33.122C9.91507 33.316 9.95473 33.6392 10.0605 33.8331C10.1266 33.9624 10.4174 34.0011 10.6157 34.0141C10.7611 34.0141 10.8933 33.8977 11.0387 33.8201C14.9914 31.5577 18.9441 29.2824 22.8968 27.0199C24.7079 25.9857 26.519 24.9514 28.3301 23.8913C28.5283 23.762 28.6473 23.5422 28.7927 23.3871ZM33.8823 33.9236C33.8559 33.846 33.8162 33.7297 33.7633 33.6133C33.5783 33.2125 33.3932 32.8118 33.1949 32.411C32.0712 30.0063 30.9475 27.6017 29.8107 25.197C29.5595 24.667 29.2554 24.5765 28.7399 24.8738C27.0345 25.8822 25.316 26.8777 23.6238 27.899C22.9629 28.2998 22.9629 28.7394 23.6238 29.1143C26.2017 30.601 28.7927 32.0878 31.3838 33.5616C31.9126 33.8719 32.4414 34.1951 32.9966 34.4795C33.4064 34.7122 33.8955 34.4278 33.8823 33.9236Z"
        fill={fillColor ? fillColor : '#4666FF'}
      />
    </Svg>
  );
};

export default AppoloIcons;
