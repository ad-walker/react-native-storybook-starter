import React from 'react';
import SvgIcon from 'react-native-svg-icon';
import SvgIcons from '../../assets/icons/SvgIcons';
interface IconProps {
  name: string;
  fill?: string;
  height?: string;
  width?: string;
}
const Icon = (props: IconProps) => <SvgIcon {...props} svgs={SvgIcons} />;

Icon.defaultProps = {
  name: 'google',
  fill: 'white',
  height: '22',
  width: '22',
};
export default Icon;
