import styled from 'styled-components';

export default styled.form`
  position: relative;

  input {
    width: 100%;
    height: 100%;
  }

  .q1 {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    display: flex;
    align-items: stretch;

    > div {
      display: flex;
      align-items: stretch;
    }
  }
`;
