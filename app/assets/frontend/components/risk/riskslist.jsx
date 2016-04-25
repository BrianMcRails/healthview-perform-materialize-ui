import React from 'react';
import Risk from './risk';
import { Grid, Row, Col } from 'react-bootstrap';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import Divider from 'material-ui/lib/divider';
import Avatar from 'material-ui/lib/avatar';
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
				<List subheader="Risk Stratification">
						{riskNodes}
				</List>
			</Paper>
			);
	}

});
export default RisksList;