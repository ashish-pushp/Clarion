import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
    topContainer:{
        flex: 1, 
        backgroundColor:'#fff'
    },
    addProductContainer:{
        marginTop:30,
        marginBottom:30, 
        alignItems:'center', 
        justifyContent:'center'
    },
    addProductButton:{
        alignItems:'center', 
        justifyContent:'center', 
        backgroundColor:'tomato', 
        borderRadius:6, 
        paddingHorizontal:80, 
        paddingVertical:20, 
        flex:1,
    },
    cardContainer:{
        flex:1,
        backgroundColor:'#FFFFFF', 
        borderRadius:12, 
        marginLeft:15, 
        marginRight:15, 
        elevation:7,
        marginTop:10, 
        marginBottom:10,
        borderTopColor:'tomato', 
        borderTopWidth:4,
        paddingVertical:10,
        flexDirection:'row'
    },
    cardTopView:{
        flex:1, 
        paddingHorizontal:15,
        paddingVertical:10,
        flexDirection:'row', 
    },
    nameView:{
        flexDirection:'column',
        flex:1, 
    },
    nameText:{
        color:'#444D63',
        fontWeight:'bold',
        fontSize:12
    },
  });