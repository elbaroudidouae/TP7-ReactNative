import { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../store/todosSlice";
import AppBar from "../components/AppBar";

export default function TodoListScreen({ navigation }) {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        // Initial data simulation - check to avoid duplicates if re-mounting
        if (todos.length === 0) {
            dispatch(addTodo({ id: 1, title: "Faire les courses" }));
            dispatch(addTodo({ id: 2, title: "Sortir le chien" }));
            dispatch(addTodo({ id: 3, title: "Coder une app RN" }));
        }
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: '#F5F7FA' }}>
            <AppBar title="Mes tâches" />
            <View style={{ flex: 1, padding: 20 }}>
                <FlatList
                    data={todos}
                    keyExtractor={(i) => i.id.toString()}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'white',
                                padding: 20,
                                marginBottom: 12,
                                borderRadius: 12,
                                flexDirection: 'row',
                                alignItems: 'center',
                                // Shadow
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.05,
                                shadowRadius: 3.84,
                                elevation: 3,
                            }}
                            onPress={() =>
                                navigation.navigate("Détails", item)
                            }
                        >
                            <View style={{
                                height: 12,
                                width: 12,
                                borderRadius: 6,
                                backgroundColor: '#4A90E2',
                                marginRight: 15
                            }} />
                            <Text style={{ fontSize: 18, color: '#333', fontWeight: '500' }}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
}
