import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface TaskFormProps {
  onAddTask: (title: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [text, setText] = useState('');

  const handleAddTask = (): void => {
    if (text.trim()) {
      onAddTask(text);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ajouter une nouvelle tâche..."
        value={text}
        onChangeText={setText}
      />
      <Button title="AJOUTER" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginRight: 10
  }
});

export default TaskForm;
