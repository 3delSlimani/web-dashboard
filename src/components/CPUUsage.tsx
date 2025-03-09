import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchCPUUsage } from '../utils/api';

const CPUUsage = () => {
    const [cpuUsage, setCpuUsage] = useState(0);

    useEffect(() => {
        const getCPUUsage = async () => {
            try {
                const data = await fetchCPUUsage();
                setCpuUsage(data.usage);
            } catch (error) {
                console.error('Error fetching CPU usage:', error);
            }
        };

        getCPUUsage();
        const interval = setInterval(getCPUUsage, 5000); // Update every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CPU Usage</Text>
            <Text style={styles.usage}>{cpuUsage}%</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
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
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    usage: {
        fontSize: 24,
        color: '#333',
    },
});

export default CPUUsage;