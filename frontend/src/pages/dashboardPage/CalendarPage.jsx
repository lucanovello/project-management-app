import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Calendar from '../../components/calendar/Calendar';
import calendarStyle from '../../components/calendar/Calendar.module.css';
import CalendarForm from '../../components/calendar/CalendarForm';
import LoadingComponent from '../../components/loading/LoadingComponent';
import { getEvents, reset } from '../../features/events/eventSlice';

function CalendarPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const calendarRef = useRef(null);

    const { user } = useSelector((state) => state.auth);
    const { isLoading, isError, message } = useSelector((state) => state.events);

    const newDate = new Date();
    const tomorrow = new Date(newDate);
    tomorrow.setDate(newDate.getDate() + 1);
    const initialState = {
        id: '',
        title: '',
        start: newDate,
        end: tomorrow,
        allDay: false,
        description: '',
        street: '',
        city: '',
        province: '',
        postalCode: '',
        crew: '',
        customer: '',
        notes: '',
        status: 'pending',
        createdBy: user._id,
    };
    const [currentEdit, setCurrentEdit] = useState(initialState);
    const [isEditing, setIsEditing] = useState(false);

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

    window.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            setIsEditing(false);
        }
    });

    if (isLoading) {
        return <LoadingComponent text="Calendar loading" />;
    }
    if (isError) {
        return <h2>{message}</h2>;
    }
    return (
        <>
            {/* {isEditing && (
                <CalendarForm
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    currentEdit={currentEdit}
                    setCurrentEdit={setCurrentEdit}
                    initialState={initialState}
                />
            )} */}

            <div className={calendarStyle.calendarPageContainer}>
                {/* <CalendarEventList /> */}
                <CalendarForm
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    currentEdit={currentEdit}
                    setCurrentEdit={setCurrentEdit}
                    initialState={initialState}
                    calendarRef={calendarRef}
                />
                <Calendar
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    currentEdit={currentEdit}
                    setCurrentEdit={setCurrentEdit}
                    initialState={initialState}
                    calendarRef={calendarRef}
                />
            </div>
        </>
    );
}

export default CalendarPage;
