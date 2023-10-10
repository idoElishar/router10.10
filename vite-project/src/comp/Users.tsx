import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Comp1() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error('error', error);
            });
    }, []);
    return (
        <div>
            <div>
                <h2>list of users</h2>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <Link to={`/users/${user.id}`} >
                                {user.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Comp1