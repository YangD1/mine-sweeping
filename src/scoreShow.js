import React from 'react'

class GameOver extends React.Component {
  render(){
    const element = (
      <div style={this.props.scoreShow ? {display: "flex"} : {display: "none"}} className="score-show">
        <div className="title">
          Game Over!
        </div>
        <div>
          Game Info:
          
        </div>
        <div className="button">
          <button 
            onClick={this.props.gameAgain}
            className='gameButton'
          >Continue ?</button>
        </div>
      </div>
    );
    return element;
  }
}

export default GameOver;