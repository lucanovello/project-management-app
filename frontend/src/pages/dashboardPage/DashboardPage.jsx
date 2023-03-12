import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EmployeeForm from '../../components/employees/EmployeeForm';
import EmployeeTable from '../../components/employees/EmployeeTable';
import SideNavbar from '../../components/sideNavbar/SideNavbar';
import dashboardPageStyle from './DashboardPage.module.css';

function DashboardPage() {
    const navigate = useNavigate();

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    return (
        <>
            <SideNavbar />
            <section className={dashboardPageStyle.dashboardPageContainer}>
                <h1 className={dashboardPageStyle.dashboardPageTitle}>
                    Welcome {user && `${user.firstName} ${user.lastName}`}
                </h1>
                <EmployeeForm />

                <>
                    <EmployeeTable />
                </>
            </section>
        </>
    );
}

export default DashboardPage;
