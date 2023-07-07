import React, { useState } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
// import {Picker} from '@react-native-picker/picker';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = {
    thisWeek: [
      { name: 'Mon', points: 240 },
      { name: 'Tue', points: 660 },
      { name: 'Wed', points: 180 },
      { name: 'Thu', points: 420 },
      { name: 'Fri', points: 770 },
      { name: 'Sat', points: 560 },
      { name: 'Sun', points: 480 },
    ],
    thisMonth: [
      { name: '1', points: 500 },
      { name: '2', points: 800 },
      { name: '3', points: 150 },
      { name: '4', points: 600 },
      { name: '5', points: 550 },
      { name: '6', points: 350 },
      { name: '7', points: 450 },
      { name: '8', points: 800 },
      { name: '9', points: 350 },
      { name: '10', points: 450 },
      { name: '11', points: 400 },
      { name: '12', points: 900 },
      { name: '13', points: 150 },
      { name: '14', points: 250 },
      { name: '15', points: 200 },
      { name: '16', points: 650 },
      { name: '17', points: 450 },
      { name: '18', points: 750 },
      { name: '19', points: 250 },
      { name: '20', points: 350 },
      { name: '21', points: 600 },
      { name: '22', points: 300 },
      { name: '23', points: 150 },
      { name: '24', points: 200 },
      { name: '25', points: 850 },
      { name: '26', points: 750 },
      { name: '27', points: 500 },
      { name: '28', points: 50 },
      { name: '29', points: 250 },
      { name: '30', points: 300 },
      { name: '31', points: 200 },
    ],
  };

const colors = {
  points: '#575396',
};

const PointsComponent = () => {
  const [selectedInterval, setSelectedInterval] = useState('thisWeek');

  const handleIntervalChange = (value) => {
    setSelectedInterval(value);
  };

  const renderBars = () => {
    const selectedData = data[selectedInterval];

    return (
        <View style={styles.chartContainer}>
      <BarChart width={300} height={125} data={selectedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 500]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="points" fill={colors.points} />
      </BarChart>
      </View>
    );
  };

  return (
    <View style={styles.container}>
    <View style={styles.mood}>
      <Text style={styles.title}>Points Table</Text>
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}></Text>
        <Picker
          selectedValue={selectedInterval}
          style={[styles.dropdown, styles.horizontalDropdown]}
          onValueChange={handleIntervalChange}
        >
          <Picker.Item label="This Week" value="thisWeek" />
          <Picker.Item label="This Month" value="thisMonth" />
        </Picker>
      </View>
      </View>
      {renderBars()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  mood: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 10,
  },
  dropdownLabel: {
    marginRight: 8,
    fontSize: 16,
  },
  dropdown: {
    width: 'auto',
  },
  horizontalDropdown: {
    flexDirection: 'row',
    flex: 1,
  },
  chartContainer: {
    flex: 1,
    width: 'auto',
  },
});

export default PointsComponent;
