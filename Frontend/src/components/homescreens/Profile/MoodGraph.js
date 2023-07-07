import React, { useState } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
// import {Picker} from '@react-native-picker/picker';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = {
    thisWeek: [
      { name: 'Mon', mood: 240 },
      { name: 'Tue', mood: 360 },
      { name: 'Wed',mood: 180 },
      { name: 'Thu',mood: 420 },
      { name: 'Fri',mood: 370 },
      { name: 'Sat',mood: 360 },
      { name: 'Sun',mood: 280 },
    ],
    thisMonth: [
      { name: '1',mood: 200 },
      { name: '2',mood: 300 },
      { name: '3',mood: 150 },
      { name: '4',mood: 400 },
      { name: '5',mood: 250 },
      { name: '6',mood: 350 },
      { name: '7',mood: 450 },
      { name: '8',mood: 100 },
      { name: '9',mood: 350 },
      { name: '10',mood: 250 },
      { name: '11',mood: 400 },
      { name: '12',mood: 300 },
      { name: '13',mood: 150 },
      { name: '14',mood: 250 },
      { name: '15',mood: 200 },
      { name: '16',mood: 350 },
      { name: '17',mood: 450 },
      { name: '18',mood: 150 },
      { name: '19',mood: 250 },
      { name: '20',mood: 350 },
      { name: '21',mood: 400 },
      { name: '22',mood: 300 },
      { name: '23',mood: 150 },
      { name: '24',mood: 200 },
      { name: '25',mood: 250 },
      { name: '26',mood: 350 },
      { name: '27',mood: 100 },
      { name: '28',mood: 150 },
      { name: '29',mood: 250 },
      { name: '30',mood: 300 },
      { name: '31',mood: 200 },
    ],
  };

const colors = {
  mood: '#575396',
};

const MoodComponent = () => {
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
        <Bar dataKey="mood" fill={colors.mood} />
      </BarChart>
      </View>
    );
  };

  return (
    <View style={styles.container}>
    <View style={styles.mood}>
      <Text style={styles.title}>Diplo's Mood</Text>
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

export default MoodComponent;
