import React from 'react';

import Meeting from './Meeting';

import PrivateHeader from './PrivateHeader';

export default () => (
  <div>
    <PrivateHeader title="부동산부자들" />
    <div className="page-content">
      <Meeting />
    </div>
  </div>
);
