import { Link, useNavigate } from 'react-router-dom';
import { FaSignInAlt, FaSignOutAlt, FaUser, FaCrown } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';
import topNavbarStyle from './TopNavbar.module.css';

function TopNavBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    };

    return (
        <header className={topNavbarStyle.topNavbarContainer}>
            <Link to="/" className={topNavbarStyle.topNavbarLogoWrapper}>
                <FaCrown className={topNavbarStyle.topNavbarLogoIcon} />
                <p className={topNavbarStyle.topNavbarLogoText}>Project Managament App</p>
            </Link>

            <ul className={topNavbarStyle.topNavbarMenuWrapper}>
                {user ? (
                    <li>
                        <button className={topNavbarStyle.topNavbarMenuItemBtn} onClick={onLogout}>
                            <FaSignOutAlt /> <p>Logout</p>
                        </button>
                    </li>
                ) : (
                    <>
                        {' '}
                        <li>
                            <Link to="/login" className={topNavbarStyle.topNavbarMenuItem}>
                                <FaSignInAlt className={topNavbarStyle.topNavbarMenuItemIcon} />
                                <p className={topNavbarStyle.topNavbarMenuItemText}>Login</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/register" className={topNavbarStyle.topNavbarMenuItem}>
                                <FaUser className={topNavbarStyle.topNavbarMenuItemIcon} />
                                <p className={topNavbarStyle.topNavbarMenuItemText}>Register</p>
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </header>
    );
}

export default TopNavBar;
