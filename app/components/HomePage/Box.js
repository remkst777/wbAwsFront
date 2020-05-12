import styled from 'styled-components';
import bg from 'images/homepage-banner.jpg';

export default styled.div`
  position: relative;
  background-image: url(${bg});
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    background: rgba(29, 37, 45, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
`;
