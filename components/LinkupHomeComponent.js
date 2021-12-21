import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { PROFILES } from '../shared/profiles';
import { LINKUPS } from '../shared/linkups';


function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image= {item.image}
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class LinkupHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profiles: PROFILES,
            linkups: LINKUPS,
        };
    }

    static navigationOptions = {
        title: 'Linkup Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem 
                    item={this.state.profiles.filter(profile => profile.featured)[0]}
                />
                <RenderItem 
                    item={this.state.linkups.filter(linkup => linkup.featured)[0]}
                />
            </ScrollView>
        );
    }
}

export default LinkupHome;