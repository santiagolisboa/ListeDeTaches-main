import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Task } from '../App';

interface TaskItemProps {
  task: Task;
  onDeleteTask: (id: number) => void;
  onToggleTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDeleteTask, onToggleTask }) => {
  const [selected, setSelected] = useState(false);

  const handlePressTask = () => {
    setSelected(!selected);
    onToggleTask(task.id);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePressTask} style={styles.checkboxContainer}>
        <Text style={styles.checkmark}>{selected ? '✓' : ''}</Text>
      </TouchableOpacity>
      <Text style={[styles.taskText, selected && styles.selected]}>
        {task.title}
      </Text>
      {selected && (
        <TouchableOpacity onPress={() => onDeleteTask(task.id)} style={styles.trashIcon}>
          <Text style={styles.trashIconText}>🗑️</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  taskText: {
    flex: 1,
    marginLeft: 10,
  },
  selected: {
    color: 'rgba(0, 0, 0, 0.2)',
  },
  checkboxContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  checkmark: {
    fontSize: 18,
    color: '#000',
  },
  trashIcon: {
    padding: 10,
  },
  trashIconText: {
    fontSize: 18,
  },
});

export default TaskItem;
