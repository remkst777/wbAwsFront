import styled from 'styled-components';
import { BG_SUCCESS } from 'style-constants';

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;

  > div {
    width: 12px;
    height: 12px;
    margin: 12px 6px;
    background-color: ${BG_SUCCESS};

    border-radius: 100%;
    display: inline-block;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .bounce1 {
    animation-delay: -0.32s;
  }

  .bounce2 {
    animation-delay: -0.16s;
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`;

export default Wrapper;
