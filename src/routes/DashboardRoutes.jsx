import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { NavBar } from '../ui/NavBar';
import { HomePage } from '../containers/HomePage/HomePage';
import { HeroDetail } from '../containers/HeroDetail/HeroDetail';

export const DashboardRoutes = () => {
  return (
    <>
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/character/:id' component={HeroDetail} />

          <Redirect to='/' />
        </Switch>
      </div>
    </>
  );
};
