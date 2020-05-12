import styled from 'styled-components';
import { BG_LIGHT } from 'style-constants';

export default styled.div`
  position: relative;
  z-index: 4;
  background: ${BG_LIGHT};
  width: 380px;
  margin: 0 15px;
  padding: 30px;
  border-radius: 5px;
  transition: 1s;
  max-height: 95vh;
  animation: move 0.5s;

  @keyframes move {
    from {
      top: -450px;
    }
    to {
      top: 0px;
    }
  }
`;
