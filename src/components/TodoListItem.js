import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const TodoListItem = ({todo, onPressDone, onLongPressTodo}) => (
  <TouchableOpacity onPress={onPressDone} onLongPress={onLongPressTodo}>
    <View style={[Styles.line, todo.done ? Styles.colorDone : null]}>
      <Text style={[Styles.lineText, todo.done ? Styles.lineThrough : null]}>
        {[todo.text, todo.done ? ' ' + 'conluido!' : null]}
      </Text>
    </View>
  </TouchableOpacity>
);

const Styles = StyleSheet.create({
  line: {
    backgroundColor: 'lightgreen',
    borderRadius: 10,
    marginTop: 10,
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#bbb',
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  lineText: {
    color: 'white',
    fontSize: 30,
  },
  lineThrough: {
    textDecorationLine: 'line-through',
  },
  colorDone: {
    backgroundColor: 'cadetblue',
  },
});

export default TodoListItem;
