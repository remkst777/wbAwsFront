import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { BG_LIGHT, TEXT_LIGHT, BG_INFO, TEXT_INFO } from 'style-constants';

const L = css`
  text-align: center;
  display: inline-block;
  color: ${TEXT_LIGHT};
  transition: 0.5s;
  text-shadow: 0 0 10px ${TEXT_INFO};
  font-weight: bold;
  font-size: 52px;
  background: none;
  margin-top: 15px;

  :hover {
    text-shadow: none;
    color: ${TEXT_INFO};
  }
`;

export const Letters = styled.button`
  ${L};
`;

export default styled(Link)`
  ${L};
  margin-top: 0;
  border-bottom: 10px solid ${BG_INFO};

  :hover {
    color: ${TEXT_LIGHT};
    border-bottom: 10px solid ${BG_LIGHT};
  }
`;
