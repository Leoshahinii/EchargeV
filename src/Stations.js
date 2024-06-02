import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions, TextInput, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

export default function Stations() {
  const [showMap, setShowMap] = useState(true);
  const [selectedStation, setSelectedStation] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStations, setFilteredStations] = useState(stations);

  const handleStationPress = (station) => {
    setSelectedStation(station);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredStations(stations);
    } else {
      const filtered = stations.filter((station) =>
        station.name.toLowerCase().includes(query.toLowerCase()) ||
        station.address.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredStations(filtered);
    }
  };

  const handleGoPress = (station) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${station.latitude},${station.longitude}`;
    Linking.openURL(url);
  };

  const renderStation = ({ item }) => (
    <View style={styles.stationItem}>
      <Ionicons name="ios-car" size={24} color="#0f0" />
      <View style={styles.stationInfoContainer}>
        <Text style={styles.stationName}>{item.name}</Text>
        <Text style={styles.stationAddress}>{item.address}</Text>
        <Text style={styles.stationDetails}>3.0 mi · 3 Min away · CCS / NACS Adapter</Text>
        <Text style={styles.stationChargers}>{item.chargers}</Text>
      </View>
      <TouchableOpacity style={styles.goButton} onPress={() => handleGoPress(item)}>
        <Text style={styles.goButtonText}>GO</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for stations..."
        placeholderTextColor="#aaa"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {showMap && (
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 40.7128,
              longitude: -74.006,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {filteredStations.map((station) => (
              <Marker
                key={station.id}
                coordinate={{ latitude: station.latitude, longitude: station.longitude }}
                title={station.name}
                onPress={() => handleStationPress(station)}
              />
            ))}
          </MapView>
          {selectedStation && (
            <View style={styles.stationInfo}>
              <Text style={styles.stationName}>{selectedStation.name}</Text>
              <Text>{selectedStation.address}</Text>
              <Text>Numri i karikuesve: {selectedStation.chargers}</Text>
            </View>
          )}
        </View>
      )}
      <View style={styles.stationListContainer}>
        <Text style={styles.stationListHeader}>Nearby Stations: {filteredStations.length} stations</Text>
        <FlatList
          data={filteredStations}
          renderItem={renderStation}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  stationInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#121212',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  stationName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  searchInput: {
    height: 40,
    backgroundColor: '#333',
    borderRadius: 10,
    paddingHorizontal: 10,
    color: '#fff',
    position: 'absolute',
    top: 70,
    left: '10%',
    right: '10%',
    zIndex: 1,
  },
  stationListContainer: {
    backgroundColor: '#121212',
    padding: 10,
  },
  stationListHeader: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  stationInfoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  stationAddress: {
    color: '#aaa',
  },
  stationDetails: {
    color: '#777',
  },
  stationChargers: {
    color: '#0f0',
  },
  goButton: {
    backgroundColor: '#0f0',
    padding: 10,
    borderRadius: 5,
  },
  goButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

// Për shembull, stacionet e karikimit të makinerive elektrike
const stations = [
  { id: 1, name: 'Station 1', address: '234 Main Street', latitude: 40.7128, longitude: -74.006, chargers: '7/12 Plugs Available' },
  { id: 2, name: 'Station 2', address: 'Union', latitude: 40.7138, longitude: -74.005, chargers: '3/10 Plugs Available' },
  { id: 3, name: 'Station 3', address: 'Street', latitude: 40.7148, longitude: -74.004, chargers: '6/12 Plugs Available' },
];
