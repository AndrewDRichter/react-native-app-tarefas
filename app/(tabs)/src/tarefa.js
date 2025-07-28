
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

export default function Tarefa({ data, deleteHandler }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={deleteHandler}
            >
                <FontAwesome name="trash" size={20} color={'#22272e'} />
            </TouchableOpacity>
            <Text>{data.item}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(196, 196, 196, 0.2)',
        marginTop: 12,
        padding: 12,
        borderRadius: 4,
        flexDirection: 'row',
        gap: 10,
    },
})