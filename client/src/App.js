import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: []
    }
  }

  async getBikes() {
    return await axios.get('http://localhost:8000/bikes')
  }

  async componentDidMount(){
    const res = await this.getBikes()
    this.setState({
      data: await res.data.networks
    })
    axios.get("http://localhost:8000/bikes").then((response)=>{
    })
}

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <input type='text' />
      </div>
    );
  }
}

export default App;
