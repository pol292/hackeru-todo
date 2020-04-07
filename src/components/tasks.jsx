import React from 'react';
import Task from "./task";

const Tasks = ({tasks,handleDeleteTask}) => (
    <React.Fragment>
        {tasks.map((task) => (
            <Task key={task.id} task={task} handleDeleteTask={handleDeleteTask}/>
        ))}
    </React.Fragment>
);

export default Tasks;