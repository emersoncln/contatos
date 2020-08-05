import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import TodoListItem from './TodoListItem';
import {toggleTodo, setEditingTodo} from '../actions';

const List = ({todos, dispatchTodoDone, dispatchSetEditingTodo}) => (
  <View>
    {todos.map((todo) => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        onPressDone={() => {
          dispatchTodoDone(todo.id);
        }}
        onLongPressTodo={() => dispatchSetEditingTodo(todo)}
      />
    ))}
  </View>
);

const mapStateToProps = (state) => {
  const {todos} = state;
  return {todos};
};

export default connect(mapStateToProps, {
  dispatchTodoDone: toggleTodo,
  dispatchSetEditingTodo: setEditingTodo,
})(List);
