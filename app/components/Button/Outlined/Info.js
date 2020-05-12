import { css } from 'styled-components';
import { BORDER_INFO, TEXT_INFO, BG_LIGHT } from 'style-constants';

import BStyles from '../index';

const I = css`
  ${BStyles};
  border: 1px solid ${BORDER_INFO};
  background: ${BG_LIGHT};
  color: ${TEXT_INFO};
`;

export default I;
