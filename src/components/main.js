import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

// these are routers i.e. in python, @app.route("/")
//                                      def home():
// where the route when typed into URL is what is displayed
// uses route from react dom

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/joshualuong" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
  //  <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;
