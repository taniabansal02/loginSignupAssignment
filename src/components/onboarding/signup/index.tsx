import React, { useState , useRef} from "react";
import { ImageBackground, SafeAreaView, Text, View, Alert, ScrollView,  TouchableOpacity } from "react-native";
import { styles } from "./style";
import Input from "../../textInput";
import Button from "../../button";
import { useNavigation } from "@react-navigation/native";
import routes from "../../../assets/routes";

const Signup = () => {
   
    
    const navigation = useNavigation();
    const goToLogin = () => {
        navigation.navigate(routes.onboarding.login.path)
    }

    const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [fname, setFname] = useState('');
     const [lname, setLname] = useState('');
     const [zip, setZip] = useState('');
     const [isValid, setIsValid] = useState(false);
     const [submit, setSubmit] = useState('white');


  const validateForm = () => {
    
    //Email verification
    let emailregrex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email === '') {
      Alert.alert("Email is required");
      return null;
    }
    else if (!emailregrex.test(email)) {
      Alert.alert("Please enter a valid email");
      return null;
    }

    //Password verification
    let cond1 = /^(?=.*[a-z]).{6,20}$/;
    const cond2 = /^(?=.*[A-Z]).{6,20}$/;
    const cond3 = /^(?=.*[0-9]).{6,20}$/;

    if (password.length === 0) {
      Alert.alert("password is required");
      return null;
    }
    else if (password.length < 6) {
      Alert.alert("Password must be longer than 6 characters");
      return null;
    }
    else if (password.length >= 20) {
      Alert.alert("Password must shorter than 20 characters");
      return null;
    }
    else if (!cond1.test(password)){
        Alert.alert("Lowercase letter is required");
        return null;
    }
    else if (!cond2.test(password)){
        Alert.alert("Uppercase letter is required");
        return null;
    }
    else if (!cond3.test(password)){
        Alert.alert("Numeric letter is required");
        return null;
    }

    // First name validation
    if (fname === ''){
        Alert.alert("First name is required");
        return null;
    }

    // Last name validation
    if (lname === ''){
        Alert.alert("Last name is required");
        return null;
    }

    // Zip Code validation
    if(zip.length === 0){
        Alert.alert('Zip code is required');
        return null;
    }
    else if(zip.length < 5){
        Alert.alert('Zip code cannot be less than 5 digits');
        return null;
    }
    else if(zip.length > 5 ){
        Alert.alert('Zip code cannot be greater than 5 digits');
        return null;
    }

    if(email.length && password.length && fname.length && lname.length && zip.length){
        setIsValid(true);
    }
   
  };
  
  const onHandle = (val) => {
    console.log(val);
    console.log(submit);
    if (email && password && fname && lname  && zip){
        console.log("Inside");
        setSubmit('blue');

    }
    else{
        setSubmit('white');
    }

   
    // if(validateForm()){
    //     setisValid(true);
    //     // navigation.navigate(routes.onboarding.login.path);
    // }
    // else{
    //     setisValid(false);
    // }
  }
  const naviBtn = () => {
    if(isValid){
    navigation.navigate(routes.onboarding.login.path)
    }
}



    return (
        <SafeAreaView>
             
            <ScrollView contentContainerStyle={{flexGrow:1}}>
            <ImageBackground source={require('../../../assets/images/bg.png')} resizeMode="cover" style={styles.bgImg}>
            <View style={styles.mainView}>
                <Text style={styles.heading}> Signup </Text>
                <Input title="Email" label="Email Address"  fun = {(val) => {setEmail(val); onHandle(val);}}/>
                <Input title="Password" label="Password" fun = {(val) => {setPassword(val); onHandle(val); }}/>
                <Input title="First Name" label="First Name" fun = {(val) => {setFname(val) ; onHandle(val);}}/>
                <Input title="Last Name" label="Last Name" fun = {(val) => {setLname(val) ; onHandle(val); }}/>
                <Input title="Zip code" label="Zip code" fun={(val) => { setZip(val) ; onHandle(val); }}/>
                <Button title="Register"  setFun={() => validateForm()}  />
                {/* <Button title="Register" onPress={ () => validateForm()}  ></Button> */}
                <TouchableOpacity style={{padding: 20,  backgroundColor:{ submit }}} onPress={ () => { validateForm(); naviBtn(); }} >
                    <Text> logggg </Text>
                </TouchableOpacity>

                
               
               



            </View>
            
            </ImageBackground>
            
                
            </ScrollView>

           
           
        </SafeAreaView>
    );
};

export default Signup;