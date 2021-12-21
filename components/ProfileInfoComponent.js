import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { PROFILES } from '../shared/profiles';

function RenderProfile({profile}) {
    if (profile) {
        return (
            <Card 
                featuredTitle={profile.name}
                image={{ source: require('./images/basilkarlo.jpg')}}
            >
                <Text style={{margin: 10}}>
                    {profile.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class ProfileInfo extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            profiles: PROFILES
        };
    }

    static navigationOptions = {
        title: 'Profile Information'
    }

    render() {
        const profileId = this.props.navigation.getParam('profileId');
        const profile = this.state.profiles.filter(profile => profile.id === profileId)[0];
        return <RenderProfile profile={profile} />;
    }
}

export default ProfileInfo;