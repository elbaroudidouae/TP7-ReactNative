import { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function LoginScreen() {
    const [name, setName] = useState("");
    const { login } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Connexion</Text>

            <TextInput
                style={styles.input}
                placeholder="Votre nom"
                value={name}
                onChangeText={setName}
            />

            <TouchableOpacity style={styles.buttonContainer} onPress={() => login(name)}>
                <Text style={styles.buttonText}>Se connecter</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 24,
        backgroundColor: '#F5F7FA',
    },
    title: {
        fontSize: 32,
        marginBottom: 40,
        textAlign: "center",
        fontWeight: '800',
        color: '#333'
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: "#E1E1E1",
        marginBottom: 20,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 12,
        fontSize: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
    },
    buttonContainer: {
        backgroundColor: '#4A90E2',
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 10,
        elevation: 4,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
});
