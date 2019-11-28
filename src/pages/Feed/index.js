import React, { Component } from 'react';

import { Container, Post, Header, Avatar, PostImage, Name, Description  } from './styles';
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
    requestData = () => {
        const response = fetch(`http://localhost:3000/feed?_expand=author&_limit=5&_page=1`)
        .then(response => response.json())
        .then(responseJson => this.setState({data: responseJson}))
        .catch(error => console.log(error))
        
    }
    componentDidMount() {
        this.requestData()
    }
    static navigationOptions = {
        headerTitle: <Image source={instagram} />
    }
    render() {
        return (
            <Container>
                <FlatList
                    data={this.state.data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        // console.log(item.author)
                        <Post>
                            <Header>
                                <Avatar source={{ uri: item.author.avatar }} />
                                <Name>{item.author.name}</Name>
                            </Header>
                        <PostImage ratio={item.aspectRatio} source={{uri: item.image}} />
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


