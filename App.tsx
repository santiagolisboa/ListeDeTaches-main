import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import FloatingActionButton from './components/FloatingActionButton';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddTask = (taskTitle: string): void => {
    const newTask: Task = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId: number): void => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleToggleTaskCompletion = (taskId: number): void => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header
          createdTasks={tasks.length}
          completedTasks={tasks.filter(task => task.completed).length}
        />
        {isFormVisible && <TaskForm onAddTask={handleAddTask} />}
        <TaskList
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onToggleTask={handleToggleTaskCompletion}
        />
        <FloatingActionButton
          isFormVisible={isFormVisible}
          onPress={toggleFormVisibility}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default App;
