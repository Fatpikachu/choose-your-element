import React from 'react';
import PropTypes from 'prop-types';

const Card = ({title, label, subtitle, onClick, children, error}) => {
  return (
    <div className="card">
      <h5 className="card-header">{title}</h5>
      <div className="card-body">
        {
          error &&
          <div className="alert alert-danger">{error}</div>
        }
        <h5 className="card-title">{subtitle}</h5>
        {
          children &&
          children
        }
        {
          label &&
          <button onClick={onClick} className="btn btn-primary">{label}</button>
        }
      </div>
    </div>
  )
}

Card.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  label: PropTypes.string,
  subtitle: PropTypes.string,
  error: PropTypes.string,
}

Card.defaultProps = {
  onClick: () => console.error('No onClick provided to Card.js'),
}

export default Card;