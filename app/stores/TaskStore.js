import alt from '../lib/alt.js';
import TaskActions from '../actions/TaskActions.js';
import * as $ from "axios";

class TaskStore {
  constructor() {
    this.bindActions(TaskActions);
    this.tasks = [];
  }

  read() {
    let _this = this;
    const tasks = this.tasks;
    $.get("https://todoz.stamplayapp.com/api/cobject/v1/task", { params : { select : "task" } })
      .then(function(res){
        let alltasks = res.data.data;
        _this.setState({
          tasks : tasks.concat(alltasks)
        })
      })

  }
  create(task) {
    let _this = this;
    const tasks = this.tasks;
    $.post("https://todoz.stamplayapp.com/api/cobject/v1/task", task)
      .then(function(res) {
        let task = res.data;
        _this.setState({
          tasks : tasks.concat(task)
        })
      })
  }
  update() {
    let _this = this;
    const tasks = this.tasks;
    const taskIndex = this.findTask(id);

    if(taskIndex < 0) { return }

    $.put("https://todoz.stamplayapp.com/api/cobject/v1/task" + id, { task : task })
      .then(function(res) {
        console.info("Updated", id);
      }, function(err) {
        console.err("Error updating :", id, err);
      })

    tasks[taskIndex].task = task;

    this.setState({
      tasks : tasks
    })
  }
  delete() {

  }
  findTask(id) {
    const tasks = this.tasks;
    const taskIndex = task.findIndex((task) => task.id === id);
    if(taskIndex < 0) {
      console.warn("Failed to find task", tasks, id);
    }
    return taskIndex;
  }
}

export default alt.createStore(TaskStore, 'TaskStore');
