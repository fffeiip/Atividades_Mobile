import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import RadioGroup from 'react-native-radio-buttons-group';

export default class SelecionaCurso extends Component {

    state = {
        data: [
            {
                label: 'BCC - Bacharelado em Ciência da Computação'
            },
            {
                label: 'BSI - Bacharelado em Sistema de Informação'
            },
            {
                label: 'LC - Licenciatura em Computação',
            },

        ],
    };

    static navigationOptions = {
        title: "Suporte de Laboratorio",
    }
    render() {
        let selected = this.state.data.find(e => e.selected == true)
        return (
            <View>
                <RadioGroup radioButtons={this.state.data} onPress={data => this.setState({ data })} />
                <View style={{
                    paddingVertical: '20%',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#5bb6ff",
                            width: 100,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 8,
                        }}
                        onPress={() => {
                            this.props.navigation.navigate("InteracaoActivities", {
                                curso: selected.label
                            })
                        }}>
                        <Text style={{ color: "#f0b0b0b" }}>Selecionar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
