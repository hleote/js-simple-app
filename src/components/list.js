import React, { Component } from 'react';
import Item from './item'
import Filters from './filters'
import '../App.css';
import { Grid, Col, Row } from 'react-bootstrap'

class List extends Component {

    state = {
        items: [],
        paymentType: '',
        status: ''
    }

    componentDidMount() {
        this.fetchData()
    }
    
    setFilters = async (e) => {
        switch (e.target.name) {
            case 'card':
            case 'cash':
            await this.setState({paymentType: e.target.name})
                break
            case 'successful':
            case 'refunded':
            case 'failed':
            await this.setState({status: e.target.name})
                break
            // no default     
        }
        this.fetchData()
    }

    fetchData = async () => {
        const {paymentType, status} = this.state
        let query = ''
        if (paymentType && status) {
            query = `?paymentType=${paymentType}&status=${status}`
        } else if (paymentType) {
            query = `?paymentType=${paymentType}`
        } else if (status) {
            query = `?status=${status}`
        }
        const items = await fetch(`http://localhost:3001/dataset${query}`, {method: 'GET'})
        this.setState({items: await items.json()})
    }

  render() {
    return (
        <Grid className="app">
            <Row>
                <Col className="filters" xs={12} lg={6}>
                    <Filters setFilters={this.setFilters} />
                </Col>
                <div style={{margin: 30}}>Sales history</div>
                <Col className="transactions" xs={12} lg={6}>
                    {this.state.items.map((item, index) => <Item key={index} {...item} />)}
                </Col>
            </Row>
        </Grid>
    )
  }
}

export default List;
