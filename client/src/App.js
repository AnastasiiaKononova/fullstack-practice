import React, {useState} from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);


  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/messenger' component={Dashboard} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;