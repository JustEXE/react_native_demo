/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
    ToastAndroid,
    TouchableOpacity,
} from 'react-native';

import FirstPageComponent from "./FirstPageComponent";

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
    thumbnail: {
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 20,
        marginRight: 20,
        width: 50,
        height: 100,
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
});
var API_URL = 'http://test.leeonedu.com/Api/Activity/GetList';
var Myproject = React.createClass({
    getInitialState() {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
    },

    componentDidMount() {
        this.fetchData();
    },

    fetchData() {
        fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "schoolId=20"
        })
            .then((response) => response.json())
            .then((responseText) => {
                console.log(JSON.stringify(responseText));
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseText.data),
                    loaded: true,
                });
            })
            .done();
    },

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        // return (
        //     <View >
        //         <Text>
        //             {this.state.dataSource}
        //         </Text>
        //     </View>
        // );
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie}
                style={styles.listView}
            />
        );
    },

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading movies...
                </Text>
            </View>
        );
    },

    renderMovie(movie) {
        return (
            <View>
                <TouchableOpacity onPress={this._pressButtoon.bind(this)}>
                    <View style={styles.container}>
                        <Image
                            source={{uri: movie.imagePath}}
                            style={styles.thumbnail}
                        />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{movie.title}</Text>
                            <Text
                                style={styles.year}>{new Date(parseInt(movie.startTime) * 1000).getFullYear() + "年"
                            + (new Date(parseInt(movie.startTime) * 1000).getMonth() + 1) + "月"
                            + (new Date(parseInt(movie.startTime) * 1000).getDay() + 1) + "日"}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    },
    _pressButtoon(){
        ToastAndroid.show("aaa", ToastAndroid.SHORT);
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'FirstPageComponent',
                component: FirstPageComponent,
            })
        }
    },
})

// AppRegistry.registerComponent('Myproject', () => Myproject);



