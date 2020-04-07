import React, {Component} from 'react';

class AddTask extends Component {

    state = {
        text: '',
        important: false,
    };

    handleChangeForm = ({currentTarget: input}) => {
        const update = {};
        switch (input.type) {
            case "checkbox":
                update[input.name] = input.checked;
                break;
            case "text":
                update[input.name] = input.value;
                break;
            default:
                return;
        }
        this.setState(update);
    };

    handleAddTask = () => {
        const {props: {addToTask}, state: task} = this;
        addToTask(task);
        this.setState({
            text: '',
            important: false,
        });
    }

    render() {
        const {text, important} = this.state;
        return (
            <div className="row">
                <div className="col-10 input-group">
                    <label htmlFor="new_task" className="sr-only"></label>
                    <input type="text" className="form-control rounded-left"
                           autoComplete="off"
                           value={text}
                           name="text"
                           onChange={this.handleChangeForm}
                           placeholder="Enter task"/>
                    <div className="input-group-append">
                        <label className="input-group-text">
                            <input type="checkbox" name="important"
                                   onChange={this.handleChangeForm}
                                   checked={important}/>
                            Important
                        </label>
                    </div>
                </div>
                <div className="col-2">
                    <button className="btn btn-outline-dark btn-block" onClick={this.handleAddTask}>
                        <i className="fas fa-plus"></i> Task
                    </button>
                </div>
            </div>
        );
    }
}

export default AddTask;