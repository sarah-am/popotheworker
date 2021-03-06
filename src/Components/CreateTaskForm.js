import React, { Component } from "react";
import Datetime from "react-datetime";
import "../DatetimePicker.css";
import tasksStore from "../Stores/TasksStore";
import { observer } from "mobx-react";
import "mdbreact";
import {
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBInput,
  MDBModalBody,
  MDBModalFooter
} from "mdbreact";

class CreateTaskForm extends Component {
  state = {
    title: "",
    details: "",
    due: "",
    modal: false
  };

  toggleModal() {
    this.setState({ modal: !this.state.modal });
  }

  cancelTask() {
    this.setState({ taskText: "", taskDetails: "", due: "" });
    this.toggleModal();
  }

  addTask() {
    if (this.state.title) {
      tasksStore.addTask(this.state.title, this.state.details, this.state.due);
      this.setState({ taskText: "", taskDetails: "", due: "" });
      this.toggleModal();
    }
  }

  render() {
    return (
      <div>
        <MDBBtn outline color="primary" onClick={this.toggleModal.bind(this)}>
          New Task
        </MDBBtn>
        <MDBModal
          isOpen={this.state.modal}
          toggle={this.toggleModal.bind(this)}
          size="sm"
        >
          <MDBModalHeader>Add A New Task</MDBModalHeader>
          <MDBModalBody>
            <MDBInput
              type="text"
              label="Task"
              onChange={e => this.setState({ title: e.target.value })}
              value={this.state.title}
              placeholder="Task"
            />
            <MDBInput
              type="textarea"
              label="Details (Optional)"
              onChange={e => this.setState({ details: e.target.value })}
              placeholder="Optional details"
              value={this.state.details}
            />
            <Datetime
              defaultValue="Optional Due Date"
              value={this.state.due}
              onChange={momentObj => {
                this.setState({ due: momentObj });
              }}
            />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              color="secondary"
              size="sm"
              onClick={this.cancelTask.bind(this)}
            >
              Cancel
            </MDBBtn>
            <MDBBtn color="primary" size="sm" onClick={this.addTask.bind(this)}>
              Add Task
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </div>
    );
  }
}

export default observer(CreateTaskForm);
