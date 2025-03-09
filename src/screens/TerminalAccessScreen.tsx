import React from 'react';
import { View, StyleSheet } from 'react-native';
import TerminalAccess from '../components/TerminalAccess';

const TerminalAccessScreen = () => {
    return (
        <View style={styles.container}>
            <TerminalAccess />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 20,
    },
});

export default TerminalAccessScreen;