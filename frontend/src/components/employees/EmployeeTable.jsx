import EmployeeItem from './EmployeeItem';
import employeeStyle from './Employees.module.css';

function EmployeeTable(props) {
    const { employees } = props;

    return (
        <>
            <h2 className={employeeStyle.employeeTableTitle}>Employees</h2>

            <table className={employeeStyle.employeeTableContainer}>
                <thead className={employeeStyle.employeeTableHeaderContainer}>
                    <tr className={employeeStyle.employeeTableHeaderRowContainer}>
                        <th className={employeeStyle.employeeTableHeaderTitle}>First Name</th>
                        <th className={employeeStyle.employeeTableHeaderTitle}>Last Name</th>
                        <th className={employeeStyle.employeeTableHeaderTitle}>Address</th>
                        <th className={employeeStyle.employeeTableHeaderTitle}>Email</th>
                        <th className={employeeStyle.employeeTableHeaderTitle}>Phone</th>
                        <th className={employeeStyle.employeeTableHeaderTitle}>Position</th>
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
