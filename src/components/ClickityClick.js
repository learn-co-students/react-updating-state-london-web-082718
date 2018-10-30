// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {

  constructor() {
    super();
    this.state = {
      hasBeenClicked: false,
      currentTheme: 'red',
    }
  } 

  handleClick = () => {
    this.setState({
      hasBeenClicked: true
    })
    console.log(this.state.hasBeenClicked) // sets to false :( - even though we just set to true
  }

  // handleClick = () => {
  //   this.setState({
  //     hasBeenClicked: true
  //   }, () => console.log(this.state.hasBeenClicked)) // prints true   - OPTIONAL ARGUMENT (arrow function) in setState 
  // }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }

}
export default ClickityClick;