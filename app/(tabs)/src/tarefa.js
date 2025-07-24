
import { Text, View } from "react-native";

export default function Tarefa({ data }) {
    return (
        <View>
            <Text>{data.key}</Text>
            <Text>{data.item}</Text>
        </View>
    )
}