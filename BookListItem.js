'use strict';
import React,{
	Image,
	Text,
	View,
	StyleSheet,
	Component,
	TouchableHighlight,
	Dimensions,
} from 'react-native';

var screenWidth=Dimensions.get('window').width;

class BookListItem extends Component{
	render(){
		return(
			<View style={{width:screenWidth}}>
			<TouchableHighlight
			    onPress={this.props.onItemClick}>
			    <View style={styles.container}>
			        <Image style={styles.cover}
			           source={{uri:this.props.imageUri}}/>
			        <View style={styles.description}>
			            <Text style={styles.title}>{this.props.title}</Text>
                        <Text style={styles.rate}>{this.props.rate}</Text>
                        <Text style={styles.author}>{this.props.author}</Text>
			        </View>
			    </View>
			</TouchableHighlight>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container:{
		flex:1,
		flexDirection:'row',
		justifyContent:'space-around'
	},
	description:{
		flex:1,
		flexDirection:'column',
		justifyContent: 'space-between',
		alignItems:'flex-start',
		margin: 10,
	},
	cover:{
		width:100,
		height:100,
		margin:10,
		backgroundColor:'#334987',
	},
	title:{
		fontSize: 15,
        margin: 5,
        color: 'black',
	},
	rate:{
		fontSize: 12,
		margin: 5,
		color: 'black',
	},
	author:{
		fontSize: 12,
		margin: 5,
		color: 'black',
	}
});

module.exports=BookListItem;