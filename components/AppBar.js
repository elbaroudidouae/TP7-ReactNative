import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function AppBar({ title }) {
    const { logout } = useContext(AuthContext);

    return (
        <View style={styles.appBar}>
            <Text style={styles.title}>{title || "Mon Application"}</Text>
            <Button title="Logout" onPress={logout} color="#fff" />
        </View>
    );
}

const styles = StyleSheet.create({
    appBar: {
        height: 80, // Taller header
        paddingTop: 30, // For status bar area
        flexDirection: 'row',
        backgroundColor: '#4A90E2', // A nicer blue
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        // Elevation for Android
        elevation: 6,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '700', // Bold/Bold
        letterSpacing: 0.5,
    },
});
