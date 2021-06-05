import React from 'react';
import { validateString, validateNumber } from 'utils';
import svgs from './svgs';
import Styles from './styles';

export interface IIconProps {
  iconName: string;
  width?: number;
  height?: number;
  color?: string;
}
const Icon: React.FC<IIconProps> = ({
  iconName,
  color,
  width,
  height,
  ...props
}) => {
  if (!iconName || !validateString(iconName)) return null;
  if (!(iconName in svgs)) return null;

  const { viewBox, paths, w, h } = svgs[iconName];

  const validWidth = width && validateNumber(width) ? width : w;
  const validHeight = height && validateNumber(height) ? height : h;

  return (
    <Styles.Svg
      viewBox={viewBox}
      width={validWidth}
      height={validHeight}
      color={color}
      {...props}
    >
      {paths.map((path, idx) => (
        <Styles.Path key={idx.toString()} d={path} />
      ))}
    </Styles.Svg>
  );
};

export default Icon;
