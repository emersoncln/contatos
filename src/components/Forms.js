import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import Input from './Input';
import {connect} from 'react-redux';
import {addTodo, setText, updateTodo} from '../actions';

class Forms extends Component {
  onPress() {
    const {todo} = this.props;
    if (todo.id) {
      this.props.dispatchUpdateTodo(todo);
    } else {
      this.props.dispatchAddTodo(this.props.todo.text);
    }
  }

  onChangeText(text) {
    this.props.dispatchTodoText(text);
  }
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.inputContainer}>
          <Input
            onChangeText={(text) => this.onChangeText(text)}
            value={this.props.todo.text}
          />
        </View>

        <View style={Styles.btnConatiner}>
          <TouchableOpacity style={Styles.btn} onPress={() => this.onPress()}>
            <Text>{this.props.todo.id ? 'atualizar' : 'novo'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
  },
  inputContainer: {
    flex: 4,
  },
  btnConatiner: {
    flex: 1,
  },

  btn: {
    marginLeft: 10,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    todo: state.editingTodo,
  };
};

const mapDispatchToProps = {
  dispatchAddTodo: addTodo,
  dispatchTodoText: setText,
  dispatchUpdateTodo: updateTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
