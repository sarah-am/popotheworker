import React, { Component } from "react";
import tasksStore from "../Stores/TasksStore";
import { observer } from "mobx-react";
import Task from "./Task";
import { MDBListGroup } from "mdbreact";

class TodayList extends Component {
  render() {
    let tasks = tasksStore.todayTasks.map(task => <Task task={task} />);
    return (
      <div>
        <h3>Today</h3>
        <MDBListGroup>{tasks}</MDBListGroup>
      </div>
    );
  }
}

export default observer(TodayList);
