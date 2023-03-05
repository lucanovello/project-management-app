import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import registerPageStyle from './RegisterPage.module.css';

function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });
    const { name, email, password, passwordConfirm } = formData;

    const onChangeHandler = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        console.log(e);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('onSubmitHandler');
    };

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
                        id="name"
                        name="name"
                        value={name}
                        placeholder="Enter your name"
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
                        id="passwordConfirm"
                        name="passwordConfirm"
                        value={passwordConfirm}
                        placeholder="Please confirm password"
                        onChange={onChangeHandler}
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
