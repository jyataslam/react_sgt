import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React, {Component} from 'react';
import '../assets/css/app.scss';
import StudentTable from './students_table';
import AddStudent from './add_student';
import studentData from '../dummy_data/student_list';

let id = 100;

class App extends Component {
    state = {
        students: []
    }

    addStudent = (student) => {
        student.id = id++;

        this.setState({
            students: [...this.state.students, student]
        });
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
        return (
            <div>
                <h1 className="center">React SGT</h1>
                <div className="row">
                <StudentTable col="s12 m8" list={this.state.students}/>
                <AddStudent col="s12 m4" add={this.addStudent} />
                </div>
            </div>
        );
    }
}

export default App;
