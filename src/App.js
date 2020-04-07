import React, {Component} from 'react';
import './App.css';
import AddTask from "./components/addTask";
import Tasks from "./components/tasks";

class App extends Component {

    state = {
        tasks: [],
        increment: 1,
    };

    componentDidMount() {
        const state = localStorage.getItem('tasks');
        if(state){
            this.setState(JSON.parse(state));
        }
    }

    componentDidUpdate() {
        const {state} = this;
        localStorage.setItem('tasks', JSON.stringify(state));
    }

    getId = () => {
        const {increment} = this.state;
        this.setState({increment: increment + 1});
        return increment;
    }

    addTask = (task) => {
        const {tasks} = this.state;
        task.id = this.getId();
        tasks.push(task);
        this.setState({tasks});
    };


    handleDeleteTask = (id) => {
        let {tasks} = this.state;
        tasks = tasks.filter(task => task.id !== id);
        this.setState({tasks});
    }

    render() {
        const {tasks} = this.state;
        return (
            <div className="container mt-5">
                <header className="list-group-item">
                    header
                </header>
                <main>
                    <Tasks tasks={tasks} handleDeleteTask={this.handleDeleteTask}/>
                </main>
                <footer className="list-group-item">
                    <AddTask addToTask={this.addTask}/>
                </footer>
            </div>
        );
    }
}

export default App;
