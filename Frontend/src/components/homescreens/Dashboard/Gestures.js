import React, { useState } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
// import {Picker} from '@react-native-picker/picker';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = {
  thisWeek: [
    { name: 'Mon', gestures: 240 },
    { name: 'Tue', gestures: 360 },
    { name: 'Wed', gestures: 180 },
    { name: 'Thu', gestures: 420 },
    { name: 'Fri', gestures: 370 },
    { name: 'Sat', gestures: 360 },
    { name: 'Sun', gestures: 280 },
  ],
  thisMonth: [
    { name: '1', gestures: 200 },
    { name: '2', gestures: 300 },
    { name: '3', gestures: 150 },
    { name: '4', gestures: 400 },
    { name: '5', gestures: 250 },
    { name: '6', gestures: 350 },
    { name: '7', gestures: 450 },
    { name: '8', gestures: 100 },
    { name: '9', gestures: 350 },
    { name: '10', gestures: 250 },
    { name: '11', gestures: 400 },
    { name: '12', gestures: 300 },
    { name: '13', gestures: 150 },
    { name: '14', gestures: 250 },
    { name: '15', gestures: 200 },
    { name: '16', gestures: 350 },
    { name: '17', gestures: 450 },
    { name: '18', gestures: 150 },
    { name: '19', gestures: 250 },
    { name: '20', gestures: 350 },
    { name: '21', gestures: 400 },
    { name: '22', gestures: 300 },
    { name: '23', gestures: 150 },
    { name: '24', gestures: 200 },
    { name: '25', gestures: 250 },
    { name: '26', gestures: 350 },
    { name: '27', gestures: 100 },
    { name: '28', gestures: 150 },
    { name: '29', gestures: 250 },
    { name: '30', gestures: 300 },
    { name: '31', gestures: 200 },
  ],
};

const colors = {
  gestures: '#006699',
};

const GesturesComponent = () => {
  const [selectedInterval, setSelectedInterval] = useState('thisWeek');

  const handleIntervalChange = (value) => {
    setSelectedInterval(value);
  };

  const renderBars = () => {
    const selectedData = data[selectedInterval];

    return (
        <View style={styles.chartContainer}>
      <BarChart width={350} height={300} data={selectedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 500]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="gestures" fill={colors.gestures} />
      </BarChart>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestures Performed</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
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

export default GesturesComponent;
