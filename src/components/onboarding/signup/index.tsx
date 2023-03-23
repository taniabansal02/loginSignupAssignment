import React, { useState , useRef} from "react";
import { ImageBackground, SafeAreaView, Text, View, Alert, ScrollView,  TouchableOpacity } from "react-native";
import { styles } from "./style";
import Input from "../../textInput";
import Button from "../../button";
import { useNavigation } from "@react-navigation/native";
import routes from "../../../assets/routes";
import { TextInput } from "react-native";

const Signup = () => {
   
    
    const navigation = useNavigation();
    const goToLogin = () => {
        navigation.navigate(routes.onboarding.login.path)
    }


    const pass_ref = useRef();
    const fname_ref = useRef();
    const lname_ref = useRef();
    const zip_ref = useRef();

    const [email, setEmail] = useState(false);
     const [password, setPassword] = useState(false);
     const [fname, setFname] = useState(false);
     const [lname, setLname] = useState(false);
     const [zip, setZip] = useState(false);
     const [emailval, setEmailval] = useState('');
     const [passval, setPassval] = useState('');
     const [fnameval, setFnameval] = useState('');
     const [lnameval, setLnameval] = useState('');
     const [zipval, setZipval] = useState('');
     const [isValid, setIsValid] = useState(false);
     const [submit, setSubmit] = useState('white');


//   const validateForm = () => {
    
//     //Email verification
//     let emailregrex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     if (emailval === '') {
//       Alert.alert("Email is required");
//       return null;
//     }
//     else if (!emailregrex.test(email)) {
//       Alert.alert("Please enter a valid email");
//       return null;
//     }

//     //Password verification
//     let cond1 = /^(?=.*[a-z]).{6,20}$/;
//     const cond2 = /^(?=.*[A-Z]).{6,20}$/;
//     const cond3 = /^(?=.*[0-9]).{6,20}$/;

//     if (password.length === 0) {
//       Alert.alert("password is required");
//       return null;
//     }
//     else if (password.length < 6) {
//       Alert.alert("Password must be longer than 6 characters");
//       return null;
//     }
//     else if (password.length >= 20) {
//       Alert.alert("Password must shorter than 20 characters");
//       return null;
//     }
//     else if (!cond1.test(password)){
//         Alert.alert("Lowercase letter is required");
//         return null;
//     }
//     else if (!cond2.test(password)){
//         Alert.alert("Uppercase letter is required");
//         return null;
//     }
//     else if (!cond3.test(password)){
//         Alert.alert("Numeric letter is required");
//         return null;
//     }

//     // First name validation
//     if (fname === ''){
//         Alert.alert("First name is required");
//         return null;
//     }

//     // Last name validation
//     if (lname === ''){
//         Alert.alert("Last name is required");
//         return null;
//     }

//     // Zip Code validation
//     if(zip.length === 0){
//         Alert.alert('Zip code is required');
//         return null;
//     }
//     else if(zip.length < 5){
//         Alert.alert('Zip code cannot be less than 5 digits');
//         return null;
//     }
//     else if(zip.length > 5 ){
//         Alert.alert('Zip code cannot be greater than 5 digits');
//         return null;
//     }

//     if(email.length && password.length && fname.length && lname.length && zip.length){
//         setIsValid(true);
//     }
   
//   };
  
//   const onHandle = (val) => {
//     console.log(val);
//     console.log(submit);
//     if (email && password && fname && lname  && zip){
//         console.log("Inside");
//         setSubmit('blue');

//     }
//     else{
//         setSubmit('white');
//     }

   
//     // if(validateForm()){
//     //     setisValid(true);
//     //     // navigation.navigate(routes.onboarding.login.path);
//     // }
//     // else{
//     //     setisValid(false);
//     // }
//   }
//   const naviBtn = () => {
//     if(isValid){
//     navigation.navigate(routes.onboarding.login.path)
//     }
// }

const validateForm = () => {
    // Email verification
     let emailregrex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     if (!emailregrex.test(emailval)) {
              Alert.alert("Please enter a valid email");
               return null;
        }

        //Password verification
     let cond1 = /^(?=.*[a-z]).{6,20}$/;
     const cond2 = /^(?=.*[A-Z]).{6,20}$/;
     const cond3 = /^(?=.*[0-9]).{6,20}$/;

     if (passval.length === 0) {
      Alert.alert("password is required");
       return null;
     }
     else if (passval.length < 8) {
       Alert.alert("Password must be longer than 7 characters");
       return null;
     }
     else if (passval.length >= 20) {
       Alert.alert("Password must shorter than 20 characters");
       return null;
     }
    else if (!cond1.test(passval)){
         Alert.alert("Lowercase letter is required");
         return null;
     }
     else if (!cond2.test(passval)){
         Alert.alert("Uppercase letter is required");
     }
     else if (!cond3.test(passval)){
         Alert.alert("Numeric letter is required");
         return null;
     }

     // First name validation
     let firstregex = /[A-Z][a-z]*/;

     if (fnameval === ''){
        Alert.alert("First name is required");
         return null;
     }
      
     else if (!firstregex.test(fnameval)){
         Alert.alert("Invalid first name");
     }

      // Last name validation
      let lastregex = /[A-Z][a-z]*/;

      if (lnameval === ''){
         Alert.alert("Last name is required");
          return null;
      }
       
      else if (!lastregex.test(lnameval)){
          Alert.alert("Invalid last name");
      }

      // Zip handler
      let zipregex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

      if(zipval === ''){
        Alert.alert("zip code is required");
      }
      else if(!zipregex.test(zipval)){
        Alert.alert("Invalid zip code");
      }

}

const emailHandler = (val) => {
    setEmailval(val);
    console.log(val);
    let emailregrex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailregrex.test(emailval)) {
        console.log("Shi aa");
        setEmail(true);
    }
    else{
        setEmail(false);
    }
}

