import React from 'react';
import { Route } from 'react-router-dom';
import AppRouter from './config/router';


class App extends React.Component{
  render(){
    return(
      <div>
        <h2></h2>
        <AppRouter></AppRouter>
      </div>
    )
  }
}

export default App;