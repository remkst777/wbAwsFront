import styled from 'styled-components';
import { BG_SUCCESS, TEXT_LIGHT } from 'style-constants';

export default styled.div`
  display: flex;
  min-height: inherit;
  min-width: inherit;

  header {
    display: flex;
    align-items: center;
    background: ${BG_SUCCESS};
    color: ${TEXT_LIGHT};
    height: 50px;
  }

  aside {
    width: ${x => (x.isVisible ? '275px' : '50px')};
  }

  main {
    width: ${x => (x.isVisible ? 'calc(100vw - 275px)' : 'calc(100vw - 50px)')};
    background: linear-gradient(
      to top,
      #fdbe9d95 0%,
      #fdbe9d35 20%,
      #4da0b045 60%,
      #4da0b090 90%
    );

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: ${BG_SUCCESS}c9;
      padding-left: 20px;
      padding-right: 20px;

      > div:nth-child(1) {
        display: flex;
        align-items: center;
        height: 100%;
        padding-right: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      > div:nth-child(2) {
        display: flex;
      }
    }

    section {
      padding: 20px;

      > * {
        margin-bottom: 20px;
      }
    }
  }
`;
