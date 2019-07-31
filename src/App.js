import React from 'react';
import './App.css';
import Header from './components/Header';
import WeatherInfo from './components/WeatherInfo';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      days: [
        {day:'Monday', weather:'Sunny', img:'Sunny'},
        {day:'Thuesday', weather:'Cloudy', img:'Cloudy'},
        {day:'Wednesday', weather:'Rainy', img:'HeavyRain'},
        {day:'Thursday', weather:'Stormy', img:'CloudRainThunder'},
        {day:'Friday', weather:'Snowy', img:'HeavySnow'},
        {day:'Saturday', weather:'Windy', img:'Cloudy'}
      ]
    };
  }
  render(){
      return (
        <div className="App-container">
        <Header></Header>
        <div className="App">
        <WeatherInfo days={this.state.days}></WeatherInfo>
        </div>
      </div>
    
    );
  }
}

export default App;
