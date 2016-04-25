import React from 'react';
import PatientsList from './patientslist';

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
		let patientStyle ={
			margin: "auto",
			display: "block"
		};
		return(
			<div style={patientStyle} className="patient-box">
				<PatientsList data={this.state.data} />
			</div>
			);
	}

});

export default PatientBox;