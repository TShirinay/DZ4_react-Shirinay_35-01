import React from 'react';

const MainPage = ({user}) => {
    return (
        <div>
            <p>Добро пожаловать хозяин {user.name} {user.lastname} </p>
        </div>
    );
};

export default MainPage;