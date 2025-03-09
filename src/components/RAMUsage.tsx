import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchRAMUsage } from '../utils/api'; // Assuming this function is defined in api.ts

const RAMUsage = () => {
    const [ramUsage, setRamUsage] = useState(0);
    const [totalRAM, setTotalRAM] = useState(0);

    useEffect(() => {
        const getRAMUsage = async () => {
            const data = await fetchRAMUsage();
            setRamUsage(data.used);
            setTotalRAM(data.total);
        };

        getRAMUsage();
        const interval = setInterval(getRAMUsage, 5000); // Refresh every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const ramPercentage = ((ramUsage / totalRAM) * 100).toFixed(2);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>RAM Usage</Text>
            <Text style={styles.usage}>{ramUsage} MB / {totalRAM} MB</Text>
            <Text style={styles.percentage}>{ramPercentage}% used</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#f0f0f5',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    usage: {
        fontSize: 18,
        marginBottom: 5,
    },
    percentage: {
        fontSize: 16,
        color: '#888',
    },
});

export default RAMUsage;