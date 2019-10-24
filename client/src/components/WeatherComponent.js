import React, { Component } from 'react';
import axios from "axios"


class WeatherComponent extends Component {

    state = {
       weather: []
     }   

     onChange = date => this.setState({date})

   async componentDidMount(){
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Szczecin&units=metric&appid=APPKEY')
        .then(response => {
          //  console.log(response)
          this.setState({ weather: response.data.main.temp,
           city: response.data.name,
          description: response.data.weather[0].description});
        })
        .catch(error => {
          console.log(error);
        });
      }
  
    render(){
        
        const { weather, city, description } = this.state;
       // console.log(weather)
          
        return(
          <div>
          <br />
             Actual temperature: {weather} °C
             <br />
            Weather: {description}
            <br />
            City: {city}

    
            </div>
        )}
    }


export default WeatherComponent;
