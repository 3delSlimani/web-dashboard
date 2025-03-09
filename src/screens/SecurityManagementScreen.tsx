import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SecurityManagement from '../components/SecurityManagement';

const SecurityManagementScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Security Management</Text>
            <SecurityManagement />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default SecurityManagementScreen;