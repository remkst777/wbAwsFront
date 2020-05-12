import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  > div:not(:last-child) {
    margin-bottom: 18px;
  }
`;
