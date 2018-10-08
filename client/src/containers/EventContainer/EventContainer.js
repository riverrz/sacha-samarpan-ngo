import React from "react";
import EventOverview from "../../components/Event/EventOverview/EventOverview";
import EventArchive from "../../components/Event/EventArchive/EventArchive";
import EventUpcoming from "../../components/Event/EventUpcoming/EventUpcoming";
import { Route, Switch } from "react-router-dom";
const eventContainer = props => (
  <Switch>
    <Route exact path={`${props.match.url}/`} component={EventOverview} />
    <Route exact path={`${props.match.url}/archive`} component={EventArchive} />
    <Route
      exact
      path={`${props.match.url}/upcoming`}
      component={EventUpcoming}
    />
  </Switch>
);

export default eventContainer;
