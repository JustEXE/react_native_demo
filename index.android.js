/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    TextInput,
    View,
    Navigator
} from 'react-native';

import FirstPageComponent from './js/FirstPageComponent';

var Myproject = React.createClass({
    render() {
        var defaultName = 'FirstPageComponent';
        var defaultComponent = FirstPageComponent;
        return (
            <Navigator
                //指定了默认的页面，也就是启动app之后会看到的第一屏，需要两个参数，name跟component
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
                    //跳转的动画
                    return Navigator.SceneConfigs.FadeAndroid;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    if(route.component){
                        return <Component {...route.params} navigator={navigator} />
                    }
                }} />
        );
    }
})

AppRegistry.registerComponent('Myproject', () => Myproject);



