import React from 'react';
import { OverlayTrigger, Popover, Button, ButtonToolbar } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import RiskCalculator from './riskcalculator';

var Risk = React.createClass({
	riskWeight: function(weight){
		switch (weight){
			case 'Low':
			return("success");
			break;
			case 'Medium':
			return("warning");
			break;
			case 'High':
			return("danger");
			break;
			default:
			return("default");
			break;
		};
	},

	render: function(){
		return (
			<Col sm={6} md={4} className="card-panel">
            	<p><strong>{this.props.risk_score_title}</strong></p>

      			<RiskCalculator {...this.props}/>

     			<time className="updated-time">Last updated: {this.props.formattedDate}</time>
    		</Col>
		);
	}
});

export default Risk;