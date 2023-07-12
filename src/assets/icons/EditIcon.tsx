import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface EditIconProps {
  fillColor?: string;
  width?: number;
  height?: number;
}

const EditIcon: React.FC<EditIconProps> = props => {
  const {fillColor, width, height} = props;

  return (
    <Svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M17.6013 8.80066C17.6013 13.6611 13.6611 17.6013 8.80066 17.6013C3.94019 17.6013 0 13.6611 0 8.80066C0 3.94019 3.94019 0 8.80066 0C13.6611 0 17.6013 3.94019 17.6013 8.80066Z"
        fill="#4666FF"
      />
    </Svg>
  );
};

export default EditIcon;
