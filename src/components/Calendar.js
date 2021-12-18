import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import React, {useState, useEffect} from 'react'
import {add, toDate} from 'date-fns'
import timeGridPlugin from '@fullcalendar/timegrid';


export default function Calendar() {
    const [events, setEvents] = useState([])
    

    
    useEffect(() => fetchData(), [])

    const fetchData = () => {
        console.log("runs")
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => data.forEach(d => {
            let end = toDate(add(new Date(d.date), {minutes: d.duration}))
            setEvents(trainings => [...trainings, {title: d.activity + " with " + d.customer.firstname + " " + d.customer.lastname, start: d.date, end: end}]);
        }))
    }
    

    return (
        <FullCalendar
        headerToolbar={{
            left: 'prev,next, today',
            center: 'title',
            right: 'timeGridDay,timeGridWeek,dayGridMonth'
          }}
          slotMinTime={"06:00:00"}
        plugins={[dayGridPlugin, timeGridPlugin]}
        events={events}
        />
    )
}