import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Forms from './components/Forms';
import List from './components/List';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default class Todo extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={Styles.container}>
          <Forms />
          <List />
        </View>
      </Provider>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cadetblue',
    padding: 5,
  },
});
