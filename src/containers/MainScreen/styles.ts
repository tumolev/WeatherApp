import {Dimensions, StyleSheet} from 'react-native';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');


export default StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:'#76a2e8',
    paddingTop:15
  },
 
  flatlistView:{
    height:400,
    width:SCREEN_WIDTH,
    flex:1
  },
  title:{
    alignSelf:'center',
    textAlign:'center',
    fontSize:22,
    fontWeight:'bold',
    marginBottom:15
  }
  
});
