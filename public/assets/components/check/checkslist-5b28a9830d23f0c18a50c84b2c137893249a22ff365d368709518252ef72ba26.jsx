import React from 'react';
import Check from './check';
import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import Checkbox from 'material-ui/lib/checkbox';
import Toggle from 'material-ui/lib/toggle';
import Paper from 'material-ui/lib/paper';

var ChecksList = React.createClass({
	render: function(){
		var checkNodes = this.props.data.map(function(check){
			check.formattedDate = moment(check.updated_at).fromNow();
			return(
				<Check key={check.id} {...check} />
				);
		});
		return (
			<Paper zDepth={2}>
				<List subheader="Pre-procedure Checklist">
					{checkNodes}
				</List>
			</Paper>
			);
	}

});
export default ChecksList;