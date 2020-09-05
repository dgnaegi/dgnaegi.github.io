import React, { Component } from 'react';
import EventsList from'./EventsList.js';

class Day extends Component{
   render(){
      const day = this.props;
      
      return(
         <div class="day">
            <h1>{day.weekday}, {day.date}</h1>
            <EventsList {...day}/>
         </div>
      );
   }
}

export default Day;