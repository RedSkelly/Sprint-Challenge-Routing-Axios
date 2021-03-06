import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  
  state = {
    smurfs : []
  }

  componentDidMount() {
    this.getSmurf()
  }


  getSmurf = () => {
    axios.get('http://localhost:3333/smurfs')
      .then(response => { 
        this.setState({ smurfs: response.data })
        console.log(this.state.smurfs)
      })
      .catch(error => { console.error('Server Error', error) })
  }


  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.state.smurfs.map((smurf) => {
            return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;