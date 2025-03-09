import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackupManagement from '../components/BackupManagement';

const BackupManagementScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Backup Management</Text>
            <BackupManagement />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default BackupManagementScreen;