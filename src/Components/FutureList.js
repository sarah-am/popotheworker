import React, { Component } from "react";

import Task from "./Task";

class FutureList extends Component {
  render() {
    let tasks = this.props.tasks.map(task => <Task task={task} />);
    return (
      <div>
        <h3>Future</h3>
        {tasks}
      </div>
    );
  }
}

export default FutureList;
