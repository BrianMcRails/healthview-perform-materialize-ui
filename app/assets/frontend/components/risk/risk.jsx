import React from 'react';
import { OverlayTrigger, Popover, Button, ButtonToolbar } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import RiskCalculator from './riskcalculator';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import Divider from 'material-ui/lib/divider';
import Avatar from 'material-ui/lib/avatar';
import FileFolder from 'material-ui/lib/svg-icons/file/folder';

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
    let riskStyle = {
      margin: "auto",
      paddingRight: "3em",
      textAlign: "right"
    };
		return (
			<div>
			<ListItem style={riskStyle} leftAvatar={<Avatar icon={<RiskCalculator {...this.props} />} />}
			primaryText={this.props.risk_score_title} 
			secondaryText={this.props.formattedDate}/>
			<Divider />
			</div>
		);
	}
});

export default Risk;
