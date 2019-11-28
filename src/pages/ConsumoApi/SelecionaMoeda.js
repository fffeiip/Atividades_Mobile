import React, { Component } from 'react'
import { Text, Picker, View } from 'react-native'



export default class SelecionaMoeda extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                { label: "EUR" },
                { label: "CAD" },
                { label: "HKD" },
                { label: "ISK" },
                { label: "PHP" },
                { label: "DKK" },
                { label: "HUF" },
                { label: "CZK" },
                { label: "AUD" },
                { label: "RON" },
                { label: "SEK" },
                { label: "IDR" },
                { label: "INR" },
                { label: "BRL" },
                { label: "RUB" },
                { label: "HRK" },
                { label: "JPY" },
                { label: "THB" },
                { label: "CHF" },
                { label: "SGD" },
                { label: "PLN" },
                { label: "BGN" },
                { label: "TRY" },
                { label: "CNY" },
                { label: "NOK" },
                { label: "NZD" },
                { label: "ZAR" },
                { label: "USD" },
                { label: "MXN" },
                { label: "ILS" },
                { label: "GBP" },
                { label: "KRW" },
                { label: "MYR" }
            ],
            currentLabel: ''
        }
    }

    onChange(field, value ,index){
        this.props.handler(field,value)
        this.setState({currentLabel: this.state.data[index].label})
    }

    render() {
        return (
            <View style={{ flex: 1 }}>

                <Text>{this.props.titulo}</Text>
                <Picker
                    selectedValue={this.state.currentLabel}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => this.onChange(this.props.elem, itemValue, itemIndex)}
                >
                    {this.state.data.map(v => {
                        return <Picker.Item label={v.label} value={v.label} />
                    })}
                </Picker>
            </View>
        )

    }
}