import React from 'react'
import { StatusBar } from 'react-native'
import AppNavigator from "./routes/AppNavigator"

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
                <AppNavigator
                />
            </>
        );
    }
}
