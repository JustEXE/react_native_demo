import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ListView,
    ToastAndroid,
    StyleSheet,
} from 'react-native';

var styles = StyleSheet.create({
    list: {
        marginTop: 30,
        marginBottom: 50,
        marginLeft: 50,
    },
    title: {
        height:40,
        textAlign:'center',
        textAlignVertical:'center',
        marginTop: 20,
    },
})

export default class SecondPageComponent extends React.Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
        this.state = {
            message: "",
            dataSource: ds.cloneWithRows(this._getData()),
        };
    }

    componentDidMount() {
        this.setState({
            message: this.props.message,
        });
    }

    _getData() {
        const dataB = []
        for (let i = 0; i < 200; i++) {
            dataB.push("aa" + i);
        }
        return dataB;
    }

    _pressButton() {
        const {navigator} = this.props;
        if (this.props.getResult) {
            this.props.getResult("This is from SecondPageComponent");
        }

        if (navigator) {
            navigator.pop();
        }
    }

    _pressRow(rowId, rowData) {
        alert("点击了-->" + rowId + ",内容：" + rowData);
    }

    _renderRow(rowData, selectId, rowId) {
        return (
            <TouchableOpacity onPress={() => {
                this._pressRow(rowId, rowData)
            }}>
                <View>
                    <Text>
                        {"rowData=" + rowData + ",selectId=" + selectId + ",rowId=" + rowId}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text
                        style={styles.title}>
                        {this.state.message}
                    </Text>
                </TouchableOpacity>
                <ListView
                    style={styles.list}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                />

            </View>
        );
    }
}