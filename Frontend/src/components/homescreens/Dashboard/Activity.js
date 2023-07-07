import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const data = {
  weekly: [
    { name: 'Sun', armCrossover: 40, punchingAir: 70, shoulderExtension: 10 },
    { name: 'Mon', armCrossover: 60, punchingAir: 30, shoulderExtension: 30 },
    { name: 'Tue', armCrossover: 80, punchingAir: 50, shoulderExtension: 50 },
    { name: 'Wed', armCrossover: 20, punchingAir: 90, shoulderExtension: 70 },
    { name: 'Thu', armCrossover: 70, punchingAir: 40, shoulderExtension: 90 },
    { name: 'Fri', armCrossover: 20, punchingAir: 40, shoulderExtension: 30 },
    { name: 'Sat', armCrossover: 20, punchingAir: 50, shoulderExtension: 50 },
  ],
  monthly: [
    { name: '1', armCrossover: 60, punchingAir: 30, shoulderExtension: 50 },
    { name: '2', armCrossover: 80, punchingAir: 50, shoulderExtension: 70 },
    { name: '3', armCrossover: 40, punchingAir: 70, shoulderExtension: 90 },
    { name: '4', armCrossover: 90, punchingAir: 40, shoulderExtension: 100 },
    { name: '5', armCrossover: 50, punchingAir: 20, shoulderExtension: 30 },
    { name: '6', armCrossover: 70, punchingAir: 60, shoulderExtension: 80 },
    { name: '7', armCrossover: 30, punchingAir: 50, shoulderExtension: 40 },
    { name: '8', armCrossover: 60, punchingAir: 80, shoulderExtension: 70 },
    { name: '9', armCrossover: 80, punchingAir: 40, shoulderExtension: 60 },
    { name: '10', armCrossover: 50, punchingAir: 30, shoulderExtension: 50 },
    { name: '11', armCrossover: 70, punchingAir: 60, shoulderExtension: 80 },
    { name: '12', armCrossover: 90, punchingAir: 50, shoulderExtension: 70 },
    { name: '13', armCrossover: 60, punchingAir: 30, shoulderExtension: 50 },
    { name: '14', armCrossover: 80, punchingAir: 50, shoulderExtension: 70 },
    { name: '15', armCrossover: 40, punchingAir: 70, shoulderExtension: 90 },
  ],
};

const colors = {
  armCrossover: '#FF0000',
  punchingAir: '#C70039',
  shoulderExtension: '#006699',
};

const Dropdown = ({ label, value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

 const handleClose = () => {
    setIsOpen(false);
  };

  const handleOptionSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <View style={styles.dropdownContainer}>
      <Text style={styles.dropdownLabel}>{label}</Text>
      <TouchableOpacity style={styles.dropdown} onPress={handleOpen}>
        <Text>{value}</Text>
      </TouchableOpacity>
      <Modal visible={isOpen} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {options.map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.option}
                onPress={() => handleOptionSelect(option)}
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const ExercisesCompletedComponent = () => {
  const [xAxis, setXAxis] = useState('weekly');
  const [selectedArea, setSelectedArea] = useState('all');

  const handleXAxisChange = (value) => {
    setXAxis(value);
  };

  const handleAreaChange = (value) => {
    setSelectedArea(value);
  };

  const renderAreas = () => {
    const selectedData = data[xAxis];

    let areasToShow = [];
    if (selectedArea === 'all') {
      areasToShow = ['armCrossover', 'punchingAir', 'shoulderExtension'];
    } else {
      areasToShow.push(selectedArea);
    }

    return areasToShow.map((area) => (
      <Area key={area} type="monotone" dataKey={area} fill={colors[area]} stroke={colors[area]} />
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Activity</Text>
      <View style={styles.options}>
        <Dropdown
          label="Area"
          value={selectedArea}
          options={['all', 'armCrossover', 'punchingAir', 'shoulderExtension']}
          onChange={handleAreaChange}
        />
        <Dropdown
          label="Time Range"
          value={xAxis === 'weekly' ? 'This Week' : 'This Month'}
          options={['weekly', 'monthly']}
          onChange={handleXAxisChange}
        />
      </View>
      <View style={styles.chartContainer}>
        <AreaChart
          width={350}
          height={300}
          data={data[xAxis]}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          {renderAreas()}
        </AreaChart>
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
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    width: 150,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#00000080',
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: 16,
      borderRadius: 8,
      width: 150,
    },
    option: {
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    chartContainer: {
      flex: 1,
      width: 'auto',
      justifyContent: 'center',
    },
    options: {
      flexDirection: 'row',
    },
  });

export default ExercisesCompletedComponent;
