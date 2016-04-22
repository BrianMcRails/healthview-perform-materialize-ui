import React from 'react';
import CountersList from './counterslist';

var CounterBox = React.createClass({
	loadCountersFromServer: function(){
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
		this.loadCountersFromServer();
		setInterval(this.loadCountersFromServer, this.props.pollInterval);
	},
	render: function() {
		return (
			<div className='container'>
				<CountersList data={this.state.data} />
			</div>
		);
	}	
});
export default CounterBox;