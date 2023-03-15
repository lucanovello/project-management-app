import { FaSignOutAlt } from 'react-icons/fa';
import { MdDashboard, MdGroup, MdWork } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
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
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    isActive
                                        ? sideNavbarStyle.sideNavbarMenuItemActive
                                        : sideNavbarStyle.sideNavbarMenuItem
                                }
                                end
                            >
                                <MdDashboard className={sideNavbarStyle.sideNavbarMenuItemIcon} />
                                <p className={sideNavbarStyle.sideNavbarMenuItemTitle}>Dashboard</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/employees"
                                className={({ isActive }) =>
                                    isActive
                                        ? sideNavbarStyle.sideNavbarMenuItemActive
                                        : sideNavbarStyle.sideNavbarMenuItem
                                }
                                end
                            >
                                <MdGroup className={sideNavbarStyle.sideNavbarMenuItemIcon} />
                                <p className={sideNavbarStyle.sideNavbarMenuItemText}>Employees</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/calendar"
                                className={({ isActive }) =>
                                    isActive
                                        ? sideNavbarStyle.sideNavbarMenuItemActive
                                        : sideNavbarStyle.sideNavbarMenuItem
                                }
                                end
                            >
                                <MdWork className={sideNavbarStyle.sideNavbarMenuItemIcon} />
                                <p className={sideNavbarStyle.sideNavbarMenuItemText}>Calendar</p>
                            </NavLink>
                        </li>
                    </ul>
                    <button className={sideNavbarStyle.sideNavbarMenuItemBtn} onClick={onLogout}>
                        <FaSignOutAlt /> <p>Logout</p>
                    </button>
                </>
            ) : (
                <></>
            )}
        </header>
    );
}

export default SideNavbar;
