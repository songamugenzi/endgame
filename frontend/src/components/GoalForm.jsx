import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createGoal } from '../features/goals/goalSlice';
import { toast } from 'react-toastify';


function GoalForm() {

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            toast.error('Please add a goal')
        }

        dispatch(createGoal({text}))
        setText('')
    }

    return (
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Goal</label>
                <input 
                    type="text" 
                    name='text' 
                    id='text' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-group">
                <button type='submit' className='btn btn block'>Add Goal</button>
            </div>
        </form>
    </section>
    )
}

export default GoalForm