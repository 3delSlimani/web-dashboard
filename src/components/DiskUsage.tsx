import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchDiskUsage } from '../utils/api';

const DiskUsage = () => {
    const [diskUsage, setDiskUsage] = useState({ used: 0, total: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getDiskUsage = async () => {
            try {
                const data = await fetchDiskUsage();
                setDiskUsage(data);
            } catch (error) {
                console.error('Error fetching disk usage:', error);
            } finally {
                setLoading(false);
            }
        };

        getDiskUsage();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Disk Usage</Text>
            <Text style={styles.usageText}>
                Used: {diskUsage.used} GB / Total: {diskUsage.total} GB
            </Text>
            <Text style={styles.percentageText}>
                Usage: {((diskUsage.used / diskUsage.total) * 100).toFixed(2)}%
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#f9f9f9',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    usageText: {
        fontSize: 18,
        marginBottom: 5,
    },
    percentageText: {
        fontSize: 16,
        color: '#007aff',
    },
    loadingText: {
        fontSize: 18,
        color: '#888',
    },
});

export default DiskUsage;