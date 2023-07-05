import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemsEarnedComponent from './ItemsEarned'
import GesturesComponent from './Gestures'
import ExercisesCompletedComponent from './Activity'

const Dashboard = () => {
  return (
    <View style={{ flex: 1 }}>
   
      <ExercisesCompletedComponent />
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})


// <GesturesComponent />