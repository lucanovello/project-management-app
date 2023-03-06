import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import GoalForm from '../../components/goals/GoalForm';
import GoalItem from '../../components/goals/GoalItem';
import dashboardPageStyle from './DashboardPage.module.css';

function DashboardPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);
    const { goals, isLoading, isError, message } = useSelector((state) => state.goals);

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        if (!user) {
            navigate('/login');
        }
    }, [user, navigate, isError, message, dispatch]);

    if (isLoading) {
        return <p className={dashboardPageStyle.dashboardPageContainer}>Loading...</p>;
    }
    return (
        <>
            <section className={dashboardPageStyle.dashboardPageContainer}>
                <h1 className={dashboardPageStyle.dashboardPageTitle}>
                    Welcome {user && user.name}
                </h1>
                <p className={dashboardPageStyle.dashboardPageSubtitle}>Goals Dashboard</p>
            </section>

            <GoalForm />

            <section className={dashboardPageStyle.dashboardPageGoalsWrapper}>
                {goals.length > 0 ? (
                    <div className={dashboardPageStyle.dashboardPageGoalsList}>
                        {goals.map((goal) => (
                            <GoalItem key={goal._id} goal={goal} />
                        ))}
                    </div>
                ) : (
                    <h3 className={dashboardPageStyle.dashboardPageNoGoalText}>
                        You have not set any goals
                    </h3>
                )}
            </section>
        </>
    );
}

export default DashboardPage;
