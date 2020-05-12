import React from 'react';
import PropTypes from 'prop-types';

import LoadingIndicator from 'components/LoadingIndicator';
import StartTracking from 'components/StartTracking/V2/Form';

import MainHeader from './MainHeader';
import StatSection from './StatSection';
import NoChosenProductsBanner from './NoChosenProductsBanner';

const Main = ({ isProcessing, activeProduct, isVisible, locale }) => (
  <main>
    <MainHeader title={activeProduct && activeProduct.title} />

    <section>
      <StartTracking />

      {isProcessing && <LoadingIndicator />}

      {!activeProduct && <NoChosenProductsBanner />}

      {activeProduct && activeProduct.history && (
        <StatSection
          locale={locale}
          isVisible={isVisible}
          isProcessing={isProcessing}
          history={activeProduct.history}
        />
      )}
    </section>
  </main>
);

Main.propTypes = {
  isProcessing: PropTypes.bool.isRequired,
  activeProduct: PropTypes.object,
  isVisible: PropTypes.bool.isRequired,
  locale: PropTypes.string.isRequired,
};

export default React.memo(Main);
