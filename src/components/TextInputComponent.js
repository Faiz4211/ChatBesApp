//import liraries
import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import colors from '../styles/colors';
import fontfamily from '../styles/fontfamily';
import { moderateScale } from '../styles/responsiveSize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MyComponent = ({
    placeholder = "",
    inputStyle = {},
    ...props

}) => {
    return (
        <Fragment>
            <TextInput
                style={styles.TextInput}
                placeholder={placeholder}
                {...props}
            />
        </Fragment>

    );
};


const styles = StyleSheet.create({

    TextInput: {
        marginTop: moderateScale(10),
        fontSize: hp(2.3),
        padding: moderateScale(12),
        borderBottomColor: colors.grey,
        fontFamily: fontfamily.regular,
        height: moderateScale(42),

    }

});


export default MyComponent;
