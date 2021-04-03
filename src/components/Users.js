import React from 'react';



export function UserList ({users}) {


    return (
        <>
            {users.map(user => (
                <>
                    <div key={user.id}></div>
                    <h3>{user.name} </h3>
                    <p> {user.email}</p>
                </>
            ))}
        </>
    )
}