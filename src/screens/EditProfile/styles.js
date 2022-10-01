import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from "../../styles/colors";
import fontfamily from "../../styles/fontfamily";
import { moderateScale } from "../../styles/responsiveSize";
const style = StyleSheet.create({
    decStyle: {
        fontSize: hp(2),
        fontFamily: fontfamily.bold,
        flex: 1,
        marginLeft: moderateScale(16),
        color: colors.grey
    }
})

export default style; 