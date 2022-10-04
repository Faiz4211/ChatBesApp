import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import WrapperContainer from '../../components/WrapperContainer';
import ImagePath from '../../constants/ImagePath';
import strings from '../../constants/lang';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';
import styles from './styles';
import OtpInputs from 'react-native-otp-inputs';


const OptVerification = ({ navigation, route }) => {

  const { data } = route?.params
  console.log("route params", data
  )


  const leftCustomView = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Image source={ImagePath.icBackward} />
      </TouchableOpacity>
    )
  }



  return (
    <WrapperContainer containerStyle={{ paddingHorizontal: moderateScale(0) }}>

      <HeaderComponent
        centerText={`${data?.selectedCountry?.dialCode} ${data.PhoneNumber}`}
        containerStyle={{ paddingHorizontal: moderateScale(8) }}
        leftCustomView={leftCustomView}
        isLeftView={true}
        isRight={false}

      />

      {/* <HorizontalLine /> */}
      <Text style={{ ...styles.decStyle, marginVertical: moderateScaleVertical(24) }}>{strings.WE_HAVE_SENT_YOU_AN_SMS}</Text>
      <Text style={styles.decStyle}>{strings.TO_COMPLETE_YOUR_PHONE_NUMBER}</Text>
      <View style={{
        marginHorizontal: moderateScale(16),
      }}>
        <OtpInputs
          placeholder='#'
          handleChange={(code) => console.log(code)}
          numberOfInputs={6}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: moderateScaleVertical(42)
          }}
          inputStyles={styles.inputStyle}
        />

        <View style={{ marginTop: moderateScaleVertical(42) }}>
          <Text style={
            styles.bottomStyle
          }>{strings.RESEND_CODE}</Text>
        </View>
      </View>

    </WrapperContainer>

  )
}


export default OptVerification;
