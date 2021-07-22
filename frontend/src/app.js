import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './containers/home';
import Signin from './containers/signin';
import Signup from './containers/signup';
function App(){

    return(

    <>  
      <Router>
          <Switch>
              <Route exact path = "/" component = {Home} />
              <Route path = "/signin" component = {Signin} />
              <Route path = "/signup" component = {Signup} />
          </Switch>
          
      </Router>
    

    </>
    )
}

export default App;