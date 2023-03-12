import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout, reset } from '../../features/auth/authSlice';
import sideNavbarStyle from './SideNavbar.module.css';

function SideNavbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    };

    return (
        <header className={sideNavbarStyle.sideNavbarContainer}>
            {user ? (
                <>
                    <ul className={sideNavbarStyle.sideNavbarMenuWrapper}>
                        <li>
                            <Link to="/dashboard" className={sideNavbarStyle.sideNavbarMenuItem}>
                                <MdDashboard className={sideNavbarStyle.sideNavbarMenuItemIcon} />
                                <p className={sideNavbarStyle.sideNavbarMenuItemTitle}>Dashboard</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard" className={sideNavbarStyle.sideNavbarMenuItem}>
                                <p className={sideNavbarStyle.sideNavbarMenuItemText}>Employees</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard" className={sideNavbarStyle.sideNavbarMenuItem}>
                                <p className={sideNavbarStyle.sideNavbarMenuItemText}>Customers</p>
                            </Link>
                        </li>
                    </ul>
                    <button className={sideNavbarStyle.sideNavbarMenuItemBtn} onClick={onLogout}>
                        <FaSignOutAlt /> <p>Logout</p>
                    </button>
                </>
            ) : (
                <ul className={sideNavbarStyle.sideNavbarMenuWrapper}>
                    <li>
                        <Link to="/login" className={sideNavbarStyle.sideNavbarMenuItem}>
                            <FaSignInAlt className={sideNavbarStyle.sideNavbarMenuItemIcon} />
                            <p className={sideNavbarStyle.sideNavbarMenuItemText}>Login</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/register" className={sideNavbarStyle.sideNavbarMenuItem}>
                            <FaUser className={sideNavbarStyle.sideNavbarMenuItemIcon} />
                            <p className={sideNavbarStyle.sideNavbarMenuItemText}>Register</p>
                        </Link>
                    </li>
                </ul>
            )}
        </header>
    );
}

export default SideNavbar;
