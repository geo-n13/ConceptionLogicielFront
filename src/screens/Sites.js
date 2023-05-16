import {StyleSheet, Text, View} from "react-native";
import TitlebarImageList from "../components/TitlebarBelowImageList";

export default function Sites() {
    return (
        <View>
            <Text style={styles.title}>Sites</Text>
            <TitlebarImageList></TitlebarImageList>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        width: "auto",
        textAlign: "left",
        fontSize: '36px',
        fontWeight: 500,
    },
});
