import React from 'react';

var Patient = React.createClass({
	render: function(){
		return(
		<div className="col s12">
			<img className="circle" src={this.props.gravatar} />
			<p>{this.props.name}</p>
		</div>
		);
	}
});

export default Patient;