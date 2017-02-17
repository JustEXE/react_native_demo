/**
 * Created by admin on 02/15 015.
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import SecondPageComonent from "./SecondPageComponent";

var styles = StyleSheet.create({
    hello: {
        height:40,
        marginTop:20,
        textAlign: 'center',
        textAlignVertical:'center',
        fontSize:18,
    }
})

export default class FirstPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resultMessage: "hello",
        };
    }

    _pressButtoon() {
        var _this = this;
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'SecondPageComonent',
                component: SecondPageComonent,
                params: {
                    message: "I am from FirstPageComponent",
                    getResult: function (myMessage) {
                        _this.setState({
                            resultMessage: myMessage,
                        })
                    }
                }
            })
        }
    }

    _back(){
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this._pressButtoon.bind(this)}>
                    <Text
                        style={styles.hello}>
                        {this.state.resultMessage}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._back.bind(this)}>
                    <Text style={{fontSize: 20,marginTop:20,textAlign:'center',textAlignVertical:'center',}}>
                        Back
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}