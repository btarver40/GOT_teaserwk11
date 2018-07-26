import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Cultures from './Cultures';
import Flash from './Flash';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Segment basic>
        <NavBar />
        <Flash />
          <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route exact path='/cultures' component={Cultures} /> */}
            <Route component={NoMatch} />
          </Switch>
      </Segment>
    );
  }
}

export default App;
