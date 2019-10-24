import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import TodoList from './components/TodoList';
import TaskModal from './components/TaskModal';
import WeatherComponent from './components/WeatherComponent';
import { Provider } from 'react-redux';
import store from './store';
import { Container, Col, Row} from 'reactstrap';
import NewsComponent from './components/NewsComponent';

class App extends Component {
  render() {
    return(
      <Provider store = { store } >
    <div className="App">
      <AppNavbar></AppNavbar>
      <Container>
    
  <Row>
    <Col><b>Weather Component</b> <WeatherComponent></WeatherComponent></Col>
    <Col xs={6}>
      <TaskModal></TaskModal>
      <TodoList></TodoList>
      </Col>
    <Col><b>News Component </b><NewsComponent></NewsComponent></Col>
  </Row>
      
      </Container>
    </div>
    </Provider>
    )
  };
}

export default App;
