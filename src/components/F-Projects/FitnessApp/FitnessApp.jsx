import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Navbar from './components/navbar-component';
import CreateUser from './components/create-user-component';
import ExerciseList from './components/exercises-list-component';
import EditExercise from './components/edit-exercises-component';
import CreateExercise from './components/create-exercises-component';
import Carousel from './components/LandingPage/Carousel';

function FitnessApp() {
  let { path } = useRouteMatch();
  console.log(useRouteMatch());

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path={path}>
          <ExerciseList />
        </Route>
        <Route path={`${path}/edit/:id`}>
          <EditExercise />
        </Route>
        <Route path={`${path}/create`}>
          <CreateExercise />
        </Route>
        <Route path={`${path}/user`}>
          <CreateUser />
        </Route>
      </Switch>
      <Carousel />
    </div>
  );
}

export default FitnessApp;
