import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';
import { Task } from '../App';

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
  onToggleTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask, onToggleTask }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TaskItem
          task={item}
          onDeleteTask={onDeleteTask}
          onToggleTask={onToggleTask}
        />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default TaskList;
