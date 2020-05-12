import styled from 'styled-components';
import { BG_LIGHT, BORDER_LIGHT, TEXT_INFO, TEXT_SUCCESS } from 'style-constants';

export default styled.ul`
  position: fixed;
  top: 25px;
  right: 25px;
  width: 280px;
  max-height: 100vh;
  z-index: 6;

  li {
    background: ${BG_LIGHT};
    border-radius: 5px;
    box-shadow: 0 0 5px ${BORDER_LIGHT};
    margin-bottom: 20px;
    padding: 15px 20px;
    cursor: pointer;

    &.success {
      color: ${TEXT_SUCCESS};
    }

    &.error {
      color: ${TEXT_INFO};
    }
  }
`;
