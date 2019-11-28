import React, { Component } from 'react'
import { View, TextInput, Text, TouchableOpacity, Picker } from 'react-native'
import SelecionaMoeda from './SelecionaMoeda'

export default class ConsumoApi extends Component {

    static navigationOptions = {
        title: "Conversão de Moeda"
    }

    constructor(props) {
        super(props)
        this.state = {
            origem: 'EUR',
            destino: 'EUR',
            conversao: '',
            valor: ''
        }
        this.handler = this.handler.bind(this)
    }
    handler(field, value) {
        this.setState({ [field]: value })
    }

    conversor() {
        const response = fetch(`https://api.exchangeratesapi.io/latest?base=` + this.state.origem + `&symbols=` + this.state.destino)
            .then(response => response.json())
            .then(responseJson => {
                let valor = Object.values(responseJson.rates)
                let conversao = "O Valor da conversao de "+ this.state.valor + " na moeda " + this.state.origem+ " em "+this.state.destino +" é de: "+ valor[0]*this.state.valor
                this.setState({conversao})
            })
    }

    render() {
        return (
            <View>
                <View style={{ flexDirection: "row", alignSelf: "center", paddingHorizontal: 20 }}>
                    <TextInput
                        keyboardType="numeric"
                        style={{ flex: 1 }}
                        placeholder="Valor Origem"
                        onChangeText={valor => this.setState({valor})}
                    />
                </View>
                <View style={{ flexDirection: "row", alignSelf: "center", paddingHorizontal: 20 }}>
                    <SelecionaMoeda handler={this.handler} elem='origem' titulo="Moeda Origem" />
                    <SelecionaMoeda handler={this.handler} elem='destino' titulo="Moeda Destino" />
                </View>
                <View>
                    <Text>{this.state.conversao}</Text>
                </View>
                <View style={{
                    alignItems: 'center',
                    paddingVertical: '20%'
                }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#f91",
                            width: 100,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 8,
                        }}
                        onPress={() => this.conversor()}>
                        <Text style={{ color: "#f0b0b0b" }}>Converter</Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
}