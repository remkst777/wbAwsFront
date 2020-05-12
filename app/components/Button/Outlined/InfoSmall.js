import styled, { css } from 'styled-components';

import IStyles from './Info';

const IS = css`
  ${IStyles};
  font-size: 14px;
  padding: 4px 8px;
`;

const ButtonIS = styled.button`
  ${IS};
`;

export { ButtonIS };
export default IS;
