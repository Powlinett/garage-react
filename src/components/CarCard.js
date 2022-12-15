import * as React from 'react'


// TODO: render one car
// NOTE: The team designer left you a template for a car. Enjoy!

class CarCard extends React.Component {
  render() {
    return (
      <div className="car">
        <div className="car-image">
          <img src="http://loremflickr.com/280/280/Ferrari 308 GTS" />
        </div>
        <div className="car-info">
          <h4>Ferrari 308 GTS</h4>
          <p><strong>Owner:</strong> Thomas Magnum</p>
          <p><strong>Plate:</strong> 56E-478</p>
        </div>
      </div>
    )
  }
}


export default CarCard
