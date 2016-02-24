'use strict';
import React,{
	ListView,
	Image,
	Text,
	View,
	TouchableHighlight,
	Component,
	StyleSheet,
	ProgressBarAndroid,
	Dimensions,
	ToastAndroid,
} from 'react-native';

var BookListItem = require('./BookListItem');
var screenWidth=Dimensions.get('window').width;
var listHeight=Dimensions.get('window').height*11/12;

var baseUri = 'https://api.douban.com/v2/book/';

class BookList extends Component{
	constructor(props){
		super(props);
		var ds = new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            });
		this.state={
			isLoaded:false,
			isRefreshing:false,
			dataSource:ds.cloneWithRows(['r1','r2']),
		};
	}

    componentDidMount(){
    	this.fetchData();
    }

    fetchData(){
    	fetch(baseUri+'search?tag=文学')
    	.then((response)=>response.json())
    	.catch((error)=>
    		this.setState({
    		isLoaded:true,
    		isRefreshing:false,
    		dataSource:this.getDataSource([]),
    	}))
    	.then((responseData)=>
    		this.setState({
    			isLoaded:true,
    			isRefreshing:false,
    			dataSource:this.getDataSource(responseData.books),
    		})
    	)
    	.done();
    	//ToastAndroid.show("fetch Done".ToastAndroid.SHORT);
    }


    getDataSource(subjects){
        return this.state.dataSource.cloneWithRows(subjects);
    }

    renderLoadingView(){
    	return(
    		<View style = {styles.container}>
    		    <ProgressBarAndroid styleAttr="Large"/>
         		<Text style={styles.loadingText}>正在加载</Text>
    		</View>

        );
    }

    renderListView(){
    	return(
    		<View style={styles.container}>
    	    <ListView
    	        dataSource={this.state.dataSource}
    	        renderRow={this.renderRow}/>
    	    </View>
    	);
    }

    renderRow(book:Object){
    	var title = book.title;
    	var author = book.author;
    	if(book.subtitle){
    		title = title+":"+book.subtitle;
    	}
    	if(book.translator!=''){
    		author = author+" 著／"+book.translator+"译";
    	}
    	return(
    		<BookListItem title={title} rate={book.rating.average+"/10"} author={author}
    		     imageUri={book.image}
    		     onItemClick={(id)=>this.onItemClick(id)}/>
    	);
    }

    onItemClick(id:number|string){

    }

	render(){
		if(this.state.isLoaded){
			return this.renderListView();
		} else {
			return this.renderLoadingView();
		}
	}
}

var styles = StyleSheet.create({
	container:{
		flex:1,
		flexDirection:'column',
		backgroundColor: '#FAFAFA',
		justifyContent: 'center',
        alignItems: 'center',
        height:listHeight,
        width:screenWidth,
	},
	loadingText:{
		fontSize: 20,
		color: 'black',
	},
});

module.exports = BookList;