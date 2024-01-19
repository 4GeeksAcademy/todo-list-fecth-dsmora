import React, { useEffect, useState } from "react";

const makeRandomId = (length) => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
//create your first component
const TodoList = () => {
    const [tasks, setTasks] = useState(null);
    const [input, setInput] = useState({});

    [tarea, tarea2];

    const getTasks = () => {
        fetch('https://playground.4geeks.com/apis/fake/todos/user/dsmora', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(
                response => setTasks(response)
            );
    }

    useEffect(() => {
        getTasks();
    }, []);

    const onChange = () => {
        const input = {
            id: aleatorio,
            label: value,
            done: false
        }
    }

    const onEnter = () => {
        setTasks([...tasks, newTasks]);
        updateTasks(tasks);
    }

    const borrar = (id) => {
        const newTasks = tasks.filter(item => item.id !== id);
        setTasks([...tasks, newTasks]);
        updateTasks(tasks);
    }

    const updateTasks = () => {
        fetch('https://playground.4geeks.com/apis/fake/todos/user/dsmora', {
            method: 'PUT',
            body: JSON.stringify(tasks),
            headers: {
                'Content-type': 'application/json'
            }
        })
    };



    const deleteAll = () => {
        fetch('https://playground.4geeks.com/apis/fake/todos/user/dsmora', {
            method: 'PUT',
            body: JSON.stringify([]),
            headers: {
                'Content-type': 'application/json'
            }
        })
    }




    return (
        <div className="text-center">
            <h1>
                Mi lista de tareas
            </h1>
            <input onChange={(e) => saveInput(e.target.value)} onKeyDown={(e) => updateTasks(e)} />
            {tasks && tasks.length > 0 && (
                <ul>
                    {
                        tasks.map((item) => (
                            <li key={item.id}>
                                {item.label}
                                <button onClick={() => borrar(id)}>
                                    borrar
                                </button>
                            </li>
                        ))
                    }
                </ul>
            )}

        </div>
    );
};

export default TodoList;
