import React from 'react';

const GameContainer = ({ title, children }) => {
  return (
    <div className="d-flex flex-column">
      <div id="page-content">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <h1 className="font-weight-light mt-4 text-white">{title}</h1>
              {children && children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default GameContainer;