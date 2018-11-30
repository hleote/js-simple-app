import React, { Component } from 'react'
import './item.css'
import FilterButton from './filterbutton'
import { Row, Col } from 'react-bootstrap'



class Filters extends Component {

    render() {
        const {setFilters} = this.props
        return (
            <Row>
                <Col xs={12} sm={4}>
                    <FilterButton name={'card'} type="button" onClick={setFilters} />
                </Col>
                <Col xs={12} sm={4}>
                    <FilterButton name={'cash'} type="button" onClick={setFilters} />
                </Col>
                <Col xs={12} sm={4}>
                    <FilterButton name={'successful'} type="button" onClick={setFilters} />
                </Col>
                <Col xs={12} sm={4}>
                    <FilterButton name={'refunded'} type="button" onClick={setFilters} />
                </Col>
                <Col xs={12} sm={4}>
                    <FilterButton name={'failed'} type="button" onClick={setFilters} />
                </Col>
            </Row>
        )
    }
}

export default Filters
