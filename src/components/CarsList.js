import * as React from 'react'
import CarCard from './CarCard'
import CarsService from '../services/cars'


// TODO: render all garage cars
// NOTE: The team designer left you a template for a car. Enjoy!

class CarsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: []
    }
  }

  componentDidMount() {
    // FETCH GET cars
    CarsService.getCars()
     .then((data) => {
        this.setState({
          cars: data
        })
     })
  }

  render() {
    return (
      <div className='cars-list'>
        {this.state.cars.map((car) => <CarCard car={car}/>)}
      </div>
    )
  }
}


export default CarsList
