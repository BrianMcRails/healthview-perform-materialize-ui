import React from 'react';

var Patient = React.createClass({
	render: function(){
		return(
		<div className="col s12 patient-box">
			<img className="circle" src={this.props.gravatar} />
			<p className="mrn-info">{this.props.name}</p>
		</div>
		);
	}
});

export default Patient;