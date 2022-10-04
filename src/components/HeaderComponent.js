import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import strings from '../constants/lang';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../styles/colors';
import fontfamily from '../styles/fontfamily';
import { moderateScale } from '../styles/responsiveSize';

const HeaderComponent = ({
    centerText = "",
    rightText = strings.DONE,
    leftCustomView = () => { },
    isLeftView = false,
    containerStyle = {},
    rightTextStyle = {},
    onPressRight = () => { },
    isRight = true,
    rightPressActive = true,
    rightImg = "",

}) => {
    return (
        <View style={{
            ...styles.container,
            ...containerStyle,
        }}>
            {isLeftView ? leftCustomView() : <View />}
            <Text style={styles.centerTextStyle}>{centerText}</Text>
            {isRight ? <TouchableOpacity disabled={rightPressActive} onPress={onPressRight}>
                {rightImg ? <Image source={rightImg} /> : <Text style={{ ...styles.rightTextStyle, ...rightTextStyle }}>{rightText}</Text>}
            </TouchableOpacity> : <View />}
        </View>

    )
}


const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.6,
        borderColor: 'grey',
        paddingBottom: 12,
        paddingHorizontal: moderateScale(12)
    },
    centerTextStyle: {
        color: colors.black,
        fontFamily: fontfamily.bold,
        fontSize: hp(3)
    },
    rightTextStyle: {
        color: colors.grey,
        fontFamily: fontfamily.regular,
        fontSize: hp(2)
    }

})

export default HeaderComponent;

