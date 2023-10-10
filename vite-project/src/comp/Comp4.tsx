import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Comp4() {
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
            <h3>Task Details</h3>
            <ul>
                {tasks.map((task) => {
                    if (task.id === parseInt(id)) {
                        return (
                            <div>
                            <h4>{task.title}</h4>
                            <div>Task Id: {task.id}</div>
                            <div>User Id: {task.userId}</div>
                            <div>Is Completed: {String(task.completed)}</div>
                            </div>
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

export default Comp4