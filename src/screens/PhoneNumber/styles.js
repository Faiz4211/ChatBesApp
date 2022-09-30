import { StyleSheet } from "react-native"
import colors from "../../styles/colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import fontfamily from "../../styles/fontfamily";
import { moderateScale, moderateScaleVertical, textScale, verticalScale, width } from "../../styles/responsiveSize";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 0,
    },
    decsription: {
        fontSize: hp(2.4),
        textAlign: 'center',
        fontFamily: fontfamily.bold,
        margin: moderateScaleVertical(16),
    },
    dialCodeStyle: {
        fontSize: hp(2.3),
        fontFamily: fontfamily.bold,
        marginVertical: 10,
        alignSelf: 'center',
    },
    phoneInputStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        paddingHorizontal: moderateScale(10),
    },
    TextInput: {
        fontSize: hp(2.3),
        padding: moderateScale(12),
        borderBottomColor: colors.grey,
        fontFamily: fontfamily.regular,
    }
})

export default styles;