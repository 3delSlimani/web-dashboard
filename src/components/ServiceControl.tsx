import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { startService, stopService, restartService } from '../utils/api';

const ServiceControl = () => {
    const handleStart = async () => {
        await startService();
        // Handle success or error
    };

    const handleStop = async () => {
        await stopService();
        // Handle success or error
    };

    const handleRestart = async () => {
        await restartService();
        // Handle success or error
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Service Control</Text>
            <View style={styles.buttonContainer}>
                <Button title="Start Service" onPress={handleStart} />
                <Button title="Stop Service" onPress={handleStop} />
                <Button title="Restart Service" onPress={handleRestart} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
});

export default ServiceControl;