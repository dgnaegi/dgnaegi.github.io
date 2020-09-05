import React, { Component } from 'react';

class EventDetails extends Component{
   render(){
      const event = this.props;
      return(
         <div class="details">
            <table>
               <tr>
                  <td>Eintritt</td>
                  <td>{event.fee}</td>
               </tr>
               <tr>
                  <td>Artists</td>
                  <td>{event.artists}</td>
               </tr>
               <tr>
                  <td>Genre</td>
                  <td>{event.genre}</td>
               </tr>
               <tr>
                  <td>Beschränkung</td>
                  <td>{event.age}</td>
               </tr>
            </table>
            <br />
            <p>{event.description}</p>
            <br />
            <a href={event.link}>Link zur Veranstaltung</a>
         </div>
      );
   }
}

export default EventDetails;