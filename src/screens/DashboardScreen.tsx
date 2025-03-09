import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import CPUUsage from '../components/CPUUsage';
import RAMUsage from '../components/RAMUsage';
import DiskUsage from '../components/DiskUsage';
import ServiceControl from '../components/ServiceControl';
import LogViewer from '../components/LogViewer';
import SecurityManagement from '../components/SecurityManagement';
import TerminalAccess from '../components/TerminalAccess';
import Notifications from '../components/Notifications';
import BackupManagement from '../components/BackupManagement';

const DashboardScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <CPUUsage />
                <RAMUsage />
                <DiskUsage />
                <ServiceControl />
                <LogViewer />
                <SecurityManagement />
                <TerminalAccess />
                <Notifications />
                <BackupManagement />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 16,
    },
});

export default DashboardScreen;