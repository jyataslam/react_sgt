import React, {Component} from 'react';

class StudentTable extends Component {
    render(){
        // destructure this.state / creating a variable called students from this.state.students
        const {col = 's12', list} = this.props;

        // map through the array
        const studentElements = list.map((student) => {
            return (
                <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                    <td>{student.grade}</td>
                </tr>
            )
        });

        return (
            <div className={`col ${col}`}>
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