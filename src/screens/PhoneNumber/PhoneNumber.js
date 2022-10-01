import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import HorizontalLine from '../../components/HorizontalLine';
import strings from '../../constants/lang';
import ImagePath from '../../constants/ImagePath';;
import styles from './styles';
import CountryPicker from '../../components/CountryPicker';
import { moderateScale } from '../../styles/responsiveSize';
import WrapperContainer from '../../components/WrapperContainer';
import navigationStrings from '../../constants/navigationStrings';


const PhoneNumber = ({ navigation }) => {
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
        centerText={strings.ENTER_YOUR_PHONE_NUMBER}
        containerStyle={{ paddingHorizontal: moderateScale(8) }}
        leftCustomView={leftCustomView}
        isLeftView={true}
        onPressRight={() => navigation.navigate(navigationStrings.EDIT_PROFILE)}

      />
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
    </WrapperContainer>

  );
};


export default PhoneNumber;