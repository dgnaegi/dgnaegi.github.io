import React, { Component } from 'react';
import Day from'./components/Day.js';

//todo extract to some kind of backend
const days = [
   {date: "04.09.2020", weekday: "Freitag", events: 
   [ 
       {age: "ab 18 Jahren", fee: "CHF 20.-", title: "Oh mon dieu", venue: "Kugl", genre: "Techno", artists: "DJ Donald Duck", link:"https://www.google.com" , description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
       {age: "-", fee: "CHF 20.-", title: "Tanzbar", venue: "Tankstell", genre: "House", artists: "DJ Mickey Mouse", link:"https://www.google.com", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
       {age: "-", fee: "CHF 20.-", title: "Tanzbar", venue: "Tankstell", genre: "House", artists: "DJ Mickey Mouse", link:"https://www.google.com", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
       {age: "-", fee: "CHF 20.-", title: "Tanzbar", venue: "Tankstell", genre: "House", artists: "DJ Mickey Mouse", link:"https://www.google.com", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}

   ]},
   {date: "05.10.2020", weekday: "Samstag", events: 
   [ 
       {age: "ab 16 Jahren", fee: "CHF 20.-", title: "Wunderlampe", venue: "Grabenhalle", genre: "Techno", artists: "DJ Donald Duck", link:"https://www.google.com", description: "blbalbla blablabla blablablabalb lab blba lbla blablabla blablablabalb lab"},
       {age: "ab 18 Jahren", fee: "CHF 20.-", title: "Season Opening", venue: "Tankstell", genre: "House", artists: "DJ Mickey Mouse", link:"https://www.google.com", description: "blbalbla blablabla blablablabalb lab blba lbla blablabla blablablabalb lab"}
   ]},
   {date: "04.09.2020", weekday: "Freitag", events: 
   [ 
       {age: "ab 118 Jahren", fee: "CHF 20.-", title: "Oh mon dieu", venue: "Kugl", genre: "Techno", artists: "DJ Donald Duck", link:"https://www.google.com" , description: "blbalbla blablabla blablablabalb lab blba lbla blablabla blablablabalb lab"},
       {age: "ab 18 Jahren", fee: "CHF 20.-", title: "Tanzbar", venue: "Tankstell", genre: "House", artists: "DJ Mickey Mouse", link:"https://www.google.com", description: "blbalbla blablabla blablablabalb lab blba lbla blablabla blablablabalb lab"}
   ]},
   {date: "05.10.2020", weekday: "Samstag", events: 
   [ 
       {age: "ab 18 Jahren", fee: "CHF 20.-", title: "Wunderlampe", venue: "Grabenhalle", genre: "Techno", artists: "DJ Donald Duck", link:"https://www.google.com", description: "blbalbla blablabla blablablabalb lab blba lbla blablabla blablablabalb lab"},
       {age: "ab 18 Jahren", fee: "CHF 20.-", title: "Season Opening", venue: "Tankstell", genre: "House", artists: "DJ Mickey Mouse", link:"https://www.google.com", description: "blbalbla blablabla blablablabalb lab blba lbla blablabla blablablabalb lab"}
   ]},
   {date: "04.09.2020", weekday: "Freitag", events: 
   [ 
       {age: "ab 18 Jahren", fee: "CHF 20.-", title: "Oh mon dieu", venue: "Kugl", genre: "Techno", artists: "DJ Donald Duck", link:"https://www.google.com" , description: "blbalbla blablabla blablablabalb lab blba lbla blablabla blablablabalb lab"},
       {age: "ab 18 Jahren", fee: "CHF 20.-", title: "Tanzbar", venue: "Tankstell", genre: "House", artists: "DJ Mickey Mouse", link:"https://www.google.com", description: "blbalbla blablabla blablablabalb lab blba lbla blablabla blablablabalb lab"}
   ]},
   {date: "05.10.2020", weekday: "Samstag", events: 
   [ 
       {age: "ab 18 Jahren", fee: "CHF 20.-", title: "Wunderlampe", venue: "Grabenhalle", genre: "Techno", artists: "DJ Donald Duck", link:"https://www.google.com", description: "blbalbla blablabla blablablabalb lab blba lbla blablabla blablablabalb lab"},
       {age: "ab 18 Jahren", fee: "CHF 20.-", title: "Season Opening", venue: "Tankstell", genre: "House", artists: "DJ Mickey Mouse", link:"https://www.google.com", description: "blbalbla blablabla blablablabalb lab blba lbla blablabla blablablabalb lab"}
   ]},
];

class App extends Component{
   render(){
      return (
      <div>
         {days.map(day => <Day {...day}/>)}
      </div>);
   }
}
export default App;