import data from './data'
import WeatherItem from './WeatherItem.js';
import React, { Component } from 'react';

class WeatherWeek extends Component {
    state = {  }
    render() { 
        return ( 

            <section>
                

                {
                    data.map(elt => <WeatherItem
                        key = {elt.day}
                        day = {elt.day}
                        //!    images from local ??
                        urlImg = {elt.urlImg}
                        maxTemp = {elt.maxTemp}
                        minTemp = {elt.minTemp}
                        />)
                }

            </section>

            // <h1>Hello2</h1>

         );
    }
}
 
export default WeatherWeek;