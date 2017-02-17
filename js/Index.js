/**
 * Created by admin on 02/17 017.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
}from 'react-native';

import FirstPageComponent from './FirstPageComponent'
// import StyleDemo from './StyleDemo'

var styles = StyleSheet.create({
    demo1: {
        height: 40,
        marginTop: 10,
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
    }
})
export default class Index extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this._gotoActivity("FirstPageComponent", FirstPageComponent)}>
                    <Text style={styles.demo1}>页面跳转演示</Text>
                </TouchableOpacity>
                {/*<TouchableOpacity onPress={() => this._gotoActivity("StyleDemo", StyleDemo)}>*/}
                    {/*<Text style={styles.demo1}>样式演示</Text>*/}
                {/*</TouchableOpacity>*/}
            </View>
        );
    }

    _gotoActivity(name, component) {
        const {navigator} = this.props;
        console.log("aaa");
        console.log(navigator);
        if (navigator) {
            navigator.push({
                name: name,
                component: component,
            })
        }
    }
}