const loginHandler = (val) => {
    setPassval(val);
    console.log(val);
    //Password verification
    let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(passwordregex.test(passval)) 
    {
        console.log("Shi aa");
        setPassword(true);
    }
    else{
        setPassword(false);
    }
}

const fnameHandler = (val) => {
    setFnameval(val);
    console.log(val);
    let firstregex = /[A-Z][a-z]*/;
    if (firstregex.test(fnameval)){
        console.log("Shi aa");
        setFname(true);
    }
    else{
        setFname(false);
    }
}


let lastregex = /[A-Z][a-z]*/;
const lnameHandler = (val) => {
    setLnameval(val);
    console.log('value: ',val);
    console.log('lnameval: ', lnameval);
   
    
    if (!lastregex.test(lnameval)){
        console.log("tania aa");
        setLname(false);
    }
    else{
        console.log("shi aa");
        setLname(true);
    }
}

const zipHandler = (val) => {
    setZipval(val);
    let zipregex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    if(zipregex.test(zipval)){
        setZip(true);
    }
    else{
        setZip(false);
    }
}




    return (
        <SafeAreaView>
             
            <ScrollView contentContainerStyle={{flexGrow:1}}>
            <ImageBackground source={require('../../../assets/images/bg.png')} resizeMode="cover" style={styles.bgImg}>
            <View style={styles.mainView}>
                <Text style={styles.heading}> Signup </Text>
                <Input title="Email" label="Email Address"   fun = {(val) => emailHandler(val)} onSubmitEditing={() =>  pass_ref.current.focus()} blurOnSubmit={false} returnKeyType={'next'}/>
                <Input title="Password" label="Password" fun = {(val) => loginHandler(val)}  inputreff={pass_ref} onSubmitEditing={() => fname_ref.current.focus()} blurOnSubmit={false} returnKeyType={'next'}/>
                <Input title="First Name" label="First Name" fun = {(val) =>  fnameHandler(val)} inputreff={fname_ref} onSubmitEditing={() => lname_ref.current.focus()} blurOnSubmit={false} returnKeyType={'next'}/>
                <Input title="Last Name" label="Last Name" fun = {(val) => lnameHandler(val)} inputreff={lname_ref} onSubmitEditing={() => zip_ref.current.focus()} blurOnSubmit={false} returnKeyType={'next'}/>
                <Input title="Zip code" label="Zip code" fun={(val) => zipHandler(val)} inputreff={zip_ref} returnKeyType={'done'}/>
                

                <Button title="Register" email={email} 
                password = {password}
                fname={fname}
                lname={lname}
                // zip={zip}
                setFun={validateForm}  />

                
               
               



            </View>
            
            </ImageBackground>
            
                
            </ScrollView>

           
           
        </SafeAreaView>
    );
};

export default Signup;