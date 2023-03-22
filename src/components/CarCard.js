import * as React from 'react'
import CarsService from '../services/cars'


// TODO: render one car
// NOTE: The team designer left you a template for a car. Enjoy!

class CarCard extends React.Component {
  constructor(props) {
    super(props);

    this.deleteCar = this.deleteCar.bind(this);
  }

  deleteCar(event) {
    event.preventDefault();

    CarsService.deleteCar(this.props.car);
  }

  render() {
    return (
      <div className="car">
        <div className="car-image">
          <img src={`http://loremflickr.com/280/280/${this.props.car.brand} ${this.props.car.model}`} />
        </div>
        <div className="car-info">
          <button onClick={this.deleteCar}>Delete</button>
          <h4>{this.props.car.brand} {this.props.car.model}</h4>
          <p><strong>Owner:</strong> {this.props.car.owner}</p>
          <p><strong>Plate:</strong> {this.props.car.plate}</p>
        </div>
      </div>
    )
  }
}


export default CarCard
