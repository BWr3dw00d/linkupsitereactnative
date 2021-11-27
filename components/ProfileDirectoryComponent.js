import React, {Component} from 'react';
import { render } from 'react-dom';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { PROFILES } from '../shared/profiles';

class ProfileDirectory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profiles: PROFILES
        };
    }
    static navigationOptions = {
        title: 'Profile Directory'
    }

    render() {
            const { navigate } = this.props.navigation;
            const renderDirectoryItem = ({item}) => {
                return (
                    <ListItem
                        title={item.name}
                        subtitle={item.description}
                        onPress={() => navigate('ProfileInfo', { profileId: item.id })}
                        leftAvatar={{ source: require('./images/basilkarlo.jpg')}}
                    />
                );
            };
        
            return (
                <FlatList
                    data={this.state.profiles}
                    renderItem={renderDirectoryItem}
                    keyExtractor={item => item.id.toString()}
                />
            );
        }
    };




export default ProfileDirectory;