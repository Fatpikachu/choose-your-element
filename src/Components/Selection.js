import React, { Component } from 'react';
import Fire from '../Images/fire.png'
import Water from '../Images/water.png'
import Grass from '../Images/grass.png'
import Card from './Card';

class Selection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertMessage: ''
    }
  }

  componentDidMount() {
    // 0 = Fire, 1 = Water, 2 = Grass
    let computerSelection = this.props.computerSelection;
    let playerSelection = this.props.playerSelection;

    // handle tie
    if (computerSelection === playerSelection) {
      this.setState({alertMessage: 'tie!'})
    }

    // handle wins
    if (computerSelection === 0 && playerSelection === 1) {
      this.setState({alertMessage: 'Water extinguishes Fire. You win!', doesPlayerWin: true})
    }
    if (computerSelection === 1 && playerSelection === 2) {
      this.setState({alertMessage: 'Grass absorbs Water. You win!', doesPlayerWin: true})
    }
    if (computerSelection === 2 && playerSelection === 0) {
      this.setState({alertMessage: 'Fire burns Grass. You win!', doesPlayerWin: true})
    }

    // handle losses
    if (computerSelection === 1 && playerSelection === 0) {
      this.setState({alertMessage: 'Water extinguishes Fire. You lose!', doesPlayerWin: false})
    }
    if (computerSelection === 2 && playerSelection === 1) {
      this.setState({alertMessage: 'Grass absorbs Water. You lose!', doesPlayerWin: false})
    }
    if (computerSelection === 0 && playerSelection === 2) {
      this.setState({alertMessage: 'Fire burns Grass. You lose!', doesPlayerWin: false})
    }
  }

  render() {
    let computerIs;
    this.props.computerSelection === 0 
    ? computerIs = 'Fire'
    : this.props.computerSelection === 1
    ? computerIs = 'Water'
    : computerIs = 'Grass'
    return (
      <div>
        {
          this.state.doesPlayerWin ?
          <div className="alert alert-success">{this.state.alertMessage}</div>
          :
          <div className="alert alert-danger">{this.state.alertMessage}</div>
        }
        <Card
          title={`Computer chose ${computerIs}`}
          onClick={this.props.onClick}
          label={'Play Again?'}
        >
        <div className="container">
          <div className="row mb-3">
            {
              [Fire, Water, Grass].map((ele, index) => {
                let outline = '';
                let outlineOffset = '';
                if (index === this.props.computerSelection) {
                  outline = 'solid';
                  outlineOffset = '8px';
                }
                return (
                  <div key={index} className="col">
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
}

export default Selection;