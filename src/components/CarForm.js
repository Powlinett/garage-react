import * as React from 'react'

// TODO: handle form state and submit

class CarForm extends React.Component {
  render() {
    return (
      <div className="text-center">
        <form className="car-form">
          <input
            name="brand"
            type="text"
            className="form-control"
            placeholder="Ferrari"/>
          <input
            name="model"
            type="text"
            className="form-control"
            placeholder="308 GTS"/>
          <input
            name="plate"
            type="text"
            className="form-control"
            placeholder="56E-478"/>
          <input
            name="owner"
            type="text"
            className="form-control"
            placeholder="Thomas Magnum"/>
          <input
            type="submit"
            className="btn btn-cta"
            value="Add a Car"/>
        </form>
      </div>
    )
  }
}


export default CarForm
