import React from "react";
import EventOverview from "../../components/EventOverview/EventOverview";
import { Route, Switch } from "react-router-dom";
const eventContainer = props => (
  <Switch>
    <Route
      exact
      path={`${props.match.url}/overview`}
      component={EventOverview}
    />
  </Switch>
);

export default eventContainer;
