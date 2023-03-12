import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa';
import { register, reset } from '../../features/auth/authSlice';
import { Link } from 'react-router-dom';
import registerPageStyle from './RegisterPage.module.css';

function RegisterPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
    });
    const { firstName, lastName, email, password, password2 } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (isSuccess || user) {
            navigate('/dashboard');
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
        if (password !== password2) {
            toast.error('Passwords do not match');
        } else {
            const userData = {
                firstName,
                lastName,
                email,
                password,
            };

            dispatch(register(userData));
        }
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <main className={registerPageStyle.registerPageContainer}>
            <section className={registerPageStyle.registerPageHeaderWrapper}>
                <h1 className={registerPageStyle.registerPageHeaderTitle}>
                    <FaUser /> Register
                </h1>
                <h3 className={registerPageStyle.registerPageHeaderSubtitle}>
                    Please create an account
                </h3>
            </section>
            <form
                className={registerPageStyle.registerPageFormContainer}
                onSubmit={onSubmitHandler}
            >
                <div className={registerPageStyle.registerPageFormRow}>
                    <input
                        type="text"
                        className={registerPageStyle.registerPageFormInput}
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        placeholder="Enter your first name"
                        onChange={onChangeHandler}
                    />
                </div>
                <div className={registerPageStyle.registerPageFormRow}>
                    <input
                        type="text"
                        className={registerPageStyle.registerPageFormInput}
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        placeholder="Enter your last name"
                        onChange={onChangeHandler}
                    />
                </div>
                <div className={registerPageStyle.registerPageFormRow}>
                    <input
                        type="email"
                        className={registerPageStyle.registerPageFormInput}
                        id="email"
                        name="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={onChangeHandler}
                    />
                </div>
                <div className={registerPageStyle.registerPageFormRow}>
                    <input
                        type="password"
                        className={registerPageStyle.registerPageFormInput}
                        id="password"
                        name="password"
                        value={password}
                        placeholder="Enter a password"
                        onChange={onChangeHandler}
                    />
                </div>
                <div className={registerPageStyle.registerPageFormRow}>
                    <input
                        type="password"
                        className={registerPageStyle.registerPageFormInput}
                        id="password2"
                        name="password2"
                        value={password2}
                        placeholder="Please confirm password"
                        onChange={onChangeHandler}
                        autoComplete="disable"
                    />
                </div>
                <div className={registerPageStyle.registerPageFormRow}>
                    <button type="submit" className={registerPageStyle.registerPageFormBtn}>
                        Submit
                    </button>
                </div>
            </form>
            <div className={registerPageStyle.registerPageFooter}>
                <p className={registerPageStyle.registerPageFooterText}>
                    Already have an account?{' '}
                </p>
                <Link to="/login" className={registerPageStyle.registerPageFooterLink}>
                    Login
                </Link>
            </div>
        </main>
    );
}

export default RegisterPage;
