import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderProps {
  createdTasks: number;
  completedTasks: number;
}

const Header: React.FC<HeaderProps> = ({ createdTasks, completedTasks }) => {
  const currentDate = new Date().toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>{currentDate}</Text>
      <View style={styles.taskCounters}>
        <Text>Tâches créées: {createdTasks}</Text>
        <Text>Tâches complétées: {completedTasks}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  taskCounters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10
  }
});

export default Header;
