import React from 'react'
import './item.css'
import { Button, Row, Col } from 'react-bootstrap'


const FilterButton = ({onClick, name}) =>{

    return (
        <Row>
            <Col style={{width: '100%'}} xs={12} sm={4}>
                <Button name={name} type="button" onClick={onClick}>{name}</Button>
            </Col>
        </Row>
    )
}

export default FilterButton
