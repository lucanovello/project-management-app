import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createGoal } from '../../features/goals/goalSlice';
import goalFormStyle from './Goals.module.css';

function GoalForm() {
    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(createGoal({ text }));
        setText('');
    };

    return (
        <form className={goalFormStyle.goalFormContainer} onSubmit={onSubmit}>
            <input
                type="text"
                className={goalFormStyle.goalFormInput}
                name="text"
                id="text"
                placeholder="Enter new goal"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button className={goalFormStyle.goalFormBtn} type="submit">
                Add Goal
            </button>
        </form>
    );
}

export default GoalForm;
