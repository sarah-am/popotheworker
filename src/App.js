import React, { Component } from "react";
import "./App.css";
import moment from "moment";
import { MDBContainer } from "mdbreact";

// Components
import TodayList from "./Components/TodayList";
import CreateTaskForm from "./Components/CreateTaskForm";
import FutureList from "./Components/FutureList";
import tasksStore from "./Stores/TasksStore";

class App extends Component {
  componentDidMount() {
    tasksStore.retrieveFromLocalStorage();
  }

  render() {
    return (
      <MDBContainer>
        <CreateTaskForm addTask={tasksStore.addTask.bind(this)} />
        <TodayList tasks={tasksStore.todayTasks} />
        <FutureList tasks={tasksStore.futureTasks} />
      </MDBContainer>
    );
  }
}

export default App;
