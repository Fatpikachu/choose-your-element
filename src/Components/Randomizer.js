import React, { Component } from 'react';
import Fire from '../Images/fire.png'
import Water from '../Images/water.png'
import Grass from '../Images/grass.png'
import Card from './Card';

class Randomizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    }
  }

  componentDidMount() {
  this.interval = setInterval(() => {
    let selected = this.state.selected;
    if (selected === 2) {
      selected = 0;
    } else {
     selected++;
    }
    this.setState({ selected });
  }, 200);
}

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        <Card
          title="Computer Selection..."
        >
          <div className="container">
            <div className="row mb-3">
              {
                [Fire, Water, Grass].map((ele, index) => {
                  let outline = '';
                  let outlineOffset = '';
                  if (index === this.state.selected) {
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

export default Randomizer;