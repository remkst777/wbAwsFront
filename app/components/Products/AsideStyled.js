import styled from 'styled-components';
import { BG_LIGHT, TEXT_LIGHT } from 'style-constants';
import hambIcon from 'images/hamb-icon.svg?inline';
import searchIcon from 'images/search.svg?inline';

export default styled.aside`
  background: ${BG_LIGHT};

  header {
    display: flex;
    justify-content: center;
    align-items: stretch;
    position: relative;
    padding: 10px;

    button {
      display: inline-block !important;
      background: url(${hambIcon});
      background-size: contain;
      background-repeat: no-repeat;
      min-width: 30px;
      height: 30px;
    }

    div {
      position: relative;
      display: ${x => (!x.isVisible ? 'none' : '')};
      flex: 1;

      input {
        width: 100%;
        height: 100%;
        background: none;
        outline: none;
        border: none;
        color: ${TEXT_LIGHT};
        padding-left: 15px;
        padding-right: 20px;
      }

      :after {
        content: '';
        background: url(${searchIcon});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        position: absolute;
        right: 0;
        width: 16px;
        height: 100%;
        display: inline-flex;
        align-items: center;
      }
    }
  }

  section {
    overflow-x: hidden;
    display: ${x => (!x.isVisible ? 'none' : '')};

    ul {
      height: ${x => (x.activeProduct ? 'calc(100vh - 300px)' : 'calc(100vh - 50px)')};
      width: calc(100% + 17px);
      overflow-y: scroll;
      padding-bottom: 50px;
      cursor: all-scroll;

      * {
        cursor: all-scroll;
      }
    }
  }
`;
