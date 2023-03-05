import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import appStyle from './App.module.css';
import TopNavBar from './components/topNavbar/TopNavbar';
import DashboardPage from './pages/dashboardPage/DashboardPage';
import LoginPage from './pages/loginPage/LoginPage';
import RegisterPage from './pages/registerPage/RegisterPage';

function App() {
    return (
        <Router>
            <TopNavBar />
            <main className={appStyle.appContainer}>
                <Routes>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
