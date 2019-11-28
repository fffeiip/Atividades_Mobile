import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'


export default class Menu extends Component {
    static navigationOptions ={
        title: "Atividades Mobile"
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={{
                        ...styles.button,
                        backgroundColor: "#ffbb00",
                    }}
                    onPress={() => navigate("Internacionalizacao")}>
                    <Text style={styles.texto}>Internacionalização e Eventos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    ...styles.button,
                    backgroundColor: "#1fbbbb",
                }}
                    onPress={() => navigate("Instagram")}>
                    <Text style={styles.texto}>Layout de Telas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    ...styles.button,
                    backgroundColor: "#1fab0b",
                }}
                // onPress={()=> navigate("Api")}
                >
                    <Text style={styles.texto}>Consumo de API</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    ...styles.button,
                    backgroundColor: "#1f000b"
                }}
                onPress={ () => navigate("InteracaoActivities")}>
                    <Text style={styles.texto}>Interação Activities</Text>
                </TouchableOpacity>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    texto: {

        fontSize: 20,
        alignSelf: "center",
        color: '#ffffff'
    },
    button: {
        borderRadius: 20,
        margin: '2%',
        padding: 30
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    }
})
