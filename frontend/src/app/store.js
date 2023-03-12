import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import goalReducer from '../features/goals/goalSlice';
import employeeReducer from '../features/employees/employeeSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        goals: goalReducer,
        employees: employeeReducer,
    },
});
