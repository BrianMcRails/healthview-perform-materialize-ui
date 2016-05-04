import React from 'react';
import PatientsList from './patientslist';
import Paper from 'material-ui/lib/paper';

var PatientBox = React.createClass({
	loadPatientsFromServer: function(){
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
		this.loadPatientsFromServer();
	},
	render: function(){
		let patientBoxStyle = {
			border: "1px solid"
		};
		return(
			<div className="patient-box">
			<Paper zDepth={2} className="card-panel">
				<PatientsList data={this.state.data} />
			</Paper>
			</div>
			);
	}

});

export default PatientBox;