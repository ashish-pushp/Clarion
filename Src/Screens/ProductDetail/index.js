import React, { Component } from 'react'
import { StatusBar, Image, View, Text, FlatList, RefreshControl, TouchableOpacity, Modal } from 'react-native'
import { connect } from 'react-redux'
import styles from './style'
import { TextInput } from 'react-native-gesture-handler'

class ProductDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
        data : [
            {
                "id": "PROD-001",
                "name":"Product-1",
                "rate":500,
                "quality":3
            },
            {
                "id": "PROD-002",
                "name":"Product-2",
                "rate":300,
                "quality":2
            },
            {
                "id": "PROD-003",
                "name":"Product-3",
                "rate":500,
                "quality":3
            },
            {
                "id": "PROD-004",
                "name":"Product-4",
                "rate":100,
                "quality":1
            },
        ],
        modalVisible:false,
        productId:"",
        productName:"",
        productRate:null,
        productRate:null    
    }
  }

    async componentDidMount(){
      const { userData } = this.props
      var userName = userData.userName.split('@');
      alert('Welcom ' + userName[0] + ' !')
    }

    deleteData(data) {
        var array = [...this.state.data];
        var index = array.indexOf(data)
        if (index !== -1) {
        array.splice(index, 1);
        this.setState({data: array});
        }
    }

    closeModal = () => {
        this.setState({
            modalVisible: false
        })
    }

    addProduct = () => {
        const { productId, productName, productQuality, productRate} = this.state;

        if(productId == ""){
            alert('Please Enter Product Id !')
            return;
        }
        if(productName == ""){
            alert('Please Enter Product Name !')
            return;
        }
        if(productRate == null){
            alert('Please Enter Product Rate !')
            return;
        }
        if(productQuality == null){
            alert('Please Enter Product Quality !')
            return;
        }

        var dataToAdd = {
            "id" : productId,
            "name" : productName,
            "rate" : productRate,
            "quality" : productQuality
        }

        this.state.data.push(dataToAdd)
        this.setState({
            modalVisible : false
        })
        console.log('data ==> ', this.state.data)
    }

    onProductQualityChange = (val) => {
        if(val > 3){
            alert('Please enter a value between 1 to 3')
        }else {
            this.setState({productQuality : val})
        }
    } 
  

  render() {   
      const { data, modalVisible } = this.state; 
    return (
        <View style={{ flex: 1, backgroundColor:'#fff'}}>
            <StatusBar backgroundColor="tomato" barStyle="light-content" translucent />
            <View style={{marginTop:30, marginBottom:30, alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity onPress={() => this.setState({modalVisible:true})} style={{alignItems:'center', justifyContent:'center', backgroundColor:'tomato', borderRadius:6, paddingHorizontal:80, paddingVertical:20, flex:1,}}>
                    <Text style={{color:'#fff'}}>{'Add Product'}</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:1}}>            
                <FlatList
                    data={data} 
                    keyExtractor={(item, index) => index + item.id}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.cardContainer}> 
                                <View style={styles.cardTopView}>
                                    <View style={styles.nameView}>
                                        <View style={{flex:1, flexDirection:'row'}}>
                                            <View style={{flex:1}}>
                                                <Text style={styles.nameText}>{'ID ' + ' : '}</Text>
                                            </View>
                                            <View style={{flex:1}}>
                                                <Text style={styles.nameText}>{item.id}</Text>
                                            </View>
                                        </View>
                                        <View style={{flex:1, flexDirection:'row'}}>
                                            <View style={{flex:1}}>
                                                <Text style={styles.nameText}>{'Name ' + ' : '}</Text>
                                            </View>
                                            <View style={{flex:1}}>
                                                <Text style={styles.nameText}>{item.name}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.cardTopView, {marginLeft:15}]}>
                                    <View style={styles.nameView}>
                                        <View style={{flex:1, flexDirection:'row'}}>
                                            <View style={{flex:1}}>
                                                <Text style={styles.nameText}>{'Rate ' + ' : '}</Text>
                                            </View>
                                            <View style={{flex:1}}>
                                                <Text style={styles.nameText}>{item.rate}</Text>
                                            </View>
                                        </View>
                                        <View style={{flex:1, flexDirection:'row'}}>
                                            <View style={{flex:1}}>
                                                <Text style={styles.nameText}>{'Quality ' + ' : '}</Text>
                                            </View>
                                            <View style={{flex:1}}>
                                                <Text style={styles.nameText}>{item.quality}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{alignItems:'flex-end', paddingHorizontal:20, justifyContent:'center'}}>
                                    <TouchableOpacity onPress={() => this.deleteData(item)} style={{alignItems:'center', justifyContent:'center', backgroundColor:'tomato', borderRadius:6, paddingHorizontal:10, paddingVertical:10}}>
                                        <Text style={{color:'#fff'}}>{'Delete'}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>          
                        )
                    }}    
                />
            </View>    
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            >
                <TouchableOpacity style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                    <View style={{width:'90%', height:500, backgroundColor:'#fff', borderRadius:6}}>
                        <View style={{width:'100%', backgroundColor:'tomato', alignItems:'center', borderTopLeftRadius:6, borderTopRightRadius:6, justifyContent:'center', paddingVertical:15}}>
                            <Text style={{color:'#fff', fontSize:15, fontWeight:'bold'}}>{'Add Product'}</Text>
                        </View>
                        <View style={{flex:1, marginTop:10}}>
                            <View style={{paddingHorizontal:20, paddingVertical:15}}>
                                <Text style={{color:'#000', fontSize:13, fontWeight:'bold'}}>{'Product ID'}</Text>
                                <TextInput
                                    placeholder="Enter Product ID"
                                    placeholderTextColor="grey"
                                    onChangeText={(val)=> this.setState({productId : val})}
                                    value={this.state.productId}
                                    style={{
                                        borderRadius:6,
                                        borderWidth:1,
                                        borderColor:'#ccc',
                                        paddingVertical:5,
                                        paddingHorizontal:8,
                                        marginTop:10
                                    }}
                                />
                            </View>
                            <View style={{paddingHorizontal:20, paddingVertical:15}}>
                                <Text style={{color:'#000', fontSize:13, fontWeight:'bold'}}>{'Product Name'}</Text>
                                <TextInput
                                    placeholder="Enter Product Name"
                                    placeholderTextColor="grey"
                                    onChangeText={(val)=> this.setState({productName : val})}
                                    value={this.state.productName}
                                    style={{
                                        borderRadius:6,
                                        borderWidth:1,
                                        borderColor:'#ccc',
                                        paddingVertical:5,
                                        paddingHorizontal:8,
                                        marginTop:10
                                    }}
                                />
                            </View>
                            <View style={{paddingHorizontal:20, paddingVertical:15}}>
                                <Text style={{color:'#000', fontSize:13, fontWeight:'bold'}}>{'Product Rate'}</Text>
                                <TextInput
                                    placeholder="Enter Product Rate"
                                    placeholderTextColor="grey"
                                    onChangeText={(val)=> this.setState({productRate : val})}
                                    value={this.state.productRate}
                                    keyboardType="number-pad"
                                    style={{
                                        borderRadius:6,
                                        borderWidth:1,
                                        borderColor:'#ccc',
                                        paddingVertical:5,
                                        paddingHorizontal:8,
                                        marginTop:10
                                    }}
                                />
                            </View>
                            <View style={{paddingHorizontal:20, paddingVertical:15}}>
                                <Text style={{color:'#000', fontSize:13, fontWeight:'bold'}}>{'Product Quality'}</Text>
                                <TextInput
                                    placeholder="Enter Product Quality"
                                    placeholderTextColor="grey"
                                    onChangeText={(val)=> this.onProductQualityChange(val)}
                                    keyboardType='number-pad'
                                    value={this.state.productQuality}
                                    style={{
                                        borderRadius:6,
                                        borderWidth:1,
                                        borderColor:'#ccc',
                                        paddingVertical:5,
                                        paddingHorizontal:8,
                                        marginTop:10
                                    }}
                                />
                            </View>
                        </View>
                        <View style={{ width:'100%',justifyContent:'center',position:'absolute',bottom:0, borderBottomLeftRadius:6, borderBottomRightRadius:6}}>
                            <View style={{flexDirection:'row', borderBottomLeftRadius:6, borderBottomRightRadius:6}}>
                                <TouchableOpacity style={{backgroundColor:'#00CC66',width:'50%', borderBottomLeftRadius:6}} onPress={this.addProduct}>
                                    <Text style={{color:'white',textAlign:'center',padding:10}}>Add</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor:'red',width:'50%',borderBottomRightRadius:6}} onPress={() => this.closeModal()}>
                                    <Text style={{color:'white',textAlign:'center',padding:10}}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>    
                    </View>
                </TouchableOpacity>        
            </Modal>
        </View> 
    )
  }
}
function mapStateToProps(state) {
    return {
        userData : state.user.userData
    }
  }
  
export default connect(mapStateToProps)(ProductDetail)
