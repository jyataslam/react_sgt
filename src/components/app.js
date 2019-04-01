import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React, {Component} from 'react';
import axios from 'axios';
import StudentTable from './students_table';
import AddStudent from './add_student';

class App extends Component {
    state = {
        students: [],
        error: '',
        addError: '',
        deleteError: ''
    }

    addStudent = async (student) => {
        // POST takes two arguments. 1st is url, 2nd is an object with any data we are sending to db
        try {
            await axios.post('/api/grades', student);
        
            this.getStudentData();
        } catch(error){
            this.setState({
                addError: 'Error: Student not added'
            });
        }
    }

    deleteStudent = async (id) => {
        //look at server.js file in sgt_advanced to see the url argument that must be passed in
        try {
            await axios.delete(`/api/grades/${id}`);

        this.getStudentData();
        } catch(error){
            this.setState({
                deleteError: 'Error: Student not deleted'
            })
        }
    }

    componentDidMount(){
        // Render has been run, now this will run
        // Call getStudentData to get the data from the server
        this.getStudentData();
    }

    // getStudentDataOldAxiosWay(){
        // Call server here
        //if you get CORS error, must go to original server.js file and npm install --save cors
        //first thing you pass in axios call is (1. url) then (if it's a promise) in parameter it will be whatever the axios request sent to you (response)
        // axios.get('http://localhost:3001/api/grades').then((response) => {
        //     this.setState({
                // Update state to put data inside
        //         students: response.data.data
        //     });
        // }).catch((error) => { //catch only happens when the server throws an error
        //     console.log(error);
        //     this.setState({
        //         error: 'Error retrieving student data'
        //     });
        // });
    // }

    async getStudentData(){
        // Using async/await
        // Call server here
        try {
            const response = await axios.get('/api/grades');
        
            this.setState({
                students: response.data.data
            });
        } catch(error) {
            this.setState({
                error: 'Error retrieving student data'
            });
        }
        
    }

    render(){
        return (
            <div>
                <h1 className="center">React SGT</h1>
                <h5 className="red-text text-darken-2">{this.state.error}</h5>
                <div className="row">
                <StudentTable col="s12 m8" list={this.state.students} delete={this.deleteStudent}/>
                <h5 className="red-text text-darken-2">{this.state.deleteError}</h5>
                <AddStudent col="s12 m4" add={this.addStudent} />
                <h5 className="red-text text-darken-2">{this.state.addError}</h5>
                </div>
            </div>
        );
    }
}

export default App;
