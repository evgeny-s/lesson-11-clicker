import React from 'react';
import PropTypes from 'prop-types';

const CountViewer = (props) => {
  return <div className="card">
    <div className="card-body">
      {props.value}
    </div>
  </div>;
};

CountViewer.propTypes = {
  value: PropTypes.string,
};

export default CountViewer;