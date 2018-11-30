import React, { Component } from 'react';
import './item.css';
import { Row, Col } from 'react-bootstrap'


class Item extends Component {

  render() {
      const {date, status, amount, paymentType} = this.props
    return (
        <Row className="column">
            <Col xs={12} sm={4}>
                <div className="field date">{date}</div>
                <div className="field status">{status}</div>
                <div className="field">{paymentType}</div>
                <div className="field">{amount}€</div>
            </Col>
        </Row>
    );
  }
}

export default Item;
