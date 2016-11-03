import { browserHistory, IndexRoute, Router, Route } from 'react-router';
import React from 'react';
import MainButtons from 'components/MainButtons';
import App from 'components/App';

const Routes = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route component={App} path="/">
        <IndexRoute component={MainButtons}/>
      </Route>
    </Router>
  }
});

export default Routes;
