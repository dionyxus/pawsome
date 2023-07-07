import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import MoodComponent from './MoodGraph';
import HealthComponent from './HealthGraph';
import PointsComponent from './PointsGraph';
import RankComponent from './LeaderboardGraph';

const Profile = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabPress = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 1 && styles.activeTab]}
          onPress={() => handleTabPress(1)}
        >
          <Text
            style={[styles.tabText, activeTab === 1 && styles.activeTabText]}
          >
            My Pet
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 2 && styles.activeTab]}
          onPress={() => handleTabPress(2)}
        >
          <Text
            style={[styles.tabText, activeTab === 2 && styles.activeTabText]}
          >
            My Profile
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {activeTab === 1 && (
          <View>
            <View style={styles.profileCard}>
              <View style={styles.profileImage}>
                <Image
                  source={{ uri: 'https://picsum.photos/536/354' }}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.profileDetails}>
                <Text style={styles.profileName}>John Doe</Text>
                <View style={styles.profileValues}>
                  <View style={styles.profileValue}>
                    <Text style={styles.valueLabel}>Last Feed</Text>
                    <Text style={styles.value}>2 hours ago</Text>
                  </View>
                  <View style={styles.profileValue}>
                    <Text style={styles.valueLabel}>Current Feeling</Text>
                    <Text style={styles.value}>Thirsty</Text>
                  </View>
                  <View style={styles.profileValue}>
                    <Text style={styles.valueLabel}>Mood</Text>
                    <Text style={styles.value}>Neutral</Text>
                  </View>
                </View>
              </View>
             {/* <MoodComponent />
              <Text>----------------------------</Text>
              <HealthComponent /> */}
            </View>
          </View>
        )}
        {activeTab === 2 && (
          <View>
            
            <View style={styles.profileCard}>
            <View style={styles.profileImage}>
              <Image
                source={{ uri: 'https://picsum.photos/536/354' }}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.profileDetails}>
              <Text style={styles.profileName}>Ruby Rose</Text>
              <View style={styles.profileValues}>
                <View style={styles.profileValue}>
                  <Text style={styles.valueLabel}>Friends</Text>
                  <Text style={styles.value}>35</Text>
                </View>
                <View style={styles.profileValue}>
                  <Text style={styles.valueLabel}>Ranking</Text>
                  <Text style={styles.value}>9</Text>
                </View>
             
              </View>
            </View>
         {/*  <PointsComponent />
            <Text>----------------------------</Text>
        <RankComponent /> */}
          </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F2',
    marginBottom: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  activeTabText: {
    color: '#000000',
  },
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  profileCard: {
    alignItems: 'center',
    width: 200,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  profileDetails: {
    alignItems: 'center',
  },
  profileName: {
    marginBottom: 20,
  },
  profileValues: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 50,
  },
  profileValue: {
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueLabel: {
    fontWeight: 'bold',
  },
  value: {
    color: 'gray',
  },
});

export default Profile;
