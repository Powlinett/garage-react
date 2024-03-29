import * as React from 'react'
import Banner from './Banner'
import CarForm from './CarForm'


class Sidebar extends React.Component {
  render() {
    return (
      <div className='sidebar'>
        <Banner username="Pauline" lastName="Eustachy"/>
        <CarForm/>
      </div>
    )
  }
}


export default Sidebar
