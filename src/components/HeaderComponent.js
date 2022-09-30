import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import strings from '../constants/lang';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../styles/colors';
import fontfamily from '../styles/fontfamily';

export default function HeaderComponent() {
    return (
        <View style={styles.container}>
            <Text />
            <Text style={styles.headerText}>{strings.ENTER_YOUR_PHONE_NUMBER}</Text>
            <TouchableOpacity>
                <Text style={styles.DoneText}>{strings.DONE}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.6,
        borderColor: colors.grey,
        paddingBottom: 12,
        paddingHorizontal: 8,
    },
    headerText: {
        fontFamily: fontfamily.bold,
        color: colors.black,
        fontSize: hp(3),
        alignSelf: 'center'

    },
    DoneText: {
        fontFamily: fontfamily.bold,
        color: colors.lightblue,
        fontSize: hp(2),


    }
})

