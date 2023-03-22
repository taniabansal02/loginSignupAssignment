import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./style";

interface Props {
    title : string,
    label : string,
    fun ?: (params : string) => void;    
    inputreff ?: any;
    onSubmitEditing ?: any;
    blurOnSubmit?: boolean;
    
}

const Input = ({title, label, fun, inputreff, onSubmitEditing, blurOnSubmit} : Props) => {
    return(
        <View >
           <Text style={styles.title}> {title} </Text>
           <TextInput style={styles.input} placeholder= {label} onChangeText={fun} ref={inputreff} onSubmitEditing={onSubmitEditing} blurOnSubmit={blurOnSubmit}></TextInput>
        </View>

    );
};

export default Input;