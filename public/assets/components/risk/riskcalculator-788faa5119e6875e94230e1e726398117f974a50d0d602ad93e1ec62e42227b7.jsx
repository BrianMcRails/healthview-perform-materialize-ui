import React from 'react';
import { Modal, Button, Popover, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Gauge from '../gauge/gauge';

var RiskCalculator = React.createClass({

  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },
    riskWeight: function(weight){
    switch (weight){
      case 'Low':
      return("success");
      break;
      case 'Medium':
      return("warning");
      break;
      case 'High':
      return("danger");
      break;
      default:
      return("default");
      break;
    };
  },

  render() {
  
    return (
      <div className="calculator">
      <OverlayTrigger placement="right" 
              overlay={<Popover id= {this.props.id} title={this.props.risk_score_title}>Risk is <strong>{this.props.risk_weight}.</strong>
                {this.props.risk_comment}</Popover>}>
        <Button className="risk-grid-button"
          bsStyle={this.riskWeight(this.props.risk_weight)}
          bsSize="lg"
          onClick={this.open}
        >
          {this.props.risk_percent}
        </Button>
        </OverlayTrigger><br />

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.risk_score_title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Risk Score</h4>
            <p>{this.props.risk_percent}</p>

            <h4>Severity</h4>
            <p>{this.props.risk_weight}</p>

            <h4>Notes</h4>
            <p>{this.props.risk_comment}</p>

            <hr />
            <Gauge value={15}
                   size={20}
                   radius={100}
                   sections={["#8cc152", "#ffb74d", "#ffb74d", "#e84528", "#e84528", "#e84528"]}
                   arrow={{height: 60, width: 6, color: "#ccc"}}
                   legend={['0Gb', '2Gb', '4Gb', '6Gb', '8Gb', '10Gb']}
                   label="15%"/>
           </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
        </div>
      
    );
  }
});
export default RiskCalculator;