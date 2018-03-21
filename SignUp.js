import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, Button, AppRegistry, TouchableOpacity } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { DatePickerDialog } from 'react-native-datepicker-dialog'

import moment from 'moment';

export default class SignUp extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            showProgress: false,
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            birthDate: "",
            gender: "",
            homeArea: "",
            workArea: "",
            DateText: 'Date Of Birth',
            DateHolder: null,
        };
    }

  DatePickerMainFunctionCall = () => {

    let DateHolder = this.state.DateHolder;

    if(!DateHolder || DateHolder == null){

      DateHolder = new Date();
      this.setState({
        DateHolder: DateHolder
      });
    }

    //To open the dialog
    this.refs.DatePickerDialog.open({

      date: DateHolder,

    });
  }
  
  onDatePickedFunction = (date) => {
    this.setState({
      dobDate: date,
      DateText: moment(date).format('DD-MMM-YYYY')
    });
  }

    static navigationOptions = {
        title: 'Sign Up',
    };

    onGenderSelect(index, value) {
        this.setState({
            gender: value
        });

        console.log(value);
    }

    onCancelPressed() {

    };

    onSignUpPressed() {
        this.setState({ showProgress: true });

        setTimeout(() => {
            this.setState({ showProgress: false });
            //this.props.onLogin(this.state);
        }, 1000);
    };

    getDateString(date) {
        date = date || new Date();

        let day = date.getDate();
        let month = date.getMonth - 1;
        let year = date.getFullYear();

        let dateStr = `${year}-${month}-${day}`;
        return dateStr;
    };

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.field1}>
                    <TextInput
                        style={styles.input}
                        placeholder="First Name"
                        onChangeText={(firstName) => { this.setState({ firstName: firstName }) }} />
                </View>

                <View style={styles.field}>
                    <TextInput
                        style={styles.input}
                        placeholder="Last Name"
                        onChangeText={(lastName) => { this.setState({ lastName: lastName }) }} />
                </View>

                <View style={styles.field}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={(email) => { this.setState({ email: email }) }} />
                </View>

                <View style={styles.field}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={(password) => { this.setState({ password: password }) }} />
                </View>

                <View style={styles.field}>
                     <TouchableOpacity onPress={this.DatePickerMainFunctionCall.bind(this)} >
 
            <View style={styles.datePickerBox}>
 
              <Text style={styles.datePickerText}>{this.state.DateText}</Text>
 
            </View>
 
          </TouchableOpacity>
 
 
        {/* Place the dialog component at end of your views and assign the references, event handlers to it.*/}
        <DatePickerDialog ref="DatePickerDialog" onDatePicked={this.onDatePickedFunction.bind(this)} />
                </View>

                <View>
                    {/* <Text>Gender</Text> */}
                    <RadioGroup
                        style={styles.gender}
                        onSelect={(index, value) => this.onGenderSelect(index, value)}>

                        <RadioButton value={'Male'} >
                            <Text>Male</Text>
                        </RadioButton>
                        <RadioButton value={'Female'}>
                            <Text>Female</Text>
                        </RadioButton>

                    </RadioGroup>
                </View>

                <View style={styles.field}>
                    <TextInput
                        style={styles.input}
                        placeholder="Home Area"
                        onChangeText={(homeArea) => { this.setState({ homeArea: homeArea }) }} />
                </View>

                <View style={styles.field}>
                    <TextInput
                        style={styles.input}
                        placeholder="Work Area"
                        onChangeText={(homeArea) => { this.setState({ homeArea: homeArea }) }} />
                </View>

                <View style={styles.fieldrow}>
                    <TouchableHighlight
                        style={[styles.button, styles.signUp]}
                        onPress={this.onSignUpPressed.bind(this)}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableHighlight>
                     
                <TouchableHighlight
                        style={styles.button}
                        onPress={this.onSignUpPressed.bind(this)}>
                        <Text style={styles.buttonText}>cancel</Text>
                    </TouchableHighlight>
                </View>

               

                {/* <View style={styles.field}>
                    <TouchableHighlight
                        style={[styles.button, styles.cancel]}
                        onPress={this.onCancelPressed.bind(this)}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableHighlight>
                </View> */}


                <View style={[styles.field, styles.social]}>

                    <View style={[styles.field, styles.separator]}></View>
                    <Text style={[styles.socialLabel]}>Or sign up via social account</Text>

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


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
        paddingTop: 15,
        backgroundColor: "#F3F3F3"
    },
    heading: {
        fontSize: 40,
        fontWeight: "300",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 10,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: "center",
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 30,
    },
    field: {
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
    },
        field1: {
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 30,
    },
     fieldrow: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    label: {
        fontSize: 20,
        fontWeight: "400",
    },
    input: {
        borderWidth: 1,
        borderColor: "#D7D7D7",
        height: 50,
        borderRadius: 5,
        backgroundColor: "#fff",
        fontSize: 20,
        padding: 5,
        width :350,
        paddingTop: 5
    },
    gender: {
        flexDirection: "row",
        alignSelf: "center",
    },
    button: {
        marginTop: 10,
        borderRadius: 5,
        width: '40%'
    },
    buttonText: {
        color: "#000",
        fontSize: 30,
        textAlign: 'center'
    },
    signUp: {
        backgroundColor: "#1EC625"
    },
    cancel: {
        backgroundColor: "#555"
    },
    loader: {
        position: 'absolute',
        top: 200,
        left: 185,
        justifyContent: 'center',
        alignItems: 'center'
    },
    separator: {
        borderBottomColor: "#CCC",
        borderBottomWidth: 1,
        //marginTop: 10,
        marginBottom: 10
    },
    social: {
        //marginTop: 10
    },
    socialLogin: {
        flexDirection: "row",
        alignSelf: "center",
        marginLeft: 45,
        marginRight: 25,
    },
    socialLabel: {
        alignSelf: "center",
        //marginTop: 10,
        marginBottom: 10
    },
    socialIcon: {
        backgroundColor: "#FFF",
        width: 50,
        height: 50,
        marginRight: 30
    },
    content: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  datePickerBox:{
    marginTop: 9,
    borderColor: '#D7D7D7',
    borderWidth: 0.5,
    padding: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    height: 38,
    justifyContent:'center',
            backgroundColor: "#fff",
  },

  datePickerText: {
    fontSize: 14,
    marginLeft: 5,
    borderWidth: 0,
    color: '#000',
    width : 350,
    backgroundColor: "#fff",
    borderRadius: 5,
    backgroundColor: "#fff",
    fontSize: 20,
    placeholder: 'Date Of Birth'
  },
});

AppRegistry.registerComponent('SignUp', () => SignUp);