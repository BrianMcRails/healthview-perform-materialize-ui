import React from 'react';
import ChecksList from './checkslist';
import { Col } from 'react-bootstrap';

var CheckBox = React.createClass({
	loadChecksFromServer: function(){
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function(){
		return {data: []};
	},
	componentDidMount: function(){
		this.loadChecksFromServer();
		setInterval(this.loadChecksFromServer, this.props.pollInterval);
	},
	render: function() {
		return (
				<Col xs={12} sm={6} md={4}>
					<ChecksList data={this.state.data} />
				</Col>
		);
	}	
});
export default CheckBox;