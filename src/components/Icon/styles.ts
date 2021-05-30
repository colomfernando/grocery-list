import styled from 'styled-components';

interface ISvgStyles {
  color?: string;
}

const Svg = styled.svg<ISvgStyles>`
  color: ${({ color }) => (color ? color : '#000')};
`;

const Path = styled.path`
  fill: currentColor;
`;

Svg.displayName = 'SvgIcon';
export default { Svg, Path };
