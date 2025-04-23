import React, {useState, useReducer} from 'react';
import {connect} from 'react-redux';

const ACTION_TYPES = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    STEP_CHANGE: 'STEP_CHANGE'
}

const MyComponent = (props) => {

    console.log(props);
    
    // const [state, dispatch] = useReducer(reducer, {
    //                                     count: 0,
    //                                     step: 0
    //                                         });
    
    const increment = () => {
        // setCount(count + step)
        props.dispatch({
            type: ACTION_TYPES.INCREMENT
        })
    }

    const decrement = () => {
        // setCount(count - step)
        props.dispatch({
            type: ACTION_TYPES.DECREMENT
        })
    }

    const changeHandler = ({target: {value}}) => {
        // setStep(Number(value));
    //     props.dispatch({
    //         type: ACTION_TYPES.STEP_CHANGE,
    //         value
    //     })
     }
    
    return (
       
        <div>
            <h1>{props.count}</h1>
            {/* <input name="step" value={state.step} onChange={changeHandler} /> */}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

//export default MyComponent;


const mapStateToProps = ({count, step}) => {
    // функція, яка приймає весь об'єкт стору і повертає тільки ту частину, яка потрібна поточній компоненті
    // повернена частина стору вкладається компоненті у пропси!
    return {count, step}
}

// const HOC = connect(mapStateToProps);
// const wrappedComponent = HOC(MyComponent);


export default connect(mapStateToProps)(MyComponent);



/*
 Керування станом:
 
 | 1. Локальний стан компоненти
 | 2. Контекст
 - 3. Redux
 
 */



 /*
 REDUX
 
 Передбачуваний контейнер для стану
 
 UI за допомогою функції dispatch відправляє об'єкт action до функції-редьюсера
 Reducer приймає поточний state, action і на основі них оновлює store
 Оновлення store призводить до оновлення ПІДПИСАНИХ на цю частину стору компонент.
 
 
 */
 
 /*
 
 Redux --- store
 
 React-redux --- підписка на store і оновлення потрібних компонент
 
 
 
 
 +1. Створити та налаштувати store
 +2. Створити функцію-редьюсер для керування store
 +3. Створити та налаштувати Provider, який роздає значення store всім підключеним компонентам
 4. Підключити до провайдера компоненти (підписати їх на оновлення)
 
 */