import React, { Component } from 'react'
import {
    View,
    Alert,
    StyleSheet,
    Text,
    TextInput
} from 'react-native';
import {Button} from 'react-native-elements'

export default class GasolinaOuAlcool extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textInputValueAlcool: '',
            textInputValueGasolina: ''
        }
    }

    calculaMelhor = () => {        
        const alerta = parseFloat(this.state.textInputValueGasolina)*0.7>parseFloat(this.state.textInputValueAlcool)?"Álcool":"Gasolina"
        // Alert.alert("É melhor comprar um carro elétrico")
        Alert.alert("É melhor abastecer com "+alerta)
    }
    render() {
        return (
            <View>
                <Text>Gasolina</Text>
                <TextInput onChangeText={textInputValueGasolina=>this.setState({textInputValueGasolina})} placeholder="Valor da Gasolina" keyboardType='numeric' style={styles.textInput}></TextInput>
                <Text>Alcool</Text>
                <TextInput onChangeText={textInputValueAlcool => this.setState({textInputValueAlcool})} placeholder="Valor do Alcool" keyboardType='numeric' style={styles.textInput}></TextInput>
                <Button title="Qual melhor?" onPress={this.calculaMelhor}>
                </Button>
                <Text></Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#a9a9a9'
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    }
})

