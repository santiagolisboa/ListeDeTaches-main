import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';

const plusIcon = require('../assets/add.png');
const closeIcon = require('../assets/hide.png');

interface FloatingActionButtonProps {
  isFormVisible: boolean;
  onPress: () => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ isFormVisible, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image source={isFormVisible ? closeIcon : plusIcon} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  icon: {
    width: 24, // Taille de l'icône, peut être ajustée selon la taille de vos images
    height: 24, // Taille de l'icône, peut être ajustée selon la taille de vos images
  },
});

export default FloatingActionButton;
