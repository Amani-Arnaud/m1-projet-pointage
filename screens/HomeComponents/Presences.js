// screens/Presences.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const dummyData = [
  { id: '1', date: '2025-06-01', arrivee: '08:00', depart: '17:00' },
  { id: '2', date: '2025-06-02', arrivee: '08:15', depart: '17:10' },
  { id: '3', date: '2025-06-03', arrivee: '08:05', depart: '16:50' },
];

export default function Presences() {
  const renderItem = ({ item }) => (
    <View style={styles.presenceItem}>
      <Text style={styles.presenceDate}>{item.date}</Text>
      <Text>Arrivée: {item.arrivee}</Text>
      <Text>Départ: {item.depart}</Text>
    </View>
  );

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Mes présences</Text>
      <FlatList
        data={dummyData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#f6f9fc',
    padding: 20,
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  presenceItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    elevation: 2,
  },
  presenceDate: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
