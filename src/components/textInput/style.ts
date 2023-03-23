import { StyleSheet } from "react-native";
import fonts from "../../assets/fonts";
export const styles = StyleSheet.create({
    mainview:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        backgroundColor: '#D8D8DD', 
        borderRadius: 4,
        paddingLeft: 20, 
        paddingRight:20,
        marginBottom: '7%'
    },
  
    title:{
        color: "#fff",
        marginBottom:'3%',
        fontFamily: fonts.BOLD,
        fontSize:15,
    },
    input:{
        
        flex:1,

        
        
        
    },
    logo:{ 
        marginTop: '73%', 
        paddingRight: '3%'
    }

});