import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as routes from 'routes';
import { BG_LIGHT, BG_PRIMARY_LIGHT, TEXT_DARK } from 'style-constants';
import commonMessages from 'common-messages';

import { flags } from 'utils/shopManagement';

import { ButtonIS } from 'components/Button/Outlined/InfoSmall';
import TranslatedMessage from 'containers/TranslatedMessage';

const Box = styled.li`
  padding: 10px;
  background: ${x => (x.isActive ? BG_PRIMARY_LIGHT : BG_LIGHT)};

  a {
    display: flex;
    flex-direction: column;
    color: ${TEXT_DARK};

    .title {
      letter-spacing: 0.3px;
    }

    .more {
      font-size: 14px;
      margin: 10px 0;

      img {
        width: 12px;
        height: 12px;
        object-fit: contain;
        margin-right: 8px;
      }
    }
  }
`;

const AsideListItem = ({
  isActive,
  id,
  title,
  locale,
  articul,
  shop,
  finishTrackingProcessing,
  finishTrackingDispatch,
}) => (
  <Box isActive={isActive}>
    <Link to={routes.products(id)}>
      <span className="title">{title}</span>
      <span className="more">
        <img src={flags[locale]} alt="flag" />
        <span>{shop}</span>
        {', '}
        <span>{articul}</span>
      </span>
    </Link>

    <div>
      <ButtonIS
        type="button"
        disabled={finishTrackingProcessing}
        onClick={() => finishTrackingDispatch(id)}
      >
        <TranslatedMessage {...commonMessages.delete} />
      </ButtonIS>
    </div>
  </Box>
);

AsideListItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  articul: PropTypes.string.isRequired,
  shop: PropTypes.string.isRequired,
  finishTrackingProcessing: PropTypes.bool.isRequired,
  finishTrackingDispatch: PropTypes.func.isRequired,
};

export default React.memo(AsideListItem);
