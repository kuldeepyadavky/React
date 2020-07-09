import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Main from './components/MainComponent';

import { DISHES } from './shared/dishes.js';

class App extends Component {


  render(){
  return (
    <div className="App">

     <Main />
    </div>

  );
}
}

export default App;
