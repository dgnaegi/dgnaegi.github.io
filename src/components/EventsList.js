import React, { Component } from 'react';
import Event from'./Event.js';

class EventsList extends Component{
   render(){
        const events = this.props.events;
        return (
            <div>
                {events.map(event => <Event {...event}/>)}
            </div>);
   }
}
export default EventsList;