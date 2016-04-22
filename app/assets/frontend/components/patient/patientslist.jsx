import React from 'react';
import Patient from './patient';

var PatientsList = React.createClass({
	render: function(){
		var patientNodes = this.props.data.map(function(patient){
			return(
				<Patient key={patient.id} {...patient} />
				);
		});
	return (
		<div className="row">
			{patientNodes}
		</div>
		);
	}
});

export default PatientsList;