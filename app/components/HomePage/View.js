import styled from 'styled-components';
import { TEXT_LIGHT, BG_INFO } from 'style-constants';

export default styled.div`
  position: relative;
  z-index: 2;
  width: 64%;
  padding-top: 40px;

  .top {
    font-size: 28px;
    font-weight: 300;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    color: ${TEXT_LIGHT};

    &::after {
      content: '...';
    }
  }

  .middle {
    font-size: 95px;
    line-height: 85px;
    color: ${TEXT_LIGHT};
    letter-spacing: 0.3px;
    font-weight: 900;
    text-transform: uppercase;
    margin-top: 30px;
    margin-bottom: 50px;
  }

  &::before {
    content: '';
    width: 90px;
    height: 12px;
    background: ${BG_INFO};
    position: absolute;
    top: 0;
    left: 0;
  }
`;
