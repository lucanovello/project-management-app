import { formatDate } from '@fullcalendar/core';
import calendarStyle from './Calendar.module.css';

function CalendarEventItem({ event }) {
    const {
        title,
        start,
        end,
        allDay,
        city,
        createdAt,
        createdBy,
        crew,
        customer,
        description,
        notes,
        postalCode,
        province,
        status,
        street,
        _id,
    } = event;

    return (
        <li key={_id} className={calendarStyle.eventsListItem}>
            <p className={calendarStyle.eventsListItemTitle}>{title}</p>
            <p className={calendarStyle.eventsListItemText}>{description}</p>
            <p className={calendarStyle.eventsListItemText}>{`Start Date: ${formatDate(start, {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            })}`}</p>
            <p className={calendarStyle.eventsListItemText}>{`Start Time: ${formatDate(start, {
                hour12: true,
                hour: '2-digit',
                minute: '2-digit',
            })}`}</p>
            <p className={calendarStyle.eventsListItemText}>{`End Date: ${formatDate(end, {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            })}`}</p>
            <p className={calendarStyle.eventsListItemText}>{`End Time: ${formatDate(end, {
                hour12: true,
                hour: '2-digit',
                minute: '2-digit',
            })}`}</p>

            <p className={calendarStyle.eventsListItemText}>
                {end !== start
                    ? `${formatDate(start, {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                      })} - ${formatDate(end, {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                      })}`
                    : formatDate(start, {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                      })}
            </p>

            <p
                className={calendarStyle.eventsListItemText}
            >{`${street}, ${city}, ${postalCode}`}</p>
            <p className={calendarStyle.eventsListItemText}>
                {'Time: '}
                {allDay
                    ? 'All Day'
                    : `${formatDate(start, {
                          timeZone: 'local',
                          locale: 'en',
                          hour: 'numeric',
                      })}
                 - 
                ${formatDate(end, {
                    timeZone: 'local',
                    locale: 'en',
                    hour: 'numeric',
                })}`}
            </p>
            <p className={calendarStyle.eventsListItemText}>{`Crew: ${crew}`}</p>
            <p className={calendarStyle.eventsListItemText}>{`Status: ${status}`}</p>
        </li>
    );
}

export default CalendarEventItem;
