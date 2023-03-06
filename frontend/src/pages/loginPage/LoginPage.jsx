import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../../features/auth/authSlice';
import loginPageStyle from './LoginPage.module.css';

function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const { email, password } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (isSuccess || user) {
            navigate('/');
        }

        dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onChangeHandler = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password,
        };
        dispatch(login(userData));
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <main className={loginPageStyle.loginPageContainer}>
            <section className={loginPageStyle.loginPageHeaderWrapper}>
                <h1 className={loginPageStyle.loginPageHeaderTitle}>
                    <FaSignInAlt /> Login
                </h1>
                <h3 className={loginPageStyle.loginPageHeaderSubtitle}>Please log in</h3>
            </section>
            <form className={loginPageStyle.loginPageFormContainer} onSubmit={onSubmitHandler}>
                <div className={loginPageStyle.loginPageFormRow}>
                    <input
                        type="email"
                        className={loginPageStyle.loginPageFormInput}
                        id="email"
                        name="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={onChangeHandler}
                    />
                </div>
                <div className={loginPageStyle.loginPageFormRow}>
                    <input
                        type="password"
                        className={loginPageStyle.loginPageFormInput}
                        id="password"
                        name="password"
                        value={password}
                        placeholder="Enter a password"
                        onChange={onChangeHandler}
                    />
                </div>
                <div className={loginPageStyle.loginPageFormRow}>
                    <button type="submit" className={loginPageStyle.loginPageFormBtn}>
                        Submit
                    </button>
                </div>
            </form>
            <div className={loginPageStyle.loginPageFooter}>
                <p className={loginPageStyle.loginPageFooterText}>Don't have an account? </p>
                <Link to="/register" className={loginPageStyle.loginPageFooterLink}>
                    Register
                </Link>
            </div>
        </main>
    );
}

export default LoginPage;
