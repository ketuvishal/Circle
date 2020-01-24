import React from 'react';
import './App.css';
import {Container, Row, Button } from 'react-bootstrap';
import CircleRow from './components/CircleRow';
import Score from './components/Score';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      randomNumber:0,
      final:0,
      circle:Array(36).fill(0)
    }
  }
  
  generateRandomNumber = (min, max) => {
    const random = (Math.floor(Math.random() * (max - min + 1)) + min)
    const newCircle =Array(36).fill(0);
    newCircle[random]=1;
    this.setState({
      randomNumber: random,
      circle:newCircle
    })
  }

  alertBox =()=>{
    alert('Your Final Score is ' +this.state.final)
    this.setState({final:0});
  }

  handleIncrement = () =>{
    this.setState({final:this.state.final+1});
  }

  render() {
    console.log(this.state.randomNumber,this.state.circle);
    return (
      <React.Fragment>    
        <div>
          <Score value={this.state.final}/>
          <span>&nbsp;&nbsp;</span>
          <Container>
            <Row className='ps'>
              <CircleRow onIncrement={this.handleIncrement}/>
            </Row>
            <Row className='ps'>
              <CircleRow onIncrement={this.handleIncrement}/>
            </Row>
            <Row className='ps'>
              <CircleRow onIncrement={this.handleIncrement}/>
            </Row>
            <Row className='ps'>
              <CircleRow onIncrement={this.handleIncrement}/>
            </Row>
            <Row className='ps'>
              <CircleRow onIncrement={this.handleIncrement}/>
            </Row>
            <Row className='ps'>
              <CircleRow onIncrement={this.handleIncrement}/>
            </Row>
          </Container>
        </div>
        <div style={{textAlign:"center"}}>
          <Button onClick={()=>{this.generateRandomNumber(0,35)}} className='btn btn-primary'>Play</Button>
          <span>&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;</span>
          <Button onClick={this.alertBox} className='btn btn-warning'>Stop</Button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
