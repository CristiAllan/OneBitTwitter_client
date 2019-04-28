import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import HomePageContainer from './containers/HomePageContainer/HomePageContainer'
import ProfilePageContainer from './containers/ProfilePageContainer/ProfilePageContainer'

class App extends Component {
  render() {
    return (
    <div>
      <BrowserRouter>
        {/* <Link to="/welcome">Home</Link> <br/>
        <Link to="/user/1">User 1 profile</Link> */}
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route exact path="/user/:id" component={ProfilePageContainer} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
