import React from 'react';
import Fire from '../Images/fire.png'
import Water from '../Images/water.png'
import Grass from '../Images/grass.png'
import Card from './Card';
import PropTypes from 'prop-types';

const Options = {
  0: 'Fire',
  1: 'Water',
  2: 'Grass',
}

const GenerateTitle = (playerSelection) => {
  if (playerSelection !== null) {
    return `You chose ${Options[playerSelection]}`;
  } else {
    return 'Choose Either: Fire, Water or Grass'
  }
}

const GameSelector = ({ onClick, playerSelection, onSubmit, computerSelection, error }) => {
  return (
    <div className="mb-5">
      <Card
        title={GenerateTitle(playerSelection)}
        error={error}
        label={computerSelection === null ? "Submit" : null}
        onClick={onSubmit}
      >
        <div className="container">
          <div className="row mb-3">
            {
              [Fire, Water, Grass].map((ele, index) => {
                let outline = '';
                let outlineOffset='';
                if (index === playerSelection) {
                  outline = 'solid';
                  outlineOffset = '8px';
                }
                return (
                  <div key={index} onClick={ ()=>{ onClick(index) } } className="col">
                    <img alt="item selector" style={{width: 100, height: 100, outline, 'outline-offset': outlineOffset}} src={ele} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </Card>
  </div>
  )
}

GameSelector.propTypes = {
  onClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  playerSelection: PropTypes.number,
  computerSelection: PropTypes.number,
  error: PropTypes.string,
}

export default GameSelector;