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

  }
  delete() {

  }
}

export default alt.createStore(TaskStore, 'TaskStore');
