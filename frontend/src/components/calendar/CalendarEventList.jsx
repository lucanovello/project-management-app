import React from 'react';
import { useSelector } from 'react-redux';
import calendarStyle from './Calendar.module.css';
import CalendarEventItem from './CalendarEventItem';

function CalendarEventList() {
    const { events } = useSelector((state) => state.events);

    return (
        <div className={calendarStyle.eventsContainer}>
            <h5 className={calendarStyle.eventsTitle}>Events</h5>
            <ul className={calendarStyle.eventsList}>
                {events.map((event, index) => (
                    <CalendarEventItem key={index} event={event} />
                ))}
            </ul>
        </div>
    );
}

export default CalendarEventList;
