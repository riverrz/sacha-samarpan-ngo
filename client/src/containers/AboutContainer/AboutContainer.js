import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../../components/About/About";
import Founders from '../../components/Founders/Founders';
import Issues from '../../components/IssuesAndViews/IssuesAndViews';
const aboutContainer = props => {
    console.log(props.match.url);
  return (
    <Switch>
      <Route  exact path={`${props.match.url}`} component={About}/>
      <Route  exact path={`${props.match.url}/founders`} component={Founders}/>
      <Route  exact path={`${props.match.url}/issues`} component={Issues}/>
    </Switch>
  );
};

export default aboutContainer;
