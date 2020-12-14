import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState(previousState => {
      if(event.key !== "Backspace")
      return{
        maxChars : previousState.maxChars - 1,
        message : event.target.value
      }
        }
    )
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        name="message" 
        id="message" 
        value={this.state.message}
        onChange = {event => this.handleChange(event)}
         />
        Remaining characters: {this.state.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;
