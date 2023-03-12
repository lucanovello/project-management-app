import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import employeeService from './employeeService';

const initialState = {
    employees: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

// Create new employee
export const createEmployee = createAsyncThunk(
    'employees/create',
    async (employeeData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await employeeService.createEmployee(employeeData, token);
        } catch (error) {
            const message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Get user employees
export const getEmployees = createAsyncThunk('employees/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await employeeService.getEmployees(token);
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

// Delete user employee
export const deleteEmployee = createAsyncThunk('employees/delete', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await employeeService.deleteEmployee(id, token);
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createEmployee.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createEmployee.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.employees.push(action.payload);
            })
            .addCase(createEmployee.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getEmployees.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getEmployees.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.employees = action.payload;
            })
            .addCase(getEmployees.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(deleteEmployee.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteEmployee.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.employees = state.employees.filter(
                    (employee) => employee._id !== action.payload.id
                );
            })
            .addCase(deleteEmployee.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const { reset } = employeeSlice.actions;
export default employeeSlice.reducer;
