import React from 'react';
import Risk from './risk';
import { Grid, Row, Col } from 'react-bootstrap';

var RisksList = React.createClass({
	render: function(){
		var riskNodes = this.props.data.map(function(risk){
			risk.formattedDate = moment(risk.updated_at).fromNow();
			return(
				<Risk key={risk.id} {...risk} />
				);
		});
		return (
			<div className="card-panel">
				<p>Risk Scores</p>
				<Grid>
					<Row className="show-grid">
						{riskNodes}
					</Row>
				</Grid>
			</div>
			);
	}

});
export default RisksList;