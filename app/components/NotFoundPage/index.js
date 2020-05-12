import React from 'react';
import TranslatedMessage from 'containers/TranslatedMessage';

import messages from './messages';

export default function NotFound() {
  return (
    <div>
      <h1>
        <TranslatedMessage {...messages.header} />
      </h1>
    </div>
  );
}
