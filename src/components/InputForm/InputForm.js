import React from 'react';
import "./InputForm.css";

const InputForm = (props) => {
  return (
    <form className="row justify-content-around">
      <div className="form-group col-11 text-left">
        <label for="location">Location</label>
        <input className="form-control" id="location" placeholder="ex. 0522-10" onChange={props.changeHandler}/>
      </div>
      <div className="form-group col-11 text-left">
        <label for="pads">Number of pads in doz</label>
        <input className="form-control" id="pads" placeholder="ex. 10 doz" onChange={props.changeHandler}/>
      </div>
      <div className="form-group col-11 text-left">
        <label for="handTrucks">Number of hand trucks</label>
        <input className="form-control" id="handTrucks" placeholder="ex. 10" onChange={props.changeHandler}/>
      </div>
      <div className="form-group coll-11 form-btn">
        <button className="btn btn-lg btn-success" onClick={props.clickHandler}>Submit</button>
      </div>
    </form>
  )
}

export default InputForm;
