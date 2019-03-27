import React, {Component} from 'react';
import studentData from '../dummy_data/student_list';

class StudentTable extends Component {
    state = {
        students: []
    }

    componentDidMount(){
        // Render has been run, now this will run
        // Call getStudentData to get the data from the server
        this.getStudentData();
    }

    getStudentData(){
        // Call server here

        this.setState({
            // Update state to put data inside
            students: studentData
        });
    }

    render(){
        // destructure this.state / creating a variable called students from this.state.students
        const {students} = this.state;

        // map looks through the array 
        const studentElements = students.map((student) => {
            return (
                <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                    <td>{student.grade}</td>
                </tr>
            )
        });
        console.log(studentElements);
        return (
            <div className='col s12 m8'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                       {studentElements}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StudentTable;