import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../../components/About/About";
import Founders from '../../components/Founders/Founders';
import Issues from '../../components/IssuesAndViews/IssuesAndViews';
import Team from '../../components/Team/Team';

const aboutContainer = props => {
    console.log(props.match.url);
  return (
    <Switch>
      <Route  exact path={`${props.match.url}`} component={About}/>
      <Route  exact path={`${props.match.url}/founders`} component={Founders}/>
      <Route  exact path={`${props.match.url}/issues`} component={Issues}/>
      <Route  exact path={`${props.match.url}/team`} component={Team}/>
    </Switch>
  );
};

export default aboutContainer;