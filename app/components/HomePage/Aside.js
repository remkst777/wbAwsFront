import styled from 'styled-components';

export default styled.aside`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100px;
  height: inherit;
  background: #111922;
  padding: 20px 20px 30px 20px;

  &,
  div.bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
      background: none;
    }
  }

  div.bottom {
    padding: 0 8px;
  }
`;
