import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const TerminalAccess = () => {
    const [url, setUrl] = useState('');

    useEffect(() => {
        // Assuming the backend provides a WebSocket or similar endpoint for terminal access
        setUrl('http://your-server-address:port/terminal'); // Replace with actual terminal access URL
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Terminal Access</Text>
            {url ? (
                <WebView
                    source={{ uri: url }}
                    style={styles.webview}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                />
            ) : (
                <Text style={styles.loading}>Loading terminal...</Text>
            )}
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
    },
    webview: {
        flex: 1,
        borderRadius: 10,
        overflow: 'hidden',
    },
    loading: {
        fontSize: 18,
        color: '#888',
    },
});

export default TerminalAccess;