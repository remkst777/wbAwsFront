import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { DAEMON } from 'utils/constants';

import Box from 'components/Toasts/Box';

import reducer from './reducer';
import saga from './saga';

import { selectToasts } from './selectors';

import { removeToast } from './actions';

const key = 'toasts';

export function Toasts({ toasts, removeToastDispatch }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga, mode: DAEMON });

  return (
    <Box>
      {Object.keys(toasts).map(toastKey => (
        <li
          onClick={() => removeToastDispatch(toastKey)}
          className={toasts[toastKey].toastType}
        >
          {toasts[toastKey].message}
        </li>
      ))}
    </Box>
  );
}

Toasts.propTypes = {
  toasts: PropTypes.object.isRequired,
  removeToastDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  toasts: selectToasts(),
});

function mapDispatchToProps(dispatch) {
  return {
    removeToastDispatch: bindActionCreators(removeToast, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Toasts);
