import { StyleSheet } from "react-native";
import fonts from "../../../assets/fonts";
export const styles = StyleSheet.create({
    mainView:{
        marginHorizontal:'9%'
    },
    bgImg: {
        height:'100%',
        
    },
    heading:{
        color:'white',
        fontFamily: fonts.BOLD,
        fontSize: 40,
        marginTop: "25%",
        marginLeft: "35%",
        marginBottom: "14%",

    },
    container : {
        marginTop: "15%",
        flexDirection: 'row',
         alignItems: 'center' ,
         marginBottom: 25,
    },
    horizontalLine:{ 
        flex: 1, 
        height: 1, 
        backgroundColor: 'white' 
    },
    lineTxt :{
        width: 90, 
        textAlign: 'center', 
        color:'white' ,
        fontFamily: fonts.REGULAR,
        
    }


});