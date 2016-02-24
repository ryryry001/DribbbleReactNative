'use strict';
import React,{
	AppRegistry,
    Component,
    StyleSheet,
    Text,
	ListView,
	View,
} from 'react-native';

var TitleBar = require('./BaseTitleBar');
var BookList = require('./BookList');

class MainScreen extends Component{

   	constructor(props) {
   		super(props);
   		this.state = {
   			isLoaded:false,
   		};
   	}

	onItemClick(){

	}

    renderRow(){

    }

	render(){
		return(
			<View sytle={styles.container}>
			     <TitleBar title="豆瓣读书"/>
			     <BookList />
			</View>

		);
	}
}

var styles = StyleSheet.create({
	container:{
		flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FAFAFA',
	},
});

module.exports = MainScreen;