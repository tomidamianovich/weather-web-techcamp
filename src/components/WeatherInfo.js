import React from 'react';
import '../App.css';
import DayInfo from './DayInfo';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: `Today is ${this.props.days[0].day} and it is ${this.props.days[0].weather}`
    };
    this.changeTitle = this.changeTitle.bind(this);
  }
  changeTitle(data) {
    // e.preventDefault();
    // console.log("sdsada");
    this.setState({
        title: `On ${data.day} it will be ${data.weather}`
      });
    // this.setState({title: `On ${data.day} it will be ${data.weather}`});
  }
  render(){
      return (
       <React.Fragment>
        <span id="title">{this.state.title}</span>
        <div className="days-container">
            {this.props.days.map(data => <DayInfo data={data} titleChanger={this.changeTitle}></DayInfo>)}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
