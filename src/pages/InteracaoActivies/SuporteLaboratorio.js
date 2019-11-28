import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'

export default class SuporteLaboratorio extends Component {

    static navigationOptions = {
        title: "Suporte de Laboratorio",
    }
    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            solicitacao: ''
        }
    }
    render() {
        return (
            <View>
                <TextInput
                    placeholder="Nome"
                    value={this.state.nome}
                    onChangeText={nome => this.setState({ nome })}
                />
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('SelecionaCurso')}>
                    <TextInput
                        style={{ color: 'black' }}
                        editable={false}
                        placeholder="Curso"
                        value={this.props.navigation.getParam('curso')}
                    />
                </TouchableOpacity>
                <TextInput
                    placeholder="Solicitação"
                    value={this.state.solicitacao}
                    onChangeText={solicitacao => this.setState({ solicitacao })}
                />
            </View>
        )
    }
}
