import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
// import ItemsEarnedComponent from './ItemsEarned'
// import GesturesComponent from './Gestures'
import ExercisesCompletedComponent from './Activity';
// import ExercisesCompletedComponent1 from './Activity1'
import { useNavigation } from '@react-navigation/native';
import LineChartComponent from './sample';

const Dashboard = () => {
  const navigation = useNavigation();
  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={styles.profileIcon} onPress={navigateToProfile}>
        <Text>Profile Icon</Text>
      </TouchableOpacity>

      
     
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});

// <GesturesComponent />
