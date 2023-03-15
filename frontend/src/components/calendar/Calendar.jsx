import { formatDate } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getEvents, reset } from '../../features/events/eventSlice';
import LoadingComponent from '../loading/LoadingComponent';
import calendarStyle from './Calendar.module.css';

function Calendar() {
    const [currentEvents, setCurrentEvents] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);
    const { events, isLoading, isError, message } = useSelector((state) => state.events);

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        if (!user) {
            navigate('/login');
        }

        dispatch(getEvents());

        return () => {
            dispatch(reset());
        };
    }, [user, navigate, isError, message, dispatch]);

    if (isLoading) {
        return <LoadingComponent text="Calendar loading" />;
    }

    if (isError) {
        return <h2>{message}</h2>;
    }

    const handleDateClick = (selected) => {
        const title = prompt('Please enter a new title for your event');
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();
        console.log(selected);

        const event = {
            title,
            description: '',
            address: {
                street: '',
                city: '',
                province: '',
                postalCode: '',
            },
            start: selected.startStr,
            end: selected.endStr,
            allDay: selected.allDay,
            interactive: true,
            extendedProps: {
                crew: null,
                customer: null,
                notes: '',
                status: 'pending',
                createdBy: user._id,
            },
        };

        if (title) {
            calendarApi.addEvent({
                ...event,
                id: `${event.start}-${title}`,
            });
        }
    };

    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
            selected.event.remove();
        }
    };

    return (
        <>
            <div className={calendarStyle.calendarPageContainer}>
                {/* CALENDAR SIDEBAR */}
                <div className={calendarStyle.eventsContainer}>
                    <h5 className={calendarStyle.eventsTitle}>Events</h5>
                    <ul className={calendarStyle.eventsList}>
                        {currentEvents.map((event) => (
                            <li key={event.id} className={calendarStyle.eventsListItem}>
                                <p className={calendarStyle.eventsListItemTitle}>{event.title}</p>
                                <p className={calendarStyle.eventsListItemText}>
                                    {formatDate(event.start, {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                    })}
                                </p>
                                <p className={calendarStyle.eventsListItemText}>
                                    {event.allDay
                                        ? 'All Day'
                                        : `${formatDate(event.start, {
                                              timeZone: 'local',
                                              locale: 'en',
                                              hour: 'numeric',
                                          })}
                                         - 
                                        ${formatDate(event.end, {
                                            timeZone: 'local',
                                            locale: 'en',
                                            hour: 'numeric',
                                        })}`}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={calendarStyle.calendarContainer}>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,listWeek',
                        }}
                        height="auto"
                        expandRows={true}
                        windowResizeDelay={0}
                        selectable={true}
                        editable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents={events}
                    />
                </div>
            </div>
        </>
    );
}

export default Calendar;
