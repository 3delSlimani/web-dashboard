import React from 'react';
import { View, StyleSheet } from 'react-native';
import ServiceControl from '../components/ServiceControl';

const ServiceControlScreen = () => {
    return (
        <View style={styles.container}>
            <ServiceControl />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5F5', // Light background for Apple aesthetic
    },
});

export default ServiceControlScreen;