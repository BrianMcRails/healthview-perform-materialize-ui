import React from 'react';
import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';


var Check = React.createClass({
	checkClasses: function(check_status) {
		return (check_status ? "'checked'" : null);
	},
	render: function(){
		return (
			<FormGroup controlId={this.props.check_name}>
			<FormControl type="checkbox" ref={this.props.id} className="filled-in" 
			checked={this.checkClasses(this.props.check_status)} readOnly='true'/>
      		<ControlLabel>{this.props.check_name}</ControlLabel>
      		<br />
      		<time>  {this.props.formattedDate}</time>

      		</FormGroup> 


		);
	}
});

export default Check;