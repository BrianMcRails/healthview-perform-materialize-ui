import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import Checkbox from 'material-ui/lib/checkbox';
import Toggle from 'material-ui/lib/toggle';



var Check = React.createClass({
	checkClasses: function(check_status) {
		return (check_status ? true : false);
	},
	render: function(){
		return (
			<div>
			<ListItem leftCheckbox={<Checkbox defaultChecked={this.checkClasses(this.props.check_status)}/>} 
			primaryText={this.props.check_name} secondaryText={this.props.formattedDate}/>
			<Divider />
			</div>
		);
	}
});

export default Check;