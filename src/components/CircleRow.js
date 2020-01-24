import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import './circle.css';

class CircleRow extends Component {

    /* state={
        value:Array(6).fill(false)
    }
    change(){
        this.setState({
            value:!this.state.value
        })
    } */

    /* state={
        value:true
    }
    change(){
        this.setState({
            value:!this.state.value
        })
    } */

    render() { 
        return (
            <React.Fragment>
                {/* <Col onClick={()=>{this.props.onIncrement();this.change()}}>
                    <span className={"dot " +(this.state.value ? "" : "badge-danger ")}></span>
                </Col> */}
                <Col onClick={this.props.onIncrement}><span className="dot"></span></Col>
                <Col onClick={this.props.onIncrement}><span className="dot"></span></Col>
                <Col onClick={this.props.onIncrement}><span className="dot"></span></Col>
                <Col onClick={this.props.onIncrement}><span className="dot"></span></Col>
                <Col onClick={this.props.onIncrement}><span className="dot"></span></Col>
                <Col onClick={this.props.onIncrement}><span className="dot"></span></Col>
            </React.Fragment>
            
        );
    }
}
 
export default CircleRow;