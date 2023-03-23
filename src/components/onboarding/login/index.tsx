import React, { useState, useRef } from "react";
import { ImageBackground, SafeAreaView, ScrollView, Text, View, Switch } from "react-native";
import { styles } from "./style";
import Input from "../../textInput";
import Button from "../../button";
import { useNavigation } from "@react-navigation/native";
import routes from "../../../assets/routes";

const Login = () => {
    const pass_ref= useRef();
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const goToSignUp = () => {
        navigation.navigate(routes.onboarding.signup.path)
    }

    return (
        <SafeAreaView>

            <View >

                <ImageBackground source={require('../../../assets/images/bg.png')} resizeMode="cover" style={styles.bgImg}>
                    <View style={styles.mainView}>
                        <Text style={styles.heading}> Login </Text>
                        <Input title="Email" label="Email Address" onSubmitEditing={() => pass_ref.current && pass_ref.current.focus()}/>
                        <Input title="Password" label="Password"  display={true} fun={(val) => setPassword(val) } inputreff={pass_ref}/>
                        <Button title="Login" />

                        <View style={styles.container}>
                            <View style={styles.horizontalLine} />
                            <View>
                                <Text style={styles.lineTxt}>Or login with</Text>
                            </View>
                            <View style={styles.horizontalLine}/>
                        </View>

                        <Button title="Sign Up" setFun={goToSignUp}/>


                    </View>


                </ImageBackground>
            </View>

        </SafeAreaView>
    );
};

export default Login;