import React, {useState} from 'react'


export default function TextForm(props) {
    const [text,setText]= useState("Enter text here");
    // text ="values"; -- wrong way
    // setText("values");  --correct way
    const handleUpClick =()=>{
        console.log("Uppercase was clicked");
        setText("You have clicked on UpperCase");
    }
    const handleOnChange =()=>{
        console.log("OnChange Handled");
    }

  return (
    <div>
      <form>
  <div className="mb-3">
    <label htmlFor="myBox" className="form-label">{props.heading}</label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div>

  <button type="submit" className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
</form>
    </div> 
  );
}

