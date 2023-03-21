import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "./style";

interface Props {
    title : string,
    email ?: boolean,
    password ?: boolean,
    fname ?: boolean,
    lname ?: boolean,
    zip ?: boolean,
    setFun ?: () => void,

}

const Button = ({title, setFun, email, password, fname, lname, zip} : Props) => {
    return(
        
            <TouchableOpacity style={styles.btn} onPress={setFun} activeOpacity = {email && password && fname && lname && zip ? 1 :0 }  >
            <Text style={styles.btnText}>{title}</Text>

        </TouchableOpacity>
        
       

    );
};

export default Button;