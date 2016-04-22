import React from 'react';
import Counter from './counter';
import { Grid, Row, Col } from 'react-bootstrap';

var CountersList = React.createClass({
	render: function(){
		var counterNodes = this.props.data.map(function(counter){
			return(
				<Counter key={counter.id} {...counter} />
				);
		});
		return (
			<div className="card-panel">
				<p>Timers</p>
				<Grid>
					<Row className="show-grid">
						{counterNodes}
					</Row>
				</Grid>
			</div>
			);
	}

});
export default CountersList;