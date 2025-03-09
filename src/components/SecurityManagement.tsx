import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { fetchFirewallSettings, updateFirewallSettings, fetchSSHSettings, updateSSHSettings } from '../utils/api';

const SecurityManagement = () => {
    const [firewallEnabled, setFirewallEnabled] = useState(false);
    const [sshEnabled, setSshEnabled] = useState(false);

    useEffect(() => {
        const loadSettings = async () => {
            const firewallSettings = await fetchFirewallSettings();
            const sshSettings = await fetchSSHSettings();
            setFirewallEnabled(firewallSettings.enabled);
            setSshEnabled(sshSettings.enabled);
        };
        loadSettings();
    }, []);

    const toggleFirewall = async () => {
        const newStatus = !firewallEnabled;
        setFirewallEnabled(newStatus);
        await updateFirewallSettings({ enabled: newStatus });
    };

    const toggleSSH = async () => {
        const newStatus = !sshEnabled;
        setSshEnabled(newStatus);
        await updateSSHSettings({ enabled: newStatus });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Security Management</Text>
            <View style={styles.setting}>
                <Text>Firewall</Text>
                <Switch
                    value={firewallEnabled}
                    onValueChange={toggleFirewall}
                />
            </View>
            <View style={styles.setting}>
                <Text>SSH Access</Text>
                <Switch
                    value={sshEnabled}
                    onValueChange={toggleSSH}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    setting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
});

export default SecurityManagement;