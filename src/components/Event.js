import React, { Component } from 'react';
import EventDetails from'./EventDetails.js';

class Event extends Component{
   constructor(props) {
      super(props);
      this.state = {
        showDetails: false
      };
    }

   render(){
      const event = this.props;
      let { showDetails } = this.state;

      if(showDetails){
         return this.showWithDetails(showDetails, event);
      }
      else{
         return this.showWithoutDetails(showDetails, event);
      }
   }

   showWithDetails(showDetails, event) {
      return (
         <div class="event">
            <button onClick={() => this.setState({ showDetails: !showDetails })}>{event.title} @ {event.venue}</button>
            <EventDetails {...event} />
         </div>
      );
   }

   showWithoutDetails(showDetails, event) {
      return (
         <div class="event">
            <button onClick={() => this.setState({ showDetails: !showDetails })}>{event.title} @ {event.venue}</button>
         </div>
      );
   }
}

export default Event;