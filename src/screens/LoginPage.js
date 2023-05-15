import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from "react";
import { Button, Link, TextField } from "@mui/material";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to RSRV</Text>
            <View style={styles.loginForm}>
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    plaveholder="superhero@gmail.com"
                    onChangeText={(email) => setEmail(email)}
                />
                <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    onChangeText={(password) => setPassword(password)}
                />
                <Button variant="contained" >
                    Login
                </Button>
            </View>
            <View style={styles.alignLeft}>
                <Link style={styles.link}>
                    <Text style={styles.linkText}>Forgot password ?</Text>
                </Link>
                <Link style={styles.link}>
                    <Text style={styles.linkText}>Privacy</Text>
                </Link>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: '30px',
        fontWeigh: 'bold',
        margin: '20px'
    },
    alignLeft: {
        width: '245px',
        alignItems: "flex-start",
        marginTop: '20px',
        gap: '10px'
    },
    link: {
        fontSize: '15px',
        fontWeigh: 'bold',
    },
    linkText: {
        textDecoration: 'none'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginForm: {
        gap: '10px'
    }
});