import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import WrapperContainer from '../../components/WrapperContainer';
import ImagePath from '../../constants/ImagePath';
import strings from '../../constants/lang';
import { moderateScale } from '../../styles/responsiveSize';
import RoundImage from '../../components/RoundImage';
import styles from './styles';
import TextInputComponent from '../../components/TextInputComponent';
import HorizontalLine from '../../components/HorizontalLine';
import ImagePicker from 'react-native-image-crop-picker';
import androidCameraPermission from '../../utils/permission'
import colors from '../../styles/colors';
import fontfamily from '../../styles/fontfamily';
import navigationStrings from '../../constants/navigationStrings';

const EditProfile = ({ navigation, route }) => {

  const [state, setState] = useState({
    image: "",
    name: ""
  })

  const { image, name } = state


  const { data } = route.params

  const updateState = (data) => setState((state) => ({ ...state, ...data }))


  console.log("datadata", data)

  const leftCustomView = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Image source={ImagePath.icBackward} />
      </TouchableOpacity>
    )
  }

  const selectPhoto = async () => {
    const permissionStatus = await androidCameraPermission();
    if (permissionStatus) {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log(image);
        updateState({})
      });
    }
  }
  const onDone = () => {
    navigation.navigate(navigationStrings.OTP_VERIFICATION, { data: { ...state, ...data } })

  }

  return (
    <WrapperContainer containerStyle={{ paddingHorizontal: moderateScale(0) }}>

      <HeaderComponent
        centerText={strings.EDIT_PROFILE}
        containerStyle={{ paddingHorizontal: moderateScale(8) }}
        leftCustomView={leftCustomView}
        isLeftView={true}
        onPressRight={onDone}
        rightTextStyle={{
          color: name.length > 3 ? colors.lightblue : colors.grey,
          fontFamily: name.length > 3 ? fontfamily.bold : fontfamily.regular
        }}
        rightPressActive={name.length < 3}

      />

      {/* <HorizontalLine /> */}
      <View style={{
        margin: moderateScale(16),
        flex: 1,
      }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <RoundImage
            onPress={selectPhoto}
          />
          <Text style={styles.decStyle}>{strings.ENTER_YOUR_NAME}</Text>
        </View>

        <HorizontalLine />
        <TextInputComponent
          placeholder={strings.YOUR_NAME}
          onChangeText={text => updateState({ name: text })}
        />
        <HorizontalLine />
      </View>


    </WrapperContainer>

  )
}


export default EditProfile;
