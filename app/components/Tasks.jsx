import React from 'react';
import Task from './Task.jsx';

export default class Tasks extends React.Component {
  render() {
    const tasks = this.props.items;
    // [
    //   {
    //     id: 1,
    //     body: 'Learn React'
    //   },
    //   {
    //     id : 2,
    //     body : 'Learn ArcGIS API'
    //   },
    //   {
    //     id : 3,
    //     body : 'Build Awesome App'
    //   }
    // ]

    return (
        <ul>
          { tasks.map(this.renderTask) }
        </ul>
    )
  }

  renderTask = (task) => {
    return (
      <li key={task.id}>
        <Task task={task.task}
              onEdit={this.props.onEdit.bind(null, task.id)}
              />
      </li>
    )
  }
}
