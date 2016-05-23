import alt from '../lib/alt.js';
import TaskActions from '../actions/TaskActions.js';

class TaskStore {
  constructor() {
    this.bindActions(TaskActions);
    this.tasks = [];
  }

  read() {

  }
  create() {

  }
  update() {

  }
  delete() {

  }
}

export default alt.createStore(TaskStore, 'TaskStore');
