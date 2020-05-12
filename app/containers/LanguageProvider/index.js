import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeLocale } from './actions';

export function LanguageProvider({ children, changeLocaleDispatch }) {
  useEffect(() => {
    const locale = localStorage.getItem('locale');
    changeLocaleDispatch(locale);
  });

  return children;
}

LanguageProvider.propTypes = {
  children: PropTypes.element.isRequired,
  changeLocaleDispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    changeLocaleDispatch: bindActionCreators(changeLocale, dispatch),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(LanguageProvider);
