import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import appStyle from './App.module.css';
import TopNavBar from './components/topNavbar/TopNavbar';
import DashboardPage from './pages/dashboardPage/DashboardPage';
import HomePage from './pages/homePage/HomePage';
import LoginPage from './pages/loginPage/LoginPage';
import RegisterPage from './pages/registerPage/RegisterPage';

function App() {
    const { user } = useSelector((state) => state.auth);

    return (
        <Router>
            <TopNavBar />
            <main className={appStyle.appContainer}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* {user && (
                        <> */}
                    <Route path="/dashboard/*" element={user ? <DashboardPage /> : <LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    {/* </>
                    )} */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
