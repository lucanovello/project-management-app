import { Link } from 'react-router-dom';
import { FaSignInAlt, FaSignOutAlt, FaUser, FaCrown } from 'react-icons/fa';
import topNavbarStyle from './TopNavbar.module.css';

function TopNavBar() {
    return (
        <header className={topNavbarStyle.topNavbarContainer}>
            <Link to="/" className={topNavbarStyle.topNavbarLogoWrapper}>
                <FaCrown className={topNavbarStyle.topNavbarLogoIcon} />
                <p className={topNavbarStyle.topNavbarLogoText}>Project Managament App</p>
            </Link>

            <ul className={topNavbarStyle.topNavbarMenuWrapper}>
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
            </ul>
        </header>
    );
}

export default TopNavBar;
