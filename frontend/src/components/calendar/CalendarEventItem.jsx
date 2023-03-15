import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../../features/employees/employeeSlice';
import employeeStyle from './Employees.module.css';

function CalendarEventItem({ employee }) {
    const dispatch = useDispatch();

    const { _id, firstName, lastName, email, phone, address, position, salary, sin } = employee;

    return (
        <>
            <tr className={employeeStyle.employeeTableBodyRowContainer}>
                <td className={` ${employeeStyle.name} ${employeeStyle.employeeItem}`}>
                    {firstName}
                </td>
                <td className={` ${employeeStyle.name} ${employeeStyle.employeeItem}`}>
                    {lastName}
                </td>
                <td className={`${employeeStyle.address} ${employeeStyle.employeeItem}`}>
                    {address}
                </td>
                <td className={`${employeeStyle.employeeItem}`}>{email}</td>
                <td className={`${employeeStyle.number} ${employeeStyle.employeeItem}`}>{phone}</td>
                <td className={` ${employeeStyle.position} ${employeeStyle.employeeItem}`}>
                    {position}
                </td>
                <td
                    className={`${employeeStyle.salary} ${employeeStyle.number} ${employeeStyle.employeeItem}`}
                >
                    {salary && salary}
                </td>
                <td className={`${employeeStyle.number} ${employeeStyle.employeeItem}`}>{sin}</td>
                <td className={`${employeeStyle.employeeItemDeleteBtnWrapper}`}>
                    <button
                        className={employeeStyle.employeeItemDeleteBtn}
                        onClick={() => dispatch(deleteEmployee(_id))}
                    >
                        🞪
                    </button>
                </td>
            </tr>
        </>
    );
}

export default CalendarEventItem;
