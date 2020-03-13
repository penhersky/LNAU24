import React from 'react';

import './loading.scss';

export default (props: any) => {
  return (
    <span className="loading">
      <div className="lds-circle">
        <div>
          <img src="images/Logo.png" alt="" />
        </div>
      </div>
    </span>
  );
};
