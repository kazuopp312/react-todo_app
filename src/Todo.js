import React from 'react';
import './Todo.css';
import { List, Avatar, ImageIcon,ListItemAvatar, ListItem, ListItemText } from '@material-ui/core';

function Todo(props) {
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar>
        </ListItemAvatar>
        <ListItemText primary={props.text} secondary='Deadline' />
      </ListItem>
    </List>
  )
}

export default Todo
