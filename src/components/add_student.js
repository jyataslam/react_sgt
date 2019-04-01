import React, {Component} from 'react';

class AddStudent extends Component {
    state = {
        name: '',
        course: '',
        grade: ''
    }

    //will get an event object passed to it when the method is called
    handleInputChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    //must bind click events
    handleSubmit = (event) => {
        event.preventDefault();
        //add student / callback from app.js prop
        this.props.add({...this.state});

        this.setState({
            name: '',
            course: '',
            grade: ''
        })

    }

    render(){
        const {col = 's12'} = this.props;
        const {name, course, grade} = this.state;

        return (
            <form onSubmit={this.handleSubmit} className={`col ${col}`}>
                <div className="input-field">
                    <input name="name" autoComplete="off" id="name" type="text" value={name} onChange={this.handleInputChange}/>
                    <label htmlFor="name">Student Name</label>
                </div>
                <div className="input-field">
                    <input name="course" autoComplete="off" id="course" type="text" value={course} onChange={this.handleInputChange}/>
                    <label htmlFor="course">Student Course</label>
                </div>
                <div className="input-field">
                    <input name="grade" autoComplete="off" id="grade" type="text" value={grade} onChange={this.handleInputChange}/>
                    <label htmlFor="grade">Student Grade</label>
                </div>
                <button className="btn btn-large z-depth-2 waves-effect waves-dark">
                    Add Student<i className="material-icons right">add_circle</i>
                </button>
            </form>
        )
    }
}

export default AddStudent;