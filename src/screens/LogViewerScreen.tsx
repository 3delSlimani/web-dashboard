import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LogViewer from '../components/LogViewer';

const LogViewerScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log Viewer</Text>
            <LogViewer />
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

export default LogViewerScreen;