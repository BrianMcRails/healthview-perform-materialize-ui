import React from 'react';
import { OverlayTrigger, Popover, Button, ButtonToolbar } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import Timer from '../timer/timer';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import Checkbox from 'material-ui/lib/checkbox';
import Toggle from 'material-ui/lib/toggle';


let OPTIONS = { prefix: 'seconds elapsed!', delay: 100};
var Counter = React.createClass({

	render: function(){
		return (
			<div>
			<ListItem>
				<p>{this.props.counter_title}</p>
				<Timer options={OPTIONS} {...this.props}/>
			</ListItem>
			<Divider />
      			
    		</div>

		);
	}
});

export default Counter;