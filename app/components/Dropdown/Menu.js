import styled, { css } from 'styled-components';

import { BG_LIGHT, BORDER_DARK, BG_SECONDARY_LIGHT, TEXT_DARK } from 'style-constants';

const MenuStyles = css`
  z-index: 5;
  position: absolute;
  background: ${BG_LIGHT};
  box-shadow: 0 0 1px ${BORDER_DARK}99;
  border-radius: 3px;
  min-width: 175px;
  max-height: 225px;
  overflow-y: auto;
  margin-top: 10px;
  text-transform: capitalize;
`;

const ItemStyled = css`
  cursor: pointer;
  font-size: 14px;
  display: block;
  color: ${TEXT_DARK};

  animation: scale 0.25s;
  animation-fill-mode: both;

  @keyframes scale {
    0% {
      padding: 5px 15px;
    }
    100% {
      padding: 10px 15px;
    }
  }

  &:hover {
    background: ${BG_SECONDARY_LIGHT};
  }
`;

const Ul = styled.ul`
  ${MenuStyles};

  li {
    ${ItemStyled};
  }
`;

const UlLinked = styled.div`
  ${MenuStyles};

  a {
    ${ItemStyled};
  }
`;

export { Ul, UlLinked };
