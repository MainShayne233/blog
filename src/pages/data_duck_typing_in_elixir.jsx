import React, { Component } from 'react'

export default class DataDuckTypingInElixir extends Component {

  render() {
    return (
      <div className="ui raised very padded text container segment">
        <p>
	  Quick, but thorough, definition of Duck Typing:
	</p>
	<p>
	  When an object wants to send a message to (call a method on) another object, it should not care what the other object is, it should only care that it can properly handle the message it is sending it (can respond to the method being called on it). For example, a Nutritionist object may ask an object for its Vitamin C content. It does not care if the other object is a fruit, vegetable, carrot, orange, etc, it only cares that it can respond with its content of that sweet sweet vitamin C.
	</p>
      </div>
    )
  }
}
