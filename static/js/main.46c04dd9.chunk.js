(this.webpackJsonpnachtfisch=this.webpackJsonpnachtfisch||[]).push([[0],{12:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(6),o=t.n(r),b=t(1),s=t(2),i=t(4),u=t(3),m=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props;return n.a.createElement("div",{class:"details"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Eintritt"),n.a.createElement("td",null,e.fee)),n.a.createElement("tr",null,n.a.createElement("td",null,"Artists"),n.a.createElement("td",null,e.artists)),n.a.createElement("tr",null,n.a.createElement("td",null,"Genre"),n.a.createElement("td",null,e.genre)),n.a.createElement("tr",null,n.a.createElement("td",null,"Beschr\xe4nkung"),n.a.createElement("td",null,e.age))),n.a.createElement("br",null),n.a.createElement("p",null,e.description),n.a.createElement("br",null),n.a.createElement("a",{href:e.link},"Link zur Veranstaltung"))}}]),t}(l.Component),c=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(e){var l;return Object(b.a)(this,t),(l=a.call(this,e)).state={showDetails:!1},l}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,a=this.state.showDetails;return a?this.showWithDetails(a,e):this.showWithoutDetails(a,e)}},{key:"showWithDetails",value:function(e,a){var t=this;return n.a.createElement("div",{class:"event"},n.a.createElement("button",{onClick:function(){return t.setState({showDetails:!e})}},a.title," @ ",a.venue),n.a.createElement(m,a))}},{key:"showWithoutDetails",value:function(e,a){var t=this;return n.a.createElement("div",{class:"event"},n.a.createElement("button",{onClick:function(){return t.setState({showDetails:!e})}},a.title," @ ",a.venue))}}]),t}(l.Component),d=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props.events;return n.a.createElement("div",null,e.map((function(e){return n.a.createElement(c,e)})))}}]),t}(l.Component),p=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props;return n.a.createElement("div",{class:"day"},n.a.createElement("h1",null,e.weekday,", ",e.date),n.a.createElement(d,e))}}]),t}(l.Component),g=[{date:"04.09.2020",weekday:"Freitag",events:[{age:"ab 18 Jahren",fee:"CHF 20.-",title:"Oh mon dieu",venue:"Kugl",genre:"Techno",artists:"DJ Donald Duck",link:"https://www.google.com",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{age:"-",fee:"CHF 20.-",title:"Tanzbar",venue:"Tankstell",genre:"House",artists:"DJ Mickey Mouse",link:"https://www.google.com",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{age:"-",fee:"CHF 20.-",title:"Tanzbar",venue:"Tankstell",genre:"House",artists:"DJ Mickey Mouse",link:"https://www.google.com",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{age:"-",fee:"CHF 20.-",title:"Tanzbar",venue:"Tankstell",genre:"House",artists:"DJ Mickey Mouse",link:"https://www.google.com",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}]},{date:"05.10.2020",weekday:"Samstag",events:[{age:"ab 16 Jahren",fee:"CHF 20.-",title:"Wunderlampe",venue:"Grabenhalle",genre:"Techno",artists:"DJ Donald Duck",link:"https://www.google.com",description:"blbalbla blablabla blablablabalb lab blba lbla blablabla blablablabalb lab"},{age:"ab 18 Jahren",fee:"CHF 20.-",title:"Season Opening",venue:"Tankstell",genre:"House",artists:"DJ Mickey Mouse",link:"https://www.google.com",description:"blbalbla blablabla blablablabalb lab blba lbla blablabla blablablabalb lab"}]},{date:"04.09.2020",weekday:"Freitag",events:[{age:"ab 118 Jahren",fee:"CHF 20.-",title:"Oh mon dieu",venue:"Kugl",genre:"Techno",artists:"DJ Donald Duck",link:"https://www.google.com",description:"blbalbla blablabla blablablabalb lab blba lbla blablabla blablablabalb lab"},{age:"ab 18 Jahren",fee:"CHF 20.-",title:"Tanzbar",venue:"Tankstell",genre:"House",artists:"DJ Mickey Mouse",link:"https://www.google.com",description:"blbalbla blablabla blablablabalb lab blba lbla blablabla blablablabalb lab"}]},{date:"05.10.2020",weekday:"Samstag",events:[{age:"ab 18 Jahren",fee:"CHF 20.-",title:"Wunderlampe",venue:"Grabenhalle",genre:"Techno",artists:"DJ Donald Duck",link:"https://www.google.com",description:"blbalbla blablabla blablablabalb lab blba lbla blablabla blablablabalb lab"},{age:"ab 18 Jahren",fee:"CHF 20.-",title:"Season Opening",venue:"Tankstell",genre:"House",artists:"DJ Mickey Mouse",link:"https://www.google.com",description:"blbalbla blablabla blablablabalb lab blba lbla blablabla blablablabalb lab"}]},{date:"04.09.2020",weekday:"Freitag",events:[{age:"ab 18 Jahren",fee:"CHF 20.-",title:"Oh mon dieu",venue:"Kugl",genre:"Techno",artists:"DJ Donald Duck",link:"https://www.google.com",description:"blbalbla blablabla blablablabalb lab blba lbla blablabla blablablabalb lab"},{age:"ab 18 Jahren",fee:"CHF 20.-",title:"Tanzbar",venue:"Tankstell",genre:"House",artists:"DJ Mickey Mouse",link:"https://www.google.com",description:"blbalbla blablabla blablablabalb lab blba lbla blablabla blablablabalb lab"}]},{date:"05.10.2020",weekday:"Samstag",events:[{age:"ab 18 Jahren",fee:"CHF 20.-",title:"Wunderlampe",venue:"Grabenhalle",genre:"Techno",artists:"DJ Donald Duck",link:"https://www.google.com",description:"blbalbla blablabla blablablabalb lab blba lbla blablabla blablablabalb lab"},{age:"ab 18 Jahren",fee:"CHF 20.-",title:"Season Opening",venue:"Tankstell",genre:"House",artists:"DJ Mickey Mouse",link:"https://www.google.com",description:"blbalbla blablabla blablablabalb lab blba lbla blablabla blablablabalb lab"}]}],h=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,g.map((function(e){return n.a.createElement(p,e)})))}}]),t}(l.Component);o.a.render(n.a.createElement(h,null),document.getElementById("app"))},7:function(e,a,t){e.exports=t(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.46c04dd9.chunk.js.map