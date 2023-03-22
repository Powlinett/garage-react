const url =  "https://wagon-garage-api.herokuapp.com/camionrouge/cars"


const service = {
  getCars() {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
  },

  postCar(car) {
    return fetch(url, { 
      method: 'POST',
      body: JSON.stringify(car),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
  },

  deleteCar(car) {
    return fetch(`https://wagon-garage-api.herokuapp.com/cars/${car.id}`, {
      method: 'DELETE',
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
  }
}


export default service; 

