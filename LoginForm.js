import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, Button, ActivityIndicator,TouchableOpacity } from 'react-native';

export default class LoginForm extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      showProgress: false,
      email: "",
      password: ""
    };
  }

  onLoginPressed() {
    this.setState({ showProgress: true });

    setTimeout(() => {
      this.setState({ showProgress: false });
      this.props.onLogin(this.state);
    }, 3000);

    // fetch("")
    //   .then()
    //   .then();
  }

  onEmailChange(email) {
    this.setState({ email: email });
  }

  onPasswordChange(password) {
    this.setState({ password: password });
  }

  render() {
    return (
      <View style={styles.container}>

        <Image style={styles.logo} source={require("./images/winngo.jpg")} />

        <View style={styles.field}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={this.onEmailChange.bind(this)} />
        </View>

        <View style={styles.field}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={this.onPasswordChange.bind(this)} />
        </View>

        <View style={styles.field}>
          <TouchableHighlight
            style={[styles.button, styles.login]}
            onPress={this.onLoginPressed.bind(this)}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
        </View>

        
          <View style={styles.field}>
          <TouchableHighlight
            style={[styles.forgetbutton, styles.forget]}
            onPress={console.log('forgrt password')}>
            <Text style={styles.forgetbuttonText}>Forget Password</Text>
          </TouchableHighlight>
        </View>

        <View style={[styles.field, styles.social]}>

          <Text style={[styles.socialLabel]}>Or login via social account</Text>

          <View style={styles.socialLogin}>
               <TouchableOpacity activeOpacity = { 0.8 } onPress = { console.log("facebook login") }>
            <Image source={require("./images/facebook-logo.png")} style = { styles.socialIcon } />
          </TouchableOpacity>

              <TouchableOpacity activeOpacity = { 0.8 } onPress = { console.log("google login") }>
            <Image source={require("./images/google-logo.png")} style = { styles.socialIcon } />
          </TouchableOpacity>
          
     <TouchableOpacity activeOpacity = { 0.8 } onPress = { console.log("twitter login") }>
            <Image source={require("./images/twitter-logo.png")} style = { styles.socialIcon } />
          </TouchableOpacity>
          
             <TouchableOpacity activeOpacity = { 0.8 } onPress = { console.log("linkedin login") }>
            <Image source={require("./images/linkedin-logo.png")} style = { styles.socialIcon } />
          </TouchableOpacity>
          </View>

        </View>


        <View style={[styles.field, styles.signUp]}>
          <View style={[styles.field, styles.separator]}></View>
          <Text style={styles.signUpLabel}>Dont't have account yet ?</Text>
          <Button
            onPress={() => console.log('sign up')}
            title="Sign Up" />
        </View>

        <View style={styles.loader}>
          <ActivityIndicator animating={this.state.showProgress} size="large" />
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 25,
    backgroundColor: "#F3F3F3"
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20
  },
  field: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#D7D7D7",
    height: 50,
    width: 300,
    borderRadius: 5,
    padding: 5,
    backgroundColor: "#fff",
    fontSize: 20,
    alignSelf: 'stretch',
    paddingVertical: 0,
  },
  button: {
    height: 45,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    width: 150
  },
  buttonText: {
    color: "#FFF",
    fontSize: 30
  },
    forgetbuttonText: {
    color: "#000",
    fontSize: 20
  },
  login: {
    backgroundColor: "#1EC625",
  },
  signUp: {
  },
  loader: {
    position: 'absolute',
    top: 200,
    left: 185,
    justifyContent: 'center',
    alignItems: 'center'
  },
  forget: {
    backgroundColor: "#F3F3F3"
  },
  forgetbutton: {
    height: 45,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    width: 150,
    borderColor:"#00"
  },
  separator: {
    borderBottomColor: "#CCC",
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10
  },
  signUpLabel: {
    alignSelf: "center"
  },
  social: {
    marginTop: 20
  },
  socialLogin: {
    flexDirection: "row",
    alignSelf: "center",
    marginLeft: 45,
    marginRight: 25,
  },
  socialLabel: {
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20
  },
  socialIcon: {
    backgroundColor: "#FFF",
    width: 50,
    height: 50,
    marginRight: 30
  }
});