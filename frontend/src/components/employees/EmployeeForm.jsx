import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEmployee } from '../../features/employees/employeeSlice';
import employeeStyle from './Employees.module.css';

function EmployeeForm() {
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        position: '',
        salary: 15.0,
        hireDate: Date.now(),
        isActive: true,
        sin: '',
    };
    const [employee, setEmployee] = useState(initialState);

    useEffect(() => {}, [employee]);

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createEmployee(employee));
        setEmployee(initialState);
    };

    return (
        <div className={employeeStyle.employeeFormContainer}>
            <form className={employeeStyle.employeeFormWrapper} onSubmit={onSubmit}>
                <div className={employeeStyle.employeeFormInputRow}>
                    <input
                        type="text"
                        className={employeeStyle.employeeFormInput}
                        name="firstName"
                        id="firstName"
                        placeholder="First Name"
                        value={employee.firstName}
                        autoComplete="firstName"
                        onChange={(e) => setEmployee({ ...employee, firstName: e.target.value })}
                    />
                    <input
                        type="text"
                        className={employeeStyle.employeeFormInput}
                        name="lastName"
                        id="lastName"
                        placeholder="Last Name"
                        value={employee.lastName}
                        autoComplete="employee"
                        onChange={(e) => setEmployee({ ...employee, lastName: e.target.value })}
                    />
                </div>

                <div className={employeeStyle.employeeFormInputRow}>
                    <input
                        type="text"
                        className={employeeStyle.employeeFormInput}
                        name="address"
                        id="address"
                        placeholder="Address"
                        value={employee.address}
                        autoComplete="address"
                        onChange={(e) => setEmployee({ ...employee, address: e.target.value })}
                    />
                    <input
                        type="text"
                        className={employeeStyle.employeeFormInput}
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={employee.email}
                        autoComplete="email"
                        onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
                    />
                </div>

                <div className={employeeStyle.employeeFormInputRow}>
                    <input
                        type="text"
                        className={employeeStyle.employeeFormInput}
                        name="phone"
                        id="phone"
                        placeholder="Phone Number"
                        value={employee.phone}
                        autoComplete="phone"
                        onChange={(e) => setEmployee({ ...employee, phone: e.target.value })}
                    />
                    <input
                        type="text"
                        className={employeeStyle.employeeFormInput}
                        name="position"
                        id="position"
                        placeholder="Position"
                        value={employee.position}
                        autoComplete="position"
                        onChange={(e) => setEmployee({ ...employee, position: e.target.value })}
                    />
                    <input
                        type="number"
                        className={employeeStyle.employeeFormInput}
                        name="salary"
                        id="salary"
                        placeholder="Hourly Rate"
                        value={employee.salary}
                        autoComplete="salary"
                        step="0.01"
                        min="0.00"
                        max="100"
                        onChange={(e) => setEmployee({ ...employee, salary: e.target.value })}
                    />
                </div>

                <div className={employeeStyle.employeeFormInputRow}>
                    <input
                        type="text"
                        className={employeeStyle.employeeFormInput}
                        name="sin"
                        id="sin"
                        placeholder="Social Insurance Number"
                        value={employee.sin}
                        autoComplete="sin"
                        onChange={(e) => setEmployee({ ...employee, sin: e.target.value })}
                    />
                    <input
                        type="date"
                        className={employeeStyle.employeeFormInput}
                        name="hireDate"
                        id="hireDate"
                        placeholder="Social Insurance Number"
                        value={employee.hireDate}
                        onChange={(e) => setEmployee({ ...employee, hireDate: e.target.value })}
                    />
                </div>

                <button className={employeeStyle.employeeFormBtn} type="submit">
                    Add Employee
                </button>
            </form>
        </div>
    );
}

export default EmployeeForm;
