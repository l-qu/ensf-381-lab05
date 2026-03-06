import React from 'react';
import users from './users.js';

const UserList = () => users.map(function (user) {
    return (<article>
        <h3>{user.first_name}</h3>
        <p>User Group: {user.user_group}</p>
        <p>ID: {user.id}</p>
    </article>)
});

export default UserList;