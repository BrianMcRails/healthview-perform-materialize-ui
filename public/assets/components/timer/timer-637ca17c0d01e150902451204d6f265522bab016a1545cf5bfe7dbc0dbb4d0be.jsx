import React from 'react'
import SecondsTohhmmss from './SecondsTohhmmss'
import { Modal, Button, Popover, OverlayTrigger, Tooltip } from 'react-bootstrap';
/**
 * Timer module
 * A simple timer component.
**/

let Timer = React.createClass({
  getInitialState: function(){
     return {
       clock: 0,
       time: ''
     }
  },
  /**
   * Pause the timer.
  **/
  pause: function() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;

    }
  },
  /** 
   * Play the timer.
  **/
  play: function() {
    if (!this.interval) {
      this.offset   = Date.now();
      this.interval = setInterval(this.update, this.props.options.delay); // 100 is delay
    }
  },
  /** 
   * Reset the timer.
  **/
  reset: function() {
    let clockReset = 0;
    this.setState({clock: clockReset });
    let time = SecondsTohhmmss(clockReset / 1000);
    this.setState({time: time });    
  },
  /** 
   * Increment the timer.
  **/
  update: function() {
    let clock = this.state.clock;
    clock += this.calculateOffset();
    this.setState({clock: clock });
    let time = SecondsTohhmmss(clock / 1000);
    this.setState({time: time });    
  },
  /** 
   * Calculate the offset time.
  **/
  calculateOffset: function() {
    let now = Date.now(),
        o   = now - this.offset;    
    this.offset = now;
    return o;
  },
  componentDidMount: function() {
    //this.play();
  },
  componentWillUnmount: function() {
    this.pause();
  },  
  render: function(){
    
    let timerStyle = {
      margin: "auto",
      padding: "2em"
    };

    let buttonStyle = {
      background: "#fff",
      color: "#666",
      border: "1px solid #ddd",
      margin: "0.25em",
      padding: "0.75em",
      fontWeight: "200"
    };

    let secondsStyles = {
      fontSize: "200%",
      fontWeight: "200",
      lineHeight: "1.5",
      margin: "auto",
      color: "#666"
    };

    return (

      <div style={timerStyle} className="react-timer">
      <h3 style={secondsStyles} className="seconds"> {this.state.time} {this.props.prefix}</h3>          
       <br />
       <Button onClick={this.reset} bsStyle="default" bsSize="sm">reset</Button>
       <Button onClick={this.play} bsStyle="default" bsSize="sm">start</Button>
       <Button onClick={this.pause} bsStyle="default" bsSize="sm">pause</Button>
      </div>
    );
  }
});

module.exports = Timer;