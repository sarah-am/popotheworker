import React, { Component } from "react";

import Task from "./Task";

class TodayList extends Component {
  render() {
    let tasks = this.props.tasks.map(task => <Task task={task} />);
    return <div>{tasks}</div>;
  }
}

export default TodayList;
