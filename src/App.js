import React, {useEffect, useState} from 'react';
import ErrorPage from "./components/errorPage/ErrorPage";
import MainPage from "./components/mainPage/MainPage";

const App = () => {
    const [user, setUser] = useState({name: '', lastname: ''})

    useEffect(() => {
        const userName = prompt('Как вас зовут?')
        const userLastName = prompt('Какая у вас фамилия?')
        setUser({name: userName, lastname: userLastName})
    },[])
    console.log(user)
    return (
        <div>
            {
                user.name === 'John' && user.lastname === 'Johns'?(
                    <MainPage user={user}/>
                ):(
                    <ErrorPage user={user}/>
                )
            }
        </div>
    );
};

export default App;