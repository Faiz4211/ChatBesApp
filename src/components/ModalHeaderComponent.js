import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import strings from '../constants/lang';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../styles/colors';
import fontfamily from '../styles/fontfamily';
import Modal from "react-native-modal";

export default function ModelHeaderComponent() {
    const [showModal, setShowModal] = useState(false)
    const onPressRight = () => {
        setShowModal(false)
    }

    return (
        <View style={styles.container}>
            <Text />
            <Text style={styles.headerText}>{strings.SELECT_YOUR_COUNTRY}</Text>
            <TouchableOpacity onPress={onPressRight}>
                <Text style={styles.DoneText}>{strings.DONE}</Text>
            </TouchableOpacity>
            <View>

            </View>
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

