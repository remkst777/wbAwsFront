import styled from 'styled-components';
import { TEXT_LIGHT, BORDER_LIGHT } from 'style-constants';

export default styled.button`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: ${TEXT_LIGHT};
  background: none;
  white-space: nowrap;

  &:not(:last-child) {
    margin-right: 20px;
  }

  > img {
    width: 12px;
    height: 12px;
    object-fit: contain;
    margin-bottom: 2px;
  }

  > div {
    display: flex;
    align-items: center;

    img {
      width: 10px;
      height: 10px;
      object-fit: contain;
      margin-right: 6px;
      border-radius: 50%;
      box-shadow: 0 0 2px ${BORDER_LIGHT};
    }
  }
`;
