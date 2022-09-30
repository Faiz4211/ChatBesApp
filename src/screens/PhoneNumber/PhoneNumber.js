import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import HorizontalLine from '../../components/HorizontalLine';
import strings from '../../constants/lang';
import ImagePath from '../../constants/ImagePath';
import colors from '../../styles/colors';
import styles from './styles';
import CountryPicker from '../../components/CountryPicker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';


export default function PhoneNumber({ navigation }) {

  const [selectedCountry, setSelectedCountry] = useState({
    "name": "Pakistan",
    "dialCode": "+92",
    "isoCode": "PK",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/pk.svg"
  })

  const fetchCountry = (data) => {
    console.log("Country data", data)
    setSelectedCountry(data)
  }
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={styles.container}>
        <HeaderComponent />
        <Text style={styles.decsription}>{strings.CHATBES}</Text>
        <HorizontalLine />
        <CountryPicker
          fetchCountry={fetchCountry}
          value={selectedCountry?.name}
        />

        <View style={styles.phoneInputStyle}>
          <Text style={styles.dialCodeStyle}>{selectedCountry?.dialCode}</Text>
          <View style={{
            flex: 1
          }}>
            <TextInput
              style={styles.TextInput}
              placeholder='Enter Your Phone Number'
              keyboardType='phone-pad'
            />
          </View>

        </View>
      </View>

    </View>
  )
}

