import React, { Component } from 'react';
import './App.css';
import Generator from './sevices/tf_generator'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      init: false,
    }
  }

  componentDidMount() {
    this.generator = new Generator()
  }

  generateImages = async () => {
    await this.generator.generate()
  }

  renderGrid = () => {
    return (
      <div className="gird-container">
        {Array(64).fill(1).map((_, index) => (
            <canvas
              style={{
                border: '1px solid rgba(0, 0, 0, 0.8)',
              }}
              height="64"
              width="64"
              id={`generate-output-${index}`}
              key={`generate-output-${index}`}
            />
        ))}
      </div>
    )
  }
  
  render() {
    return (
      <div className="App">
         <div className="center"><h1 className="text">WGAN-GP Anime Icon Generator</h1></div>
         <img src="./images/demo.png" alt="demo"></img>
         {this.renderGrid()}
         <div className="center">
          <button onClick={() => this.generateImages()}>Generate</button>
          <span className="text">Model trained on pytorch, transfer to ONNX -> Tensorflow -> TFJS</span>
          <span className="text">Unknown loss happened during the model transform</span>
        </div>
      </div>
    );
  }
}

export default App;
