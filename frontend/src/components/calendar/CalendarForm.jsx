import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    createEvent,
    deleteEvent,
    getEvents,
    reset,
    updateEvent,
} from '../../features/events/eventSlice';
import calendarStyle from './Calendar.module.css';

function CalendarForm({ setIsEditing, currentEdit, initialState, calendarRef }) {
    const dispatch = useDispatch();
    const [formEvent, setFormEvent] = useState(currentEdit.id ? currentEdit : initialState);

    useEffect(() => {
        setFormEvent(currentEdit);
    }, [currentEdit]);

    function handleDelete(e) {
        if (window.confirm('Are you sure you want to delete the event?')) {
            dispatch(deleteEvent(currentEdit.id));
        }
        setIsEditing(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        currentEdit.id ? dispatch(updateEvent(formEvent)) : dispatch(createEvent(formEvent));
        console.log(calendarRef.current);
        dispatch(reset());
        dispatch(getEvents());
        setFormEvent(initialState);
        setIsEditing(false);
    };

    return (
        <div className={calendarStyle.eventFormContainer}>
            <h3 className={calendarStyle.eventFormTitle}>
                {currentEdit.id ? formEvent.title : 'New Event'}
            </h3>
            <form className={calendarStyle.eventFormWrapper} onSubmit={onSubmit}>
                {/* <div className={calendarStyle.eventFormInputRow}> */}
                <div className={calendarStyle.eventFormInputWrapper}>
                    <label htmlFor="title" className={calendarStyle.eventFormInputLabel}>
                        Title
                    </label>{' '}
                    <input
                        type="text"
                        className={calendarStyle.eventFormInput}
                        name="title"
                        id="title"
                        placeholder="Title"
                        value={formEvent.title}
                        autoComplete="title"
                        onChange={(e) => setFormEvent({ ...formEvent, title: e.target.value })}
                    />
                </div>
                <div className={calendarStyle.eventFormInputWrapper}>
                    <label htmlFor="description" className={calendarStyle.eventFormInputLabel}>
                        Description
                    </label>{' '}
                    <input
                        type="text"
                        className={calendarStyle.eventFormInput}
                        name="description"
                        id="description"
                        placeholder="Description"
                        value={formEvent.description}
                        autoComplete="event"
                        onChange={(e) =>
                            setFormEvent({ ...formEvent, description: e.target.value })
                        }
                    />
                </div>
                {/* </div> */}

                {/* <div className={calendarStyle.eventFormInputRow}> */}
                <div className={calendarStyle.eventFormInputWrapper}>
                    <label htmlFor="street" className={calendarStyle.eventFormInputLabel}>
                        Street
                    </label>{' '}
                    <input
                        type="text"
                        className={calendarStyle.eventFormInput}
                        name="street"
                        id="street"
                        placeholder="Street"
                        value={formEvent.street}
                        autoComplete="street"
                        onChange={(e) => setFormEvent({ ...formEvent, street: e.target.value })}
                    />
                </div>
                <div className={calendarStyle.eventFormInputWrapper}>
                    <label htmlFor="city" className={calendarStyle.eventFormInputLabel}>
                        City
                    </label>{' '}
                    <input
                        type="text"
                        className={calendarStyle.eventFormInput}
                        name="city"
                        id="city"
                        placeholder="City"
                        value={formEvent.city}
                        autoComplete="city"
                        onChange={(e) => setFormEvent({ ...formEvent, city: e.target.value })}
                    />
                </div>
                {/* </div> */}

                {/* <div className={calendarStyle.eventFormInputRow}> */}
                <div className={calendarStyle.eventFormInputWrapper}>
                    <label htmlFor="province" className={calendarStyle.eventFormInputLabel}>
                        Province
                    </label>{' '}
                    <input
                        type="text"
                        className={calendarStyle.eventFormInput}
                        name="province"
                        id="province"
                        placeholder="Province"
                        value={formEvent.province}
                        autoComplete="province"
                        onChange={(e) => setFormEvent({ ...formEvent, province: e.target.value })}
                    />
                </div>
                <div className={calendarStyle.eventFormInputWrapper}>
                    <label htmlFor="postalCode" className={calendarStyle.eventFormInputLabel}>
                        Postal Code
                    </label>{' '}
                    <input
                        type="text"
                        className={calendarStyle.eventFormInput}
                        name="postalCode"
                        id="postalCode"
                        placeholder="Postal Code"
                        value={formEvent.postalCode}
                        autoComplete="postalCode"
                        onChange={(e) => setFormEvent({ ...formEvent, postalCode: e.target.value })}
                    />
                </div>
                {/* </div> */}

                {/* <div className={calendarStyle.eventFormInputRow}> */}
                <div className={calendarStyle.eventFormInputCheckboxWrapper}>
                    <input
                        type="checkbox"
                        className={calendarStyle.eventFormInputCheckbox}
                        name="allDay"
                        id="allDay"
                        checked={formEvent.allDay}
                        onChange={(e) => setFormEvent({ ...formEvent, allDay: e.target.checked })}
                    />
                    <label htmlFor="allDay" className={calendarStyle.eventFormInputLabel}>
                        All Day
                    </label>
                </div>
                <div className={calendarStyle.eventFormInputWrapper}>
                    <label htmlFor="start" className={calendarStyle.eventFormInputLabel}>
                        Start Date
                    </label>{' '}
                    <input
                        type={'datetime-local'}
                        className={calendarStyle.eventFormInput}
                        name="start"
                        id="start"
                        placeholder="Start Date"
                        value={formEvent.start.toISOString().slice(0, 16)}
                        onChange={(e) =>
                            setFormEvent({ ...formEvent, start: new Date(e.target.value) })
                        }
                    />
                </div>
                <div className={calendarStyle.eventFormInputWrapper}>
                    <label htmlFor="end" className={calendarStyle.eventFormInputLabel}>
                        End Date
                    </label>{' '}
                    <input
                        type={'datetime-local'}
                        className={calendarStyle.eventFormInput}
                        name="end"
                        id="end"
                        placeholder="End Date"
                        value={
                            formEvent.end ? formEvent.end.toISOString().slice(0, 16) : new Date()
                        }
                        onChange={(e) =>
                            setFormEvent({ ...formEvent, end: new Date(e.target.value) })
                        }
                    />
                </div>

                <div className={calendarStyle.eventFormInputWrapper}>
                    <label htmlFor="status" className={calendarStyle.eventFormInputLabel}>
                        Status
                    </label>{' '}
                    <select
                        className={calendarStyle.eventFormInput}
                        name="status"
                        id="status"
                        placeholder="Status"
                        value={formEvent.status}
                        onChange={(e) => setFormEvent({ ...formEvent, status: e.target.value })}
                    >
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </div>
                {/* </div> */}

                {/* <div className={calendarStyle.eventFormInputRow}> */}
                <div className={calendarStyle.eventFormInputWrapper}>
                    <label htmlFor="crew" className={calendarStyle.eventFormInputLabel}>
                        Crew
                    </label>{' '}
                    <input
                        type="text"
                        className={calendarStyle.eventFormInput}
                        name="crew"
                        id="crew"
                        placeholder="Crew"
                        value={formEvent.crew}
                        autoComplete="crew"
                        onChange={(e) => setFormEvent({ ...formEvent, crew: e.target.value })}
                    />
                </div>

                <div className={calendarStyle.eventFormInputWrapper}>
                    <label htmlFor="customer" className={calendarStyle.eventFormInputLabel}>
                        Customer
                    </label>{' '}
                    <input
                        type="text"
                        className={calendarStyle.eventFormInput}
                        name="customer"
                        id="customer"
                        placeholder="Customer"
                        value={formEvent.customer}
                        autoComplete="customer"
                        onChange={(e) => setFormEvent({ ...formEvent, customer: e.target.value })}
                    />
                </div>
                {/* </div> */}
                <div className={calendarStyle.eventFormBtnWrapper}>
                    <button className={calendarStyle.eventFormBtn} type="submit">
                        {currentEdit.id ? 'Update Event' : 'Add Event'}
                    </button>

                    {currentEdit.id && (
                        <button
                            className={`${calendarStyle.eventFormBtn} ${calendarStyle.delete}`}
                            type="button"
                            onClick={handleDelete}
                        >
                            {'Delete Event'}
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default CalendarForm;
