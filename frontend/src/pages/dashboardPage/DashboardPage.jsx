import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import SideNavbar from '../../components/sideNavbar/SideNavbar';
import CalendarPage from './CalendarPage';
import dashboardPageStyle from './DashboardPage.module.css';
import EmployeesPage from './EmployeesPage';

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
                <Routes>
                    <Route path="/employees" element={<EmployeesPage />} />
                    <Route path="/calendar" element={<CalendarPage />} />
                </Routes>
            </section>
        </>
    );
}

export default DashboardPage;
