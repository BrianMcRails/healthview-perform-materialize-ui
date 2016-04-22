import React from 'react';
import { OverlayTrigger, Popover, Button, ButtonToolbar } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import RiskCalculator from './riskcalculator';

import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';

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
			<GridTile className="risk-grid-tile" key={this.props.id} title={this.props.risk_score_title} 
				subtitle={<time>Last updated: {this.props.formattedDate}</time>}>
        			<RiskCalculator {...this.props}/>
    		</GridTile>
		);
	}
});

export default Risk;