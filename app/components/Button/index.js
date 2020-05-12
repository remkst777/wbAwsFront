import { css } from 'styled-components';
import { BG_LIGHT } from 'style-constants';

const B = css`
  cursor: pointer;
  font-size: 16px;
  transition: 0.5s;
  position: relative;
  overflow: hidden;
  border-radius: 3px;
  text-transform: capitalize;

  :disabled {
    cursor: not-allowed;
  }

  :after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: ${BG_LIGHT}75;
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }

  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 1;
    }
    20% {
      transform: scale(25, 25);
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: scale(40, 40);
    }
  }

  :focus:not(:active)::after {
    animation: ripple 1s ease-out;
  }
`;

export default B;
