import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Comp3() {
    const { id } = useParams();
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
            .then((response) => {
                setTasks(response.data);
            })
            .catch((error) => {
                console.error('error', error);
            });
    }, []);
    return (
        <div>
            <h2>Tasks</h2>
            <ul>
                {tasks.map((task) => {
                    if (task.userId === parseInt(id)) {
                        return (
                            <Link to={`/tasksDetails/${task.id}`} key={task.id}>
                                <li>{task.title}</li>
                            </Link>
                        );
                    }
                    return null;
                })}
            </ul>
            <Link to={`/`} >
                Home
            </Link>
        </div>
    )
}

export default Comp3