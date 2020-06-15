import React, { Component } from 'react'
import { StatusBar, View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import styles from './style'
import { TextInput } from 'react-native-gesture-handler'
import { loginUser } from '../../actions/user'

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
       userName:"",
       password:""
    }
  }

    async componentDidMount(){
    }

    loginUser = async () => {
        const { userName, password } = this.state;
        const { navigation, dispatch } = this.props;
        await dispatch(loginUser(userName, password)).then( isAuthenticated => {
            if(isAuthenticated){
                navigation.navigate('ProductDetail')
            }
        })
        
    }
  

    render() {   
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="transparent" barStyle="light-content" translucent/>
                <View style={styles.topContainer}>
                    <View style={styles.loginTextContainer}>
                        <Text style={styles.loginTitleText}>{'LOGIN'}</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            placeholder="Username"
                            placeholderTextColor="grey"
                            onChangeText={(val) => this.setState({userName:val})}
                            style={styles.inputText}
                        />
                    </View>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="grey"
                            onChangeText={(val) => this.setState({password:val})}
                            style={styles.inputText}
                        />
                    </View>
                    <View style={styles.loginButtonContainer}>
                        <TouchableOpacity onPress={this.loginUser} style={styles.loginButton}>
                            <Text style={[styles.loginText, {color:'#fff', fontSize:19, fontWeight:'bold'}]}>{'Login'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View> 
        )
    }
}
function mapStateToProps(state) {
    return {
       
    }
  }
  
export default connect(mapStateToProps)(LoginScreen)
