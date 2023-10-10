import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}
const user1: User = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
};

function Comp2() {
    const [user, setUser] = useState(user1);
    const { id } = useParams(); 

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.error('error', error);
            });
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h2>User Details</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <Link to={`/tasks/${user.id}`} >
                prodcucts of {user.name}
            </Link>
            <Link to={`/`} >
                Home
            </Link>
        </div>
    );
}

export default Comp2;
