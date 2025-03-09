import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { fetchBackups, createBackup, restoreBackup } from '../utils/api';

const BackupManagement = () => {
    const [backups, setBackups] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadBackups = async () => {
            const data = await fetchBackups();
            setBackups(data);
            setLoading(false);
        };
        loadBackups();
    }, []);

    const handleCreateBackup = async () => {
        await createBackup();
        const data = await fetchBackups();
        setBackups(data);
    };

    const handleRestoreBackup = async (backupId) => {
        await restoreBackup(backupId);
        const data = await fetchBackups();
        setBackups(data);
    };

    if (loading) {
        return <Text>Loading backups...</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Backup Management</Text>
            <Button title="Create Backup" onPress={handleCreateBackup} />
            {backups.length > 0 ? (
                backups.map((backup) => (
                    <View key={backup.id} style={styles.backupItem}>
                        <Text>{backup.name}</Text>
                        <Button title="Restore" onPress={() => handleRestoreBackup(backup.id)} />
                    </View>
                ))
            ) : (
                <Text>No backups available.</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    backupItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
});

export default BackupManagement;