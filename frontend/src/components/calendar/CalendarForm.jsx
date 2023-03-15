import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent } from '../../features/events/eventSlice';
import calendarStyle from './Calendar.module.css';

function CalendarForm() {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const initialState = {
        title: '',
        description: '',
        street: '',
        city: '',
        province: '',
        postalCode: '',
        allDay: true,
        start: Date.now(),
        end: Date.now(),
        crew: '',
        customer: '',
        notes: '',
        status: 'pending',
        createdBy: user._id,
        createdAt: Date.now(),
    };
    const [event, setEvent] = useState(initialState);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(event);
        dispatch(createEvent(event));
        setEvent(initialState);
    };

    return (
        <div className={calendarStyle.eventFormContainer}>
            <h3 className={calendarStyle.eventFormTitle}>New Event</h3>
            <form className={calendarStyle.eventFormWrapper} onSubmit={onSubmit}>
                <div className={calendarStyle.eventFormInputRow}>
                    <input
                        type="text"
                        className={calendarStyle.eventFormInput}
                        name="title"
                        id="title"
                        placeholder="Title"
                        value={event.title}
                        autoComplete="title"
                        onChange={(e) => setEvent({ ...event, title: e.target.value })}
                    />
                    <input
                        type="text"
                        className={calendarStyle.eventFormInput}
                        name="description"
                        id="description"
                        placeholder="Description"
                        value={event.description}
                        autoComplete="event"
                        onChange={(e) => setEvent({ ...event, description: e.target.value })}
                    />
                </div>

                <div className={calendarStyle.eventFormInputRow}>
                    <input
                        type="text"
                        className={calendarStyle.eventFormInput}
                        name="street"
                        id="street"
                        placeholder="Street"
                        value={event.street}
                        autoComplete="street"
                        onChange={(e) => setEvent({ ...event, street: e.target.value })}
                    />
                    <input
                        type="text"
                        className={calendarStyle.eventFormInput}
                        name="city"
                        id="city"
                        placeholder="City"
                        value={event.city}
                        autoComplete="city"
                        onChange={(e) => setEvent({ ...event, city: e.target.value })}
                    />
                    <input
                        type="text"
                        className={calendarStyle.eventFormInput}
                        name="province"
                        id="province"
                        placeholder="Province"
                        value={event.province}
                        autoComplete="province"
                        onChange={(e) => setEvent({ ...event, province: e.target.value })}
                    />
                    <input
                        type="text"
                        className={calendarStyle.eventFormInput}
                        name="postalCode"
                        id="postalCode"
                        placeholder="Postal Code"
                        value={event.postalCode}
                        autoComplete="postalCode"
                        onChange={(e) => setEvent({ ...event, postalCode: e.target.value })}
                    />
                </div>

                <div className={calendarStyle.eventFormInputRow}>
                    <input
                        type="checkbox"
                        className={calendarStyle.eventFormInputCheckbox}
                        name="allDay"
                        id="allDay"
                        checked={event.allDay}
                        onChange={(e) => setEvent({ ...event, allDay: e.target.checked })}
                    />
                    <label htmlFor="allDay" className={calendarStyle.eventFormInputLabel}>
                        All Day?
                    </label>
                    {!event.allDay ? (
                        <>
                            <input
                                type="date"
                                className={calendarStyle.eventFormInput}
                                name="start"
                                id="start"
                                placeholder="Start Date"
                                value={event.start}
                                onChange={(e) => setEvent({ ...event, start: e.target.value })}
                            />
                            <input
                                type="date"
                                className={calendarStyle.eventFormInput}
                                name="end"
                                id="end"
                                placeholder="End Date"
                                value={event.end}
                                onChange={(e) => setEvent({ ...event, end: e.target.value })}
                            />
                        </>
                    ) : (
                        <></>
                    )}

                    <input
                        type="text"
                        className={calendarStyle.eventFormInput}
                        name="crew"
                        id="crew"
                        placeholder="Crew"
                        value={event.crew}
                        autoComplete="crew"
                        onChange={(e) => setEvent({ ...event, crew: e.target.value })}
                    />

                    <input
                        type="text"
                        className={calendarStyle.eventFormInput}
                        name="customer"
                        id="customer"
                        placeholder="Customer"
                        value={event.customer}
                        autoComplete="customer"
                        onChange={(e) => setEvent({ ...event, customer: e.target.value })}
                    />
                    <select
                        className={calendarStyle.eventFormInput}
                        name="status"
                        id="status"
                        placeholder="Status"
                        value={event.status}
                        onChange={(e) => setEvent({ ...event, status: e.target.value })}
                    >
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </div>

                <button className={calendarStyle.eventFormBtn} type="submit">
                    Add Event
                </button>
            </form>
        </div>
    );
}

export default CalendarForm;
