import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents, updateEvent } from '../../features/events/eventSlice';
import LoadingComponent from '../loading/LoadingComponent';
import calendarStyle from './Calendar.module.css';

function Calendar({ setIsEditing, setCurrentEdit, initialState, formRef }) {
    const dispatch = useDispatch();
    const { events, isLoading, isError, message } = useSelector((state) => state.events);

    const handleDateClick = (selected) => {
        setCurrentEdit({
            ...initialState,
            start: new Date(selected.start),
            end: new Date(selected.end),
            allDay: selected.allDay,
        });
        setIsEditing(true);
    };

    const handleEventClick = (selected) => {
        setCurrentEdit({
            title: selected.event._def.title,
            start: new Date(selected.event._instance.range.start),
            end: selected.event._instance.range.end
                ? new Date(selected.event._instance.range.end)
                : new Date(),
            allDay: selected.event._def.allDay,
            city: selected.event._def.extendedProps.city,
            createdAt: selected.event._def.extendedProps.createdAt,
            createdBy: selected.event._def.extendedProps.createdBy,
            crew: selected.event._def.extendedProps.crew,
            customer: selected.event._def.extendedProps.customer,
            description: selected.event._def.extendedProps.description,
            notes: selected.event._def.extendedProps.notes,
            postalCode: selected.event._def.extendedProps.postalCode,
            province: selected.event._def.extendedProps.province,
            status: selected.event._def.extendedProps.status,
            street: selected.event._def.extendedProps.street,
            id: selected.event._def.extendedProps._id,
        });
        setIsEditing(true);
    };

    const handleEventChange = (selected) => {
        dispatch(
            updateEvent({
                title: selected.event._def.title,
                start: new Date(selected.event._instance.range.start),
                end: new Date(selected.event._instance.range.end),
                allDay: selected.event._def.allDay,
                city: selected.event._def.extendedProps.city,
                createdAt: selected.event._def.extendedProps.createdAt,
                createdBy: selected.event._def.extendedProps.createdBy,
                crew: selected.event._def.extendedProps.crew,
                customer: selected.event._def.extendedProps.customer,
                description: selected.event._def.extendedProps.description,
                notes: selected.event._def.extendedProps.notes,
                postalCode: selected.event._def.extendedProps.postalCode,
                province: selected.event._def.extendedProps.province,
                status: selected.event._def.extendedProps.status,
                street: selected.event._def.extendedProps.street,
                id: selected.event._def.extendedProps._id,
            })
        );
        dispatch(getEvents());
    };

    if (isLoading) {
        return <LoadingComponent text="Calendar loading" />;
    }
    if (isError) {
        return <h2>{message}</h2>;
    }
    return (
        <>
            {/* <CalendarEventList /> */}
            <div className={calendarStyle.calendarContainer}>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,listWeek',
                    }}
                    timeZone="UTC"
                    contentHeight="auto"
                    windowResizeDelay={0}
                    selectable={true}
                    droppable={true}
                    editable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    events={events}
                    select={handleDateClick}
                    eventClick={handleEventClick}
                    eventChange={handleEventChange}
                    unselect={(event) =>
                        formRef.current &&
                        !formRef.current.contains(event.jsEvent.target) &&
                        setIsEditing(false)
                    }
                />
            </div>
        </>
    );
}

export default Calendar;
