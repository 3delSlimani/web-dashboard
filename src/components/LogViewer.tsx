import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchLogs } from '../utils/api';

const LogViewer = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadLogs = async () => {
            try {
                const fetchedLogs = await fetchLogs();
                setLogs(fetchedLogs);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadLogs();
    }, []);

    const renderLogItem = ({ item }) => (
        <View style={styles.logItem}>
            <Text style={styles.logText}>{item.message}</Text>
            <Text style={styles.logTimestamp}>{item.timestamp}</Text>
        </View>
    );

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text style={styles.errorText}>Error: {error}</Text>;
    }

    return (
        <FlatList
            data={logs}
            renderItem={renderLogItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.logList}
        />
    );
};

const styles = StyleSheet.create({
    logList: {
        padding: 16,
    },
    logItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    logText: {
        fontSize: 16,
    },
    logTimestamp: {
        fontSize: 12,
        color: '#888',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default LogViewer;