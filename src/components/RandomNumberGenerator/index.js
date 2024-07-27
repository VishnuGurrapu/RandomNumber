// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}
  onClick = () => {
    this.setState({
      num: Math.floor(Math.random() * 100),
    })
  }
  render() {
    const {num} = this.state

    return (
      <div className="bgCon">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button onClick={this.onClick} className="btn">
            Generate
          </button>
          <p className="Number">{num}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
