import React, {useState, useReducer} from 'react';


function reducer (state, action) {
    switch(action.type) {
        case 'INCREMENT': {
            return {
                ...state,
                count: state.count + state.step
            } 
        }
        case 'DECREMENT': {
            return {
                ...state,
                count: state.count - state.step
            }
        }
        case 'STEP_CHANGE': {
            return {
                ...state,
                step: Number(action.value)
            }
        }
    }
    return state;
}

const MyComponent = (props) => {
    const [state, dispatch] = useReducer(reducer, {
                                        count: 0,
                                        step: 0
                                            });

    // const [count, setCount] = useState(0);
    // const [step, setStep] = useState('');

    const increment = () => {
        // setCount( count + step)
        dispatch({
            type: 'INCREMENT'
        })
    }

    const decrement = () => {
        // setCount( count - step)
        dispatch({
            type: 'DECREMENT'
        })
    }

    const changeHandler = ({target: {value}}) => {
        // setStep(Number(value));
        dispatch({
            type: 'STEP_CHANGE',
            value
        })
    }



    return (
        <div>
            <h1>{state.count}</h1>
            <input name="step" value={state.step} onChange={changeHandler} />
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>          
        </div>
    );
}

export default MyComponent;



/*
 Керування станом:
 
 | 1. Локальний стан компоненти
 | 2. Контекст
 - 3. Redux
 
 */