import React, { Component } from 'react'
import {
    View,
    Alert,
    StyleSheet,
    Text,
    TextInput
} from 'react-native';
import { Button } from 'react-native-elements'
import { translate } from '../locales'

export default class GasolinaOuAlcool extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textInputValueAlcool: '',
            textInputValueGasolina: ''
        }
    }
    static navigationOptions ={
        title: translate('title')
    }
    calculaMelhor = () => {
        this.state.textInputValueGasolina = this.state.textInputValueGasolina.replace(',','.')
        this.state.textInputValueAlcool = this.state.textInputValueAlcool.replace(',','.')
        const alerta = parseFloat(this.state.textInputValueGasolina) * 0.7 > parseFloat(this.state.textInputValueAlcool) ? translate('etanol') : translate('gas')
        // Alert.alert("É melhor comprar um carro elétrico")
        Alert.alert(translate('msg_alert') + alerta)
    }
    render() {
        return (
            <View style={styles.viewElements}>
                <Text style={{fontSize: 40}}></Text>
                <View >
                    <Text >{translate('gas')}</Text>
                    <TextInput onChangeText={textInputValueGasolina => this.setState({ textInputValueGasolina })} placeholder={translate('value_gas')} keyboardType='numeric' style={styles.textInput}></TextInput>
                    <Text>{translate('etanol')}</Text>
                    <TextInput onChangeText={textInputValueAlcool => this.setState({ textInputValueAlcool })} placeholder={translate('value_etanol')} keyboardType='numeric' style={styles.textInput}></TextInput>
                </View>
                <View style={styles.sectionContainer}>

                    <Button title={translate('btn_calculate')} onPress={this.calculaMelhor}>
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#a9a9a9',
    },
    viewElements: {
        marginHorizontal: 25,
    },
    sectionContainer: {
        marginTop: 32,
        // paddingHorizontal: 24,
        paddingHorizontal: 80,
    }
})

