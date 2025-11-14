import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar-component';
import CreateUser from './components/create-user-component';
import ExerciseList from './components/exercises-list-component';
import EditExercise from './components/edit-exercises-component';
import CreateExercise from './components/create-exercises-component';
import Carousel from './components/LandingPage/Carousel';
function FitnessApp() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path='/' exact component={ExerciseList} />
        <Route path='/edit/:id' component={EditExercise} />
        <Route path='/create' component={CreateExercise} />
        <Route path='/user' component={CreateUser} />
        <Carousel />
      </div>
    </Router>
  );
}

export default FitnessApp;
