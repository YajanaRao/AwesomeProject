import Store from './src/store'
import Navigator from './Navigator'
import React, { Component } from 'react';
import { Provider } from 'react-redux'

class App extends Component {
  render() {

    return (

      <Provider store={Store}>
        <Navigator />
      </Provider>
    );
  }
}



export default App;
