import styled, { css } from 'styled-components';

import TStyles from './Transparent';

const TL = css`
  ${TStyles};
  min-width: 124px;
  padding: 12px 24px;
`;

const ButtonTL = styled.button`
  ${TL};
`;

export { ButtonTL };
export default TL;
