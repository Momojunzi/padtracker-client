import React, {Component} from 'react';
import axios from 'axios';
import './ViewInventory.css';
import Navigation from '../Navigation/Navigation'

class ViewInventory extends Component {

  state = {
    inventory:[],
    pads: 0,
    ht: 0
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory = () => {
    axios.get("http://localhost:3001/api/getInventory")
      .then(result => {
        this.setState({inventory: result.data}, ()=>{this.totalAcc()})
      })
  }

  totalAcc = () => {
    const pads = this.state.inventory.map(entry=>{
      return entry.pads;
    }).reduce((start, entry)=>{
      return start+entry;
    })
    const ht = this.state.inventory.map(entry =>{
      return entry.handTrucks;
    }).reduce((start, entry)=>{
      return start+entry;
    })
    this.setState({pads, ht});
  }

  render () {
    const inv = this.state.inventory.map(entry=>{
      return(
          <tr>
            <td>{entry.location}</td>
            <td>{entry.pads}</td>
            <td>{entry.handTrucks}</td>
          </tr>
      )
    })

    return (
      <div className="card-body my-auto">
      <table className="table">
        <thead className="table-head">
          <tr>
            <th scope="col">Location</th>
            <th scope="col"># of Pads</th>
            <th scope="col"># of Hand Trucks</th>
          </tr>
        </thead>
        <tbody>
          {inv}
          <tr>
            <td>District Total</td>
            <td>{this.state.pads}</td>
            <td>{this.state.ht}</td>
          </tr>
        </tbody>
      </table>
      </div>
    )
  }
}

export default ViewInventory;
