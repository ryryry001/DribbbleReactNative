'use strict';
import React,{
	View,
	Text,
	Image,
	Dimensions,
    TouchableHighlight,
    TouchableNativeFeedback,
    Component,
    StyleSheet,
} from 'react-native';

var titleBarHeight = Dimensions.get('window').height/12;
var titleBarWidth = Dimensions.get('window').width;

class BaseTitleBar extends Component{
	render(){
		return(
			<View style={styles.container}>
			    <Text style={styles.titleText}>{this.props.title}</Text>
			    <TouchableHighlight 
			        background={TouchableNativeFeedback.SelectableBackground()}>
                    <Image style={styles.titleImage}
                           source={require('./images/ic_search_white_48dp.png')}
                           resizeMode='contain'/>
			    </TouchableHighlight>
			</View>

		);
	}

}

var styles = StyleSheet.create({
	container:{
		flex:1,
		flexDirection:"row",
		alignItems:'center',
		height:titleBarHeight,
		width:titleBarWidth,
		backgroundColor:'#3e9ce9',
		justifyContent: 'space-between',
	},
	titleText: {
        fontSize: 18,
        marginLeft: 10,
        color: 'white'
    },
    titleImage:{
    	width: 32,
        height: 32,
        marginRight: 10,
        marginLeft: 10,
    },
});

module.exports = BaseTitleBar;
