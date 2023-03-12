import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getEmployees, reset } from '../../features/employees/employeeSlice';
import LoadingComponent from '../loading/LoadingComponent';
import EmployeeItem from './EmployeeItem';
import employeeStyle from './Employees.module.css';

function EmployeeTable() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);
    const { employees, isLoading, isError, message } = useSelector((state) => state.employees);

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        if (!user) {
            navigate('/login');
        }

        dispatch(getEmployees());

        return () => {
            dispatch(reset());
        };
    }, [user, navigate, isError, message, dispatch]);

    if (isLoading) {
        return <LoadingComponent text="Table loading" />;
    }

    return (
        <>
            <h2 className={employeeStyle.employeeTableTitle}>Employees</h2>

            <table className={employeeStyle.employeeTableContainer}>
                <thead className={employeeStyle.employeeTableHeaderContainer}>
                    <tr className={employeeStyle.employeeTableHeaderRowContainer}>
                        <th className={employeeStyle.employeeTableHeaderTitle}>First Name</th>
                        <th className={employeeStyle.employeeTableHeaderTitle}>Last Name</th>
                        <th className={employeeStyle.employeeTableHeaderTitle}>Position</th>
                        <th className={employeeStyle.employeeTableHeaderTitle}>Address</th>
                        <th className={employeeStyle.employeeTableHeaderTitle}>Phone</th>
                        <th className={employeeStyle.employeeTableHeaderTitle}>Email</th>
                        <th className={employeeStyle.employeeTableHeaderTitle}>Salary</th>
                        <th className={employeeStyle.employeeTableHeaderTitle}>SIN</th>
                        <th className={employeeStyle.employeeTableHeaderTitleBtn}></th>
                    </tr>
                </thead>
                <tbody className={employeeStyle.employeeTableBodyContainer}>
                    {employees.map((employee, index) => (
                        <EmployeeItem key={index} employee={employee} />
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default EmployeeTable;
