import React from 'react';
import Check from './check';
import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

var ChecksList = React.createClass({
	render: function(){
		var checkNodes = this.props.data.map(function(check){
			check.formattedDate = moment(check.updated_at).fromNow();
			return(
				<Check key={check.id} {...check} />
				);
		});
		return (
			<div className="card-panel">
				<p className="sectionHeader">Pre-procedure Checklist</p>
				<Form inline action='#'>
					<div className="card-panel checklist">
					{checkNodes}
					</div>
				</Form>
			</div>
			);
	}

});
export default ChecksList;