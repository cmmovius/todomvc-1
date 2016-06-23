import React from 'react';
import Tasks from './Tasks.jsx';
import TaskActions from '../actions/TaskActions';
import TaskStore from '../stores/TaskStore';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = TaskStore.getState();
  }

  componentDidMount() {
    TaskStore.listen(this.storeChanged);
    TaskActions.read();
  }

  componentWillUnmount() {
    TaskStore.unlisten(this.storeChanged);
  }

  storeChanged = (state) => {
    this.setState(state);
  }

  render() {
    const tasks = this.state.tasks;
    return (
      <div>
        <button onClick={this.addTask}>Add Task</button>
        <Tasks items={tasks}/>
      </div>
    )
  }

  addTask = () => {
    TaskActions.create({ task : "New Task (Click to Edit)"})
  }

}
