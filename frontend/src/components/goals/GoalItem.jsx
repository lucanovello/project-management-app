import { useDispatch } from 'react-redux';
import { deleteGoal } from '../../features/goals/goalSlice';
import goalItemStyle from './Goals.module.css';

function GoalItem({ goal }) {
    const dispatch = useDispatch();

    return (
        <div className={goalItemStyle.goalItemContainer}>
            <div className={goalItemStyle.goalItemDate}>
                {new Date(goal.createdAt).toLocaleString('en-US')}
            </div>
            <h2 className={goalItemStyle.goalItemContainerTitle}>{goal.text}</h2>
            <button
                className={goalItemStyle.goalItemDeleteBtn}
                onClick={() => dispatch(deleteGoal(goal._id))}
            >
                🞪
            </button>
        </div>
    );
}

export default GoalItem;
