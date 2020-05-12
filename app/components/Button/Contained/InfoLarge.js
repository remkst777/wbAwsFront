import styled, { css } from 'styled-components';

import IStyles from './Info';

const IL = css`
  ${IStyles};
  min-width: 124px;
  padding: 12px 24px;
`;

const ButtonIL = styled.button`
  ${IL};
`;

export { ButtonIL };
export default IL;
