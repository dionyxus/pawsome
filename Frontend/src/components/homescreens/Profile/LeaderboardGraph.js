import React, { useState } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = {
  thisWeek: [
    { name: 'John', rank: 1 },
    { name: 'Emily', rank: 2 },
    { name: 'David', rank: 3 },
    { name: 'Sophia', rank: 9 },
  ],
  thisMonth: [
    { name: 'John', rank: 1 },
    { name: 'Emily', rank: 2 },
    { name: 'David', rank: 3 },
    { name: 'Sophia', rank: 9 },
  ],
};

const colors = {
  rank: '#575396',
};

const RankComponent = () => {
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
          <YAxis domain={[10, 0]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="rank" fill={colors.rank} />
        </BarChart>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Leaderboard Position</Text>
      
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}></Text>
        <Picker
          selectedValue={selectedInterval}
          style={styles.dropdown}
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
  titleContainer: {
    marginBottom: 16,
    flexDirection: 'row',
    gap: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
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
  chartContainer: {
    flex: 1,
    width: 'auto',
  },
});

export default RankComponent;
