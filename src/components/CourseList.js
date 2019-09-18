import React, { Component } from "react";
import { CourseConsumer } from "../Context";
import Course from "./Course";

export default class CourseList extends Component {
  render() {
    return (
        <React.Fragment>
      <div>
        <CourseConsumer>
          {value => {
              console.log(value);
            return value.courses.map(course => {
              return <Course
                  key={course.id}
                  course={course}
                />;
            });
          }}
        </CourseConsumer>
      </div>
      </React.Fragment>
    );
  }
}
