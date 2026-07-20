import { useState } from "react";

import {
  FaChevronLeft,
  FaChevronRight,
  FaCalendarCheck,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./EventCalendar.css";



const currentYear = new Date().getFullYear();


const years = Array.from(
  { length: currentYear - 2014 + 1 },
  (_, index) => currentYear - index
);



const events = {

  2026:[
    {
      date:"2026-08-12",
      title:"Robotics Workshop",
      type:"Workshop",
      location:"Yuvalay Makerspace, Vadodara",
      status:"Upcoming Event"
    },

    {
      date:"2026-08-25",
      title:"AI Innovation Hackathon",
      type:"Hackathon",
      location:"Yuvalay Innovation Lab",
      status:"Upcoming Event"
    }
  ],


  2025:[
    {
      date:"2025-11-20",
      title:"Innovation Expo",
      type:"Competition",
      location:"Yuvalay Campus",
      status:"Past Event"
    }
  ],


  2024:[
    {
      date:"2024-03-15",
      title:"STEM Awareness Drive",
      type:"Community Event",
      location:"Vadodara Schools",
      status:"Past Event"
    }
  ]

};



const months=[
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
];



export default function EventCalendar(){


const [selectedYear,setSelectedYear]=useState(currentYear);

const [month,setMonth]=useState(
new Date().getMonth()
);

const [selectedEvent,setSelectedEvent]=useState(null);





const changeMonth=(direction)=>{


if(direction==="next"){

if(month===11){

setMonth(0);
setSelectedYear(selectedYear+1);

}
else{

setMonth(month+1);

}

}


else{


if(month===0){

setMonth(11);
setSelectedYear(selectedYear-1);

}

else{

setMonth(month-1);

}

}


};





const getEvent=(day)=>{


const date =

`${selectedYear}-${String(month+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;



return events[selectedYear]?.find(

event=>event.date===date

);


};





const createCalendar=()=>{


const firstDay=

new Date(
selectedYear,
month,
1
).getDay();



const totalDays=

new Date(
selectedYear,
month+1,
0
).getDate();



const days=[];



for(let i=0;i<firstDay;i++){

days.push(null);

}



for(let i=1;i<=totalDays;i++){

days.push(i);

}



return days;


};






return (

<section className="eventCalendar">



<h2>
Event Calendar
</h2>




<div className="calendarLayout">





{/* YEAR SELECTOR */}

<div className="yearPanel">


<h3>
Years
</h3>



<div className="yearList">


{

years.map(year=>(


<button

key={year}

className={

selectedYear===year

?

"activeYear"

:

""

}


onClick={()=>{

setSelectedYear(year);

setMonth(0);

setSelectedEvent(null);

}}


>


{year}


</button>


))

}



</div>


</div>








{/* CALENDAR */}


<div className="calendarMain">





<div className="monthHeader">



<button

onClick={()=>changeMonth("prev")}

>

<FaChevronLeft/>

</button>





<h3>

{months[month]} {selectedYear}

</h3>





<button

onClick={()=>changeMonth("next")}

>

<FaChevronRight/>

</button>



</div>







<div className="weekHeader">


{
[
"Sun",
"Mon",
"Tue",
"Wed",
"Thu",
"Fri",
"Sat"

].map(day=>(


<span key={day}>

{day}

</span>


))

}


</div>









<div className="calendarGrid">



{

createCalendar().map((day,index)=>{


const event = day && getEvent(day);



return(


<button

key={index}


className={

event

?

"eventDay"

:

""

}



onClick={()=>{

if(event){

setSelectedEvent(event);

}

}}



>


{day}



</button>



)


})

}



</div>









{/* EVENT DETAILS */}



<div className="eventInfoBox">



{

selectedEvent

?


<>


<FaCalendarCheck/>




<div>


<h3>

{selectedEvent.title}

</h3>


<p>

{selectedEvent.type}

</p>


<div>

<FaMapMarkerAlt/>

{selectedEvent.location}

</div>


</div>




<span>

{selectedEvent.status}

</span>



</>


:



<>


<FaCalendarCheck/>




<div>


<h3>

Select Event Date

</h3>


<p>

Click highlighted dates to view details

</p>


</div>



<span>

Events

</span>


</>


}



</div>





</div>





</div>




</section>

);


}