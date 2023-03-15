import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import employeeReducer from '../features/employees/employeeSlice';
import eventsReducer from '../features/events/eventSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        employees: employeeReducer,
        events: eventsReducer,
    },
});
