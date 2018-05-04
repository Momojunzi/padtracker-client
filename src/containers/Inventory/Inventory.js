import React, {Component} from 'react';
import InputForm from '../../components/InputForm/InputForm.js';
import './Inventory.css';
import axios from 'axios';
import moment from 'moment';
import Navigation from '../Navigation/Navigation'

class Inventory extends Component {
  state = {
    inventory: {
      location:"",
      pads: "",
      handTrucks: "",
      date: ""
    }
  }

  updateInventory = (event) => {
    event.preventDefault();
    const {location, pads, handTrucks} = this.state.inventory;
    const inventory = {
      location: location.trim(),
      pads: parseInt(pads),
      handTrucks: parseInt(handTrucks),
      date: moment().format('MMMM Do YYYY hh:mm a')
    }
    if(inventory.location.length < 7){
      alert("invalid location!")
    }else {
      axios.post('http://35.224.248.214:3001/api/updateInventory', inventory)
        .then((result)=>{console.log("response: " + result)});
    }
    console.log(inventory);
  }

  getFormData = (event) => {
    const state = this.state;
    const target = event.target;
    const value = target.value;
    const inputName = target.id;
    state.inventory[inputName] = value;
    this.setState(state.inventory);
  }

  render() {
    return(
      <div className="card-body">
        <InputForm changeHandler={this.getFormData} clickHandler={this.updateInventory} />
      </div>
    )
  }
}

export default Inventory;
