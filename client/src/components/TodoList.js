import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getTasks, deleteTask } from '../actions/taskActions';
import PropTypes from 'prop-types';
class TodoList extends Component{

    componentDidMount(){
        this.props.getTasks();
    }

    onDeleteClick = (id) => {
        this.props.deleteTask(id);
    }


    render(){
        
        const {tasks} = this.props.task;
        return(
          
           
            <Container style = {{height: '400px', overflowY: 'auto'}}>
                <br />
                <ListGroup>
                    <TransitionGroup className="TodoList" >
                        {tasks.map(({_id, name}) => 
                        <CSSTransition key={_id} timeout ={500} classNames ="fade">
        
                            <ListGroupItem size ="sm">
                            {name}
                                <Button color="success" size="sm" style={{marginLeft: '3.5em'}} onClick={this.onDeleteClick.bind(this, _id)}>&#10004;</Button>
                                
                            </ListGroupItem>

                            </CSSTransition>
                            )}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }


}

TodoList.propTypes = {
    getTasks: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    task: state.task
})

export default connect(mapStateToProps, { getTasks, deleteTask })(TodoList);