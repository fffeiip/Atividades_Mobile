import React, { Component } from 'react';

import { Container, Post, Header, Avatar, Name, Description, Loading } from './styles';
import {
    Image,
    FlatList
} from 'react-native'
import instagram from '../../assets/instagram.png'

export default class Feed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: ""
        }
    }
    requestData = async () => {
         
        response = await (fetch(`http://localhost:3000/feed?_expand=authors &_limit-5`))
        data = await response.json()
        return data
    }
    componentDidMount() {
        this.setState({ data: this.requestData() })
    }
    static navigationOptions = {
        headerTitle: <Image source={instagram} />
    }
    render() {
        console.log(this.state.data)
        return (
            <Container>
                <FlatList
                    key="list"
                    data={this.state.data}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => (
                        <Post>
                            <Header>
                                <Avatar source={{ uri: item.author.avatar }} />
                                <Name>{item.author.name}</Name>
                            </Header>

                            <Description>
                                <Name>{item.author.name}</Name> {item.description}
                            </Description>
                        </Post>
                    )}
                />
            </Container>
        )
    }
}


