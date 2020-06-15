import React from 'react';
import {
  View,
} from 'react-native';

import configureStore from './Src/configureStore'
import { Provider } from 'react-redux'
const store = configureStore()
import Routes from './Src/routes'

  export default class App extends React.Component {
    render() {
      return (
        <View style = {{flex:1}}>
          <Provider store={store}>
            <Routes />
          </Provider>
        </View>
      );
    }
  }
