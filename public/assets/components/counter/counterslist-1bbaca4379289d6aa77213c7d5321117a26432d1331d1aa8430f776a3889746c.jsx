import React from 'react';
import Counter from './counter';
import { Grid, Row, Col } from 'react-bootstrap';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import Checkbox from 'material-ui/lib/checkbox';
import Toggle from 'material-ui/lib/toggle';
import Paper from 'material-ui/lib/paper';

var CountersList = React.createClass({
	render: function(){
		var counterNodes = this.props.data.map(function(counter){
			return(
				<Counter key={counter.id} {...counter} />
				);
		});
		return (
			<div className="card-panel">
				<List subheader="Timers">
						{counterNodes}
				</List>
			</div>
			);
	}

});
export default CountersList;