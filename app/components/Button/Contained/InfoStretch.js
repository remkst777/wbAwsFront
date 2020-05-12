import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import IL from './InfoLarge';

const IS = css`
  ${IL};
  width: 100%;
`;

const ButtonIS = styled.button`
  ${IS};
`;

const LinkIS = styled.a`
  ${IS};
`.withComponent(Link);

export { LinkIS, ButtonIS };
export default IS;
