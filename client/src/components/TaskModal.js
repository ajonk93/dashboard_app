import React, { Component } from 'react';
import {
    Button, 
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect} from 'react-redux';
import { addTask } from '../actions/taskActions';

class TaskModal extends Component {

    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            name: this.state.name
        }

        //add task - addTask action
        this.props.addTask(newTask);

        //Close modal
        this.toggle();
    }


    render(){
        

        return(
            <div>
                <Button color="info" 
                style={{marginBotton: '2rem'}} onClick = {this.toggle}>Add new task</Button>
                <Modal isOpen = {this.state.modal} toggle = {this.toggle}>

                    <ModalHeader toggle = {this.toggle}>Add new task</ModalHeader>
                    <ModalBody>
                        <Form onSubmit = {this.onSubmit}>
                            <FormGroup>
                                <Label for = "task">Content</Label>
                                <Input text = "text" name = 'name' id = 'task' placeholder = "description" onChange = { this.onChange}></Input>
                                <Button color = "dark" style = {{marginTop: '2rem'}} block >Add</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>


            </div>
        );
    }

}

const mapStatetoProps = (state) => ({
    task: state.task
})

export default connect(mapStatetoProps, { addTask })(TaskModal);