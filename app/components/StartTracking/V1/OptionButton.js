import styled from 'styled-components';
import { BORDER_SECONDARY, BG_LIGHT } from 'style-constants';

import { ButtonTL } from 'components/Button/Contained/TransparentLarge';

export default styled(ButtonTL)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  border-left: 1px solid ${BORDER_SECONDARY};
  background: ${BG_LIGHT};
  font-weight: 300;
  margin: 5px 0;

  img {
    width: 18px;
    height: 18px;
    object-fit: contain;
    display: ${x => (x.option ? 'inline-block' : 'none')};
    margin-right: 9px;
  }
`;
