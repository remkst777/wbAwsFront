/**
 *
 * ModalDialog
 *
 */

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import ModalStyled from './ModalStyled';
import Blanket from './Blanket';

const modalRoot = document.getElementById('modal');

/* eslint no-empty: 0 */
function ModalDialog({ show, closeModal, children }) {
  const [el] = useState(document.createElement('div'));

  useEffect(() => {
    try {
      if (show && !modalRoot.childElementCount) {
        modalRoot.appendChild(el);
      } else if (!show && modalRoot.childElementCount) {
        modalRoot.removeChild(el);
      }

      return () => {
        if (show && modalRoot.childElementCount) {
          modalRoot.removeChild(el);
        }
      };
    } catch (err) {}
  }, [show]);

  return ReactDOM.createPortal(
    <>
      <ModalStyled>{children}</ModalStyled>
      <Blanket onClick={closeModal} />
    </>,
    el,
  );
}

ModalDialog.propTypes = {
  show: PropTypes.bool,
  closeModal: PropTypes.func,
  children: PropTypes.any,
};

export default React.memo(ModalDialog);
