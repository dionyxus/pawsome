import React, { useState } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const data = {
  weekly: [
    { name: 'Week 1', food: 40, treat: 70, water: 10 },
    { name: 'Week 2', food: 60, treat: 30, water: 30 },
    { name: 'Week 3', food: 80, treat: 50, water: 50 },
    { name: 'Week 4', food: 20, treat: 90, water: 70 },
    { name: 'Week 5', food: 70, treat: 40, water: 90 },
  ],
  monthly: [
    { name: 'Jan', food: 60, treat: 30, water: 50 },
    { name: 'Feb', food: 80, treat: 50, water: 70 },
    { name: 'Mar', food: 40, treat: 70, water: 90 },
    { name: 'Apr', food: 90, treat: 40, water: 100 },
    { name: 'May', food: 50, treat: 20, water: 30 },
  ],
};

const colors = {
  food: '#FF0000',
  treat: '#C70039',
  water: '#006699',
};

const ItemsEarnedComponent = () => {
  const [xAxis, setXAxis] = useState('weekly');
  const [selectedBar, setSelectedBar] = useState('all');

  const handleXAxisChange = (value) => {
    setXAxis(value);
  };

  const handleBarChange = (value) => {
    setSelectedBar(value);
  };

  const renderBars = () => {
    const selectedData = data[xAxis];

    let barsToShow = [];
    if (selectedBar === 'all') {
      barsToShow = ['food', 'treat', 'water'];
    } else {
      barsToShow.push(selectedBar);
    }

    return barsToShow.map((bar) => (
      <Bar key={bar} dataKey={bar} fill={colors[bar]} />
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Items Earned</Text>
      <View style={styles.options}>
      
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}></Text>
        <Picker
          selectedValue={selectedBar}
          style={styles.dropdown}
          onValueChange={handleBarChange}
        >
          <Picker.Item label="All" value="all" />
          <Picker.Item label="Food" value="food" />
          <Picker.Item label="Treat" value="treat" />
          <Picker.Item label="Water" value="water" />
        </Picker>
      </View>
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}></Text>
        <Picker
          selectedValue={xAxis}
          style={styles.dropdown}
          onValueChange={handleXAxisChange}
        >
          <Picker.Item label="This Week" value="weekly" />
          <Picker.Item label="This Month" value="monthly" />
        </Picker>
      </View>
      </View>
      <View style={styles.chartContainer}>
        <BarChart
          width={350}
          height={300}
          data={data[xAxis]}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          {renderBars()}
        </BarChart>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
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
    width: 150,
  },
  chartContainer: {
    flex: 1,
    width: 'auto',
    justifyContent: 'center',
  },
  options: {
    flexDirection: 'row',
  }
});

export default ItemsEarnedComponent;
