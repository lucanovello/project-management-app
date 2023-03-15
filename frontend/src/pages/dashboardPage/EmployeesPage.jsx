import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EmployeeForm from '../../components/employees/EmployeeForm';
import EmployeeTable from '../../components/employees/EmployeeTable';
import LoadingComponent from '../../components/loading/LoadingComponent';
import { getEmployees, reset } from '../../features/employees/employeeSlice';

function EmployeesPage() {
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

    if (isError) {
        return <h2>{message}</h2>;
    }

    return (
        <>
            <EmployeeForm />
            <EmployeeTable employees={employees} />
        </>
    );
}

export default EmployeesPage;
