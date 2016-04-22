import React from 'react';
import Risk from './risk';
import { Grid, Row, Col } from 'react-bootstrap';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import Paper from 'material-ui/lib/paper';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 400,
    overflowY: 'auto',
    marginBottom: 24,
  },
};
var RisksList = React.createClass({
	render: function(){
		var riskNodes = this.props.data.map(function(risk){
			risk.formattedDate = moment(risk.updated_at).fromNow();
			return(
				<Risk key={risk.id} {...risk} />
				);
		});
		return (
			<Paper zDepth={2} className="card-panel">
				<div style={styles.root}>
					<GridList cellHeight={200} style={styles.gridList}>
							{riskNodes}
					</GridList>
				</div>
			</Paper>
			);
	}

});
export default RisksList;