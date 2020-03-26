import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import SinglePageHome from './components/single-page-home/SinglePageHome'
import Register from './components/register/Register'
import Login from './components/login/Login'
import CategoryChoice from './components/category-choice/CategoryChoice'
import ProductChoice from './components/product-choice/ProductChoice'
import JornalGenCore from './components/core-jornal/JornalGenCore'
import Home from './components/home/Home'
import Configuration from './components/configuration/Configuration'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={SinglePageHome} />
        </Switch>
        <Switch>
          <Route exact path='/configuration' component={Configuration} />
        </Switch>
        <Switch>
          <Route exact path='/home' component={Home} />
        </Switch>
        <Switch>
          <Route exact path='/register' component={Register} />
        </Switch>
        <Switch>
          <Route exact path='/login' component={Login} />
        </Switch>
        <Switch>
          <Route exact path='/category-choice' component={CategoryChoice} />
        </Switch>
        <Switch>
          <Route exact path='/product-choice' component={ProductChoice} />
        </Switch>
        <Switch>
          <Route exact path='/core' component={JornalGenCore} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
