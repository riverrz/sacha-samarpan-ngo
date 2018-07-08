import React from "react";
import EventOverview from "../../components/EventOverview/EventOverview";
import EventArchive from '../../components/EventArchive/EventArchive';
import EventUpcoming from '../../components/EventUpcoming/EventUpcoming';
import { Route, Switch } from "react-router-dom";
const eventContainer = props => (
  <Switch>
    <Route
      exact
      path={`${props.match.url}/overview`}
      component={EventOverview}
    />
    <Route
      exact
      path={`${props.match.url}/archive`}
      component={EventArchive}
    />
    <Route
      exact
      path={`${props.match.url}/upcoming`}
      component={EventUpcoming}
    />
  </Switch>
);

export default eventContainer;
