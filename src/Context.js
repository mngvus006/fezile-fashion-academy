import React, { Component } from 'react';
import {academyCourses, detailCourse} from './coursesData';

const CourseContext = React.createContext();

 class CourseProvider extends Component {
    state = {
       courses: academyCourses,
       modalOpen: true,
       modalProduct: true,
       courseModal: detailCourse
    };

    
    openModal = id => {
    const course = this.getItem(id);
    this.setState(() =>{
        return {modalOpen: true, courseModal: course};
    })
};

    closeModal = () => {
        this.setState(() => {
          return { modalOpen: false };
        });
      };

   getItem = id => { return this.state.courses.find(item => item.id === id)};

    render() {
        return (
       
            <CourseContext.Provider
            value={{
               ...this.state,
                closeModal: this.closeModal,
                openModal: this.openModal
            }}
            >
 {this.props.children}
            </CourseContext.Provider>
        )
    }
}

const CourseConsumer = CourseContext.Consumer;

export {CourseConsumer, CourseProvider}
