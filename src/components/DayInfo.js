import React from 'react';
import '../App.css';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  handleClick = (data,event) => {
      event.preventDefault();  
      this.props.titleChanger(data);
  }
  render(){
      return (
        <li onClick={this.handleClick.bind(this,this.props.data)} key={this.props.data.day}><span id="day-title">{this.props.data.day}</span><span>{this.props.data.weather}</span><img alt={this.props.data.img} src={`./images/${this.props.data.img}.gif`}></img></li>
    );
  }
}

export default App;
