import * as React from 'react'
import logo from '../images/white_logo_red_circle.png'
import Sidebar from './Sidebar';
import CarsList from './CarsList';

// TODO: Add username as components properties

class StateManager extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  } 

  render() {
    return (
      <>
        <Sidebar/>
        <CarsList/>
      </>
    )
  }
}


export default StateManager
