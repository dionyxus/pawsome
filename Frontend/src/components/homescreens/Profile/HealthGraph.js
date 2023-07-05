import React, { useState } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = {
    thisWeek: [
      { name: 'Mon',health: 240 },
      { name: 'Tue',health: 360 },
      { name: 'Wed', health: 180 },
      { name: 'Thu', health: 420 },
      { name: 'Fri', health: 370 },
      { name: 'Sat', health: 360 },
      { name: 'Sun', health: 280 },
    ],
    thisMonth: [
      { name: '1', health: 200 },
      { name: '2', health: 300 },
      { name: '3', health: 150 },
      { name: '4', health: 400 },
      { name: '5', health: 250 },
      { name: '6', health: 350 },
      { name: '7', health: 450 },
      { name: '8', health: 100 },
      { name: '9', health: 350 },
      { name: '10', health: 250 },
      { name: '11', health: 400 },
      { name: '12', health: 300 },
      { name: '13', health: 150 },
      { name: '14', health: 250 },
      { name: '15', health: 200 },
      { name: '16', health: 350 },
      { name: '17', health: 450 },
      { name: '18', health: 150 },
      { name: '19', health: 250 },
      { name: '20', health: 350 },
      { name: '21', health: 400 },
      { name: '22', health: 300 },
      { name: '23', health: 150 },
      { name: '24', health: 200 },
      { name: '25', health: 250 },
      { name: '26', health: 350 },
      { name: '27', health: 100 },
      { name: '28', health: 150 },
      { name: '29', health: 250 },
      { name: '30', health: 300 },
      { name: '31', health: 200 },
    ],
  };

const colors = {
  health: '#575396',
};

const HealthComponent = () => {
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
        <Bar dataKey="health" fill={colors.health} />
      </BarChart>
      </View>
    );
  };

  return (
    <View style={styles.container}>
    <View style={styles.mood}>
      <Text style={styles.title}>Diplo's Health</Text>
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

export default HealthComponent;
