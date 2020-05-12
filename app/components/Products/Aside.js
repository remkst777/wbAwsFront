import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from 'components/LoadingIndicator';

import ActiveProduct from './ActiveProduct';
import AsideListItem from './AsideListItem';
import AsideStyled from './AsideStyled';

const Aside = ({
  userProducts,
  finishTrackingProcessing,
  finishTrackingDispatch,
  activeProduct,
  isProcessing,
  isVisible,
  setVisibility,
}) => {
  const [textInput, changeText] = useState('');

  return (
    <AsideStyled isVisible={isVisible} activeProduct={activeProduct}>
      <header>
        <button
          className="toggle"
          type="button"
          onClick={() => setVisibility(!isVisible)}
        />
        <div>
          <input
            value={textInput}
            onChange={e => changeText(e.target.value)}
            type="text"
          />
        </div>
      </header>

      <section>
        {activeProduct && (
          <ActiveProduct>
            <img src={activeProduct.image} alt={activeProduct.title} />
          </ActiveProduct>
        )}

        {isProcessing && <LoadingIndicator />}

        <ul>
          {userProducts
            .filter(x =>
              JSON.stringify(x)
                .toLowerCase()
                .includes(textInput),
            )
            .map(x => (
              <AsideListItem
                isActive={activeProduct && activeProduct.id === x.id}
                key={x.id}
                id={x.id}
                title={x.title}
                locale={x.locale}
                articul={x.articul}
                shop={x.shop}
                finishTrackingProcessing={finishTrackingProcessing}
                finishTrackingDispatch={finishTrackingDispatch}
              />
            ))}
        </ul>
      </section>
    </AsideStyled>
  );
};

Aside.propTypes = {
  userProducts: PropTypes.array,
  finishTrackingProcessing: PropTypes.bool.isRequired,
  finishTrackingDispatch: PropTypes.func.isRequired,
  activeProduct: PropTypes.object,
  isProcessing: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired,
  setVisibility: PropTypes.func.isRequired,
};

export default React.memo(Aside);
