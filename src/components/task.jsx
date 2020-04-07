import React from 'react';

const Task = ({task: {id, text, important}, handleDeleteTask}) => {
    if (important) {
        text = <strong className='text-primary'>{text}</strong>
    }
    return (
        <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div>{text}</div>
            <div className="btn-group">
                <button className="btn btn-sm btn-outline-primary">
                    <i className="fas fa-exclamation-triangle"></i> important
                </button>
                <button className="btn btn-sm btn-outline-danger" onClick={() => {
                    handleDeleteTask(id);
                }}>
                    <i className="fas fa-eraser"></i> Delete
                </button>
            </div>
        </div>
    );
};

export default Task;