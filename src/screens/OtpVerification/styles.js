import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from "../../styles/colors";
import fontfamily from "../../styles/fontfamily";
import { moderateScale } from "../../styles/responsiveSize";
const style = StyleSheet.create({
    decStyle: {
        fontSize: hp(3),
        fontFamily: fontfamily.bold,
        marginLeft: moderateScale(16),
        color: colors.grey,
        textAlign: 'center'
    },
    bottomStyle: {
        fontSize: hp(3),
        fontFamily: fontfamily.bold,
        marginLeft: moderateScale(16),
        color: colors.grey,
        textAlign: 'center'
    },
    inputStyle: {
        marginRight: 8,
        height: 42,
        borderBottomWidth: 1,
        textAlign: 'center'
    }
})

export default style;