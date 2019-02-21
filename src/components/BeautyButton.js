import React from 'react';
import PropTypes from 'prop-types';

const BeautyButton = (props) => <button className={`btn btn-${props.color}`} onClick={props.onClick} style={{backgroundColor: props}}>{props.label}</button>;

BeautyButton.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default BeautyButton;