import styled from 'styled-components';
import IS from 'components/Button/Contained/InfoStretch';

import {
  BORDER_SECONDARY,
  BORDER_PRIMARY,
  TEXT_DARK,
  BG_LIGHT,
  TEXT_TRANSPARENT,
} from 'style-constants';

export default styled.form`
  h3 {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 18px;
  }

  > div {
    div:nth-child(1) {
      margin-bottom: 6px;
      font-size: 13px;
      font-weight: 600;
    }

    &:not(:last-child) {
      margin-bottom: 8px;
    }

    &.tip {
      margin-bottom: 18px;
    }
  }

  input {
    width: 100%;
    height: 40px;
    padding: 0 12px;
    font-size: 14px !important;
    letter-spacing: 0.2px;
    color: ${TEXT_DARK};
    background: ${BG_LIGHT};
    border: 1px solid ${BORDER_SECONDARY};
    border-radius: 3px;
    outline: none;

    &[data-type='dropdown'][value=''] {
      color: ${TEXT_TRANSPARENT};
    }

    &::placeholder {
      color: ${TEXT_DARK}B9;
    }

    &:focus {
      border: 1px solid ${BORDER_PRIMARY};
    }

    &[disabled] {
      opacity: 0.6;
    }

    &[type='submit'] {
      ${IS};
    }
  }
`;
