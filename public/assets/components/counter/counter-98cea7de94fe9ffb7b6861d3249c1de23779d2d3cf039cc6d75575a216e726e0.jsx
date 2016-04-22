import React from 'react';
import { OverlayTrigger, Popover, Button, ButtonToolbar } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import Timer from '../timer/timer';


let OPTIONS = { prefix: 'seconds elapsed!', delay: 100};
var Counter = React.createClass({

	render: function(){
		return (
			<Col sm={6} md={4} className="card-panel">
            	<p><strong>{this.props.counter_title}</strong></p>
      			<Timer options={OPTIONS} {...this.props}/>
    		</Col>

		);
	}
});

export default Counter;