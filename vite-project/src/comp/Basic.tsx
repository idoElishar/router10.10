import React from 'react'
import { Link } from 'react-router-dom';

function Basic() {
    return (
        <div>
            <Link to={`/tasks`} >
                Users
            </Link>
            <br/>
            <Link to={'/products'} >
                products
            </Link>
        </div>
    )
}

export default Basic

