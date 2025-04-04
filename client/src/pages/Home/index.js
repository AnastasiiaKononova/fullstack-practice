////// Показуємо юзеру signIn/signUp форму входу у додаток
import React, {useState} from 'react';
import SignInForm from '../../components/SignInForm';
import SignUpForm from '../../components/SignUpForm';

const Home = () => {
    const [formView, setView] = useState(true);

    const changeView = () => {
        setView(!formView);
    }
    const btnText = formView ? 'Sign Up' : 'Sign In';
    
    return (
        <main>
            <button onClick={changeView}>{btnText}</button>
            {formView ? <SignInForm /> : <SignUpForm />}
        </main>
    );
}

export default Home;
