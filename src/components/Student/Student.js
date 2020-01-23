import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Student extends Component {
  constructor(props) {
    super(props)
    this.state={
      studentInfo: {}
    };
  }

  componentDidMount(){
        console.log(this.props)
    return axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then(results => {
      this.setState({
        studentInfo: results.data
      });
    });
  }

  render() {
    const {first_name, last_name, grade, email} = this.state.studentInfo;
    return (
      <div className="box">
        <h1>Student:</h1>
        <h1>{first_name} {last_name}</h1>
        <h3>Grade: {grade}</h3>
        <h3>Email: {email}</h3>
        <button onClick={this.props.history.goBack}>Back</button>
      </div>
    )
  }
}