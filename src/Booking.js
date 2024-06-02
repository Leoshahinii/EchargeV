import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.carContainer}>
       
        <Text style={styles.carName}>Benz EQC</Text>
        <Text style={styles.carModel}>Mercedes Benz</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Ionicons name="battery-charging" size={40} color="#0f0" />
          <Text style={styles.infoText}>Battery</Text>
          <Text style={styles.infoValue}>63%</Text>
        </View>

        <View style={styles.infoBox}>
          <Ionicons name="speedometer" size={40} color="#0f0" />
          <Text style={styles.infoText}>Remaining Distance</Text>
          <Text style={styles.infoValue}>104 km</Text>
        </View>

        <View style={styles.infoBox}>
          <Ionicons name="thermometer" size={40} color="#0f0" />
          <Text style={styles.infoText}>Climate</Text>
          <Text style={styles.infoValue}>22°C</Text>
        </View>

        <View style={styles.infoBox}>
          <Ionicons name="flash" size={40} color="#0f0" />
          <Text style={styles.infoText}>Charging Port</Text>
          <Text style={styles.infoValue}>CCS2</Text>
          <Text style={styles.infoSubValue}>Max DC rate: 100kW</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  carContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  carImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  carName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  carModel: {
    fontSize: 18,
    color: '#777',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  infoBox: {
    backgroundColor: '#121212',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#777',
    marginTop: 10,
  },
  infoValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 5,
  },
  infoSubValue: {
    fontSize: 14,
    color: '#777',
  },
});
