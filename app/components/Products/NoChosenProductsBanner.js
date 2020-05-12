import React from 'react';
import styled from 'styled-components';

import nodataIcon from 'images/nodata.svg?inline';

import commonMessages from 'common-messages';

import TranslatedMessage from 'containers/TranslatedMessage';

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  opacity: 0.7;
  margin-top: 50px;

  img {
    width: 280px;
    margin-right: 20px;
  }
`;

const NoChosenProductsBanner = () => (
  <Box>
    <img src={nodataIcon} alt="banner" />
    <div>
      <TranslatedMessage {...commonMessages.nothingSelected} />
    </div>
  </Box>
);

export default React.memo(NoChosenProductsBanner);
