/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { css, CSSObject, SimpleInterpolation } from 'styled-components';

interface IBreakpoints {
  sm: number;
  md: number;
  lg: number;
}

type Args = [CSSObject, SimpleInterpolation];

const breakpointsValues: IBreakpoints = {
  sm: 600,
  md: 960,
  lg: 1280,
};

const getMin = (key: keyof IBreakpoints) =>
  `@media screen and (min-width: ${breakpointsValues[key]}px)`;

const breakpoints = {
  sm: (...args: Args) => css`
    ${getMin('sm')} {
      ${css(...args)}
    }
  `,
  md: (...args: Args) => css`
    ${getMin('md')} {
      ${css(...args)}
    }
  `,
  lg: (...args: Args) => css`
    ${getMin('lg')} {
      ${css(...args)}
    }
  `,
};

export default breakpoints;
