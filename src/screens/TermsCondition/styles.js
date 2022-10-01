import { StyleSheet } from "react-native"
import colors from "../../styles/colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import fontfamily from "../../styles/fontfamily";
import { moderateScale, moderateScaleVertical, textScale, verticalScale, width } from "../../styles/responsiveSize";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        paddingHorizontal: moderateScale(16),
    },

    Image: {
        height: hp(50),
        width: wp(100),
        alignSelf: 'center',
    },

    heading: {
        fontSize: hp(5),
        fontFamily: fontfamily.bold,
        color: colors.black,
        alignSelf: 'center',
    },

    decsription: {
        fontSize: hp(2.3),
        textAlign: 'center',
        marginTop: moderateScaleVertical(16),
        fontFamily: fontfamily.regular,
    },
    agreeStyle: {
        fontSize: hp(3),
        textAlign: 'center',
        fontFamily: fontfamily.bold,
        marginTop: moderateScaleVertical(24),
        color: colors.blue
    }
})

export default styles;