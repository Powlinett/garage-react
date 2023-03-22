import * as React from 'react'
import CarsService from '../services/cars'

// TODO: handle form state and submit

class CarForm extends React.Component {
  constructor(props) {
    super(props);

    this.postCar = this.postCar.bind(this);
  }  

  postCar(event) {
    event.preventDefault();

    const data = {};

    event.currentTarget.childNodes.forEach((childNode) => {
      if (childNode.type === 'text') {
        const name = childNode.name;
        const value = childNode.value;

        data[name] = value;
      }
    });
    
    CarsService.postCar(data)
      .then((data) => console.log(data));
  }

  render() {
    return (
      <div className="text-center">
        <form className="car-form" onSubmit={this.postCar}>
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
