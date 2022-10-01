//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../styles/colors';
import fontfamily from '../styles/fontfamily';
import { moderateScale, width } from '../styles/responsiveSize';

// create a component
const RoundImage = ({
    image = '',
    size = 80,
    onPress = () => { }
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={{
                height: moderateScale(size),
                width: moderateScale(size),
                borderRadius: moderateScale(size / 2),
                backgroundColor: colors.white,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: colors.grey

            }}>
            {!!image ? <Image source={{ uri: image }} /> : <Text style={styles.textStyle}>Add Photo</Text>}
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    textStyle: {
        fontSize: hp(2.2),
        fontFamily: fontfamily.blackFont,
        color: colors.lightblue
    },
});

//make this component available to the app
export default RoundImage;
