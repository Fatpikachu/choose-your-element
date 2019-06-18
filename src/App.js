import React, { Component } from 'react';
import Card from './Components/Card';
import GameSelector from './Components/GameSelector';
import Randomizer from './Components/Randomizer';
import Selection from './Components/Selection';
import GameContainer from './Containers/GameContainer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      computerSelection: null,
      playerSelection: null,
      error: null,
    }
    this.resetGame = this.resetGame.bind(this);
    this.startGame = this.startGame.bind(this);
    this.setPlayerSelection = this.setPlayerSelection.bind(this);
    this.submitPlayerSelection = this.submitPlayerSelection.bind(this);
    this.generateComputerSelection = this.generateComputerSelection.bind(this);
  }

 generateComputerSelection() {
   let computerSelection = Math.floor(Math.random() * 3);
   this.setState({ computerSelection })
   this.setState((state) => {
     return { computerSelection }
   })
 }

  startGame() {
    this.setState({step: 1})
  }

  setPlayerSelection(index) {
    if (this.state.computerSelection) {
      return;
    }
    this.setState((state) => {
      return { playerSelection: index, error: null }
    });
  }

  resetGame() {
    this.setState({step: 1, computerSelection: null, playerSelection: null})
  }

  submitPlayerSelection() {
    if (this.state.playerSelection === null) {
      this.setState({error: "You must make a selection."});
      return;
    }
    this.generateComputerSelection();
    this.setState({step: 2});
    setTimeout(
      () => { this.setState({ step: 3 }) }
      ,2500
    )
  }

  render() {
    return (
      <div>
          <GameContainer title="Choose your element">
            {
              this.state.step === 0 ?
              <Card
                label="Get Started"
                subtitle="Click Below to Get Started"
                onClick={this.startGame}
              />
            :
            <GameSelector
              onSubmit={this.submitPlayerSelection}
              playerSelection={this.state.playerSelection}
              error={this.state.error}
              computerSelection={this.state.computerSelection}
              onClick={this.setPlayerSelection}
            />
          }
          {
            this.state.step === 2 &&
            <Randomizer />
          }
          {
            this.state.step === 3 &&
            <Selection
              computerSelection={this.state.computerSelection}
              playerSelection={this.state.playerSelection}
              onClick={this.resetGame}
            />
          }
          </GameContainer>
      </div>
    );
  }
}

export default App;