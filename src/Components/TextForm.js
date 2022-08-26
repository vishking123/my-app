import React from 'react'
// import PropTypes from 'prop-types'
export default function TextForm(props) {
  return (
    <div>
      <form>
  <div className="mb-3">
    <label htmlFor="myBox" className="form-label">{props.heading}</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  {/* <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>  */}
  {/* <div class="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div> 
  );
}

