import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { Select } from 'native-base';
import { useNavigation } from '@react-navigation/core'
import { ButtonGroup } from "react-native-elements";
//import styles from '../style';
import { Activity } from '../../data/ActivityObject';

const Separator = () => <View style={styles.separator} />;

const ActivitySelection = () => {

    const [selectedActivity, setSelectedActivity] = useState(0);
    const [itemGoal, onItemNumberChange] = useState('5');
    const [activityGoal, onActivityNumberChange] = useState('5');
    const [selectedDifficultyIndex, setSelectedDifficultyIndex] = useState(1);
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);


    const navigation = useNavigation()

    return (
        <View style={styles.container}>

            <View style={styles.activityContainer}>
                <Text>Choose Activity</Text>
                <View style={styles.activitySelectionContainer}>
                    <Select
                        selectedValue={selectedActivity}
                        onValueChange={(value) => setSelectedActivity(value)}
                    >
                        <Select.Item label="Select Activity" value="" />
                        <Select.Item label={Activity[0].type} value={0} />
                        <Select.Item label={Activity[1].type} value={1} />
                        <Select.Item label={Activity[2].type} value={2} />
                    </Select>
                </View>
            </View>

            <View style={styles.itemContainer}>
                <Text>Choose item to Earn</Text>
                <ButtonGroup
                    buttons={['Food', 'Treat', 'Water']}
                    selectedIndex={selectedItemIndex}
                    onPress={(value) => {
                        setSelectedItemIndex(value);
                    }}
                    containerStyle={{ height: 40, marginHorizontal: 0, backgroundColor: '#F5F5F5', padding: 5, marginBottom: 10, marginTop: 10, borderRadius: 5, borderWidth: 0 }}
                    selectedButtonStyle={{ backgroundColor: '#6A5ACD', borderRadius: 5 }}
                    innerBorderStyle={{ width: 0 }}
                />
            </View>

            <View style={styles.itemContainer}>
                <Text>Difficulty Level</Text>
                <ButtonGroup
                    buttons={['Easy', 'Medium', 'Hard']}
                    selectedIndex={selectedDifficultyIndex}
                    onPress={(value) => {
                        setSelectedDifficultyIndex(value);
                    }}
                    containerStyle={{ height: 40, marginHorizontal: 0, backgroundColor: '#F5F5F5', padding: 5, marginBottom: 10, marginTop: 10, borderRadius: 5, borderWidth: 0 }}
                    selectedButtonStyle={{ backgroundColor: '#6A5ACD', borderRadius: 5 }}
                    innerBorderStyle={{ width: 0 }}
                />
            </View>

            <View style={styles.goalsContainer}>
                <View>
                    <Text>Earning Goal</Text>
                    <TextInput
                        onChangeText={onItemNumberChange}
                        value={itemGoal}
                        placeholder="0"
                        keyboardType="numeric"
                    />
                </View>

                <View>
                    <Text>Activity Goal</Text>
                    <TextInput
                        onChangeText={onActivityNumberChange}
                        value={activityGoal}
                        placeholder="0"
                        keyboardType="numeric"
                    />
                </View>
            </View>

            <View style={styles.startActivityButtonContainer}>
                <TouchableOpacity style={styles.startActivityButton}
                    onPress={() => {
                        navigation.navigate("ActivityProgressScreen", {
                            activity: selectedActivity,
                            item: selectedItemIndex,
                            activityDifficulty: selectedDifficultyIndex,
                            itemGoal: parseInt(itemGoal) === 0 ? 1 : parseInt(itemGoal),
                            activityGoal: parseInt(activityGoal) === 0 ? 1 : parseInt(activityGoal)
                        })
                    }} >
                    <Text style={{ color: 'white' }}>Start</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default ActivitySelection

const styles = StyleSheet.create({
    activitySelectionContainer: {
        marginTop: 10,
        width: 250,
        borderRadius: 4,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        backgroundColor: 'white'
    },
    activityContainer: {
        marginBottom: 15,
    },
    itemContainer: {
        marginBottom: 5,
        width: 250,
    },
    startActivityButtonContainer: {
        marginTop: 30,
        width: 150,
        borderRadius: 8,
        backgroundColor: '#37298A'
    },
    startActivityButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6A5ACD',
        fontSize: 18,
        width: 150,
        border: '#9c92da 1px',
        borderRadius: 8,
        padding: 10,
        marginBottom: 4,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor: 'white'
    },
    goalsContainer: {
        flexDirection: 'row',
        gap: 70,
    }

});
