import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigaion from './Navigation'
import Home from './Home'
import Department from './Department'
import Employee from './Employee'



function App()
{
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="m-3 d-flex justify-content-center">MY APP</h3>
        <Navigaion />

        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/department' component={Department} />
          <Route path='/employee' component={Employee} />

        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
