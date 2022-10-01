import React, { Fragment, useCallback, useState } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ImagePath from '../constants/ImagePath';
import colors from '../styles/colors';
import fontfamily from '../styles/fontfamily';
import Modal from "react-native-modal";
import Countries from './Countries';
import HorizontalLine from './HorizontalLine';
import HeaderComponent from './HeaderComponent';
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';
// import { SvgUri } from 'react-native-svg';



const CountryPicker = ({

    fetchCountry = () => { },
    value = ""
}) => {

    const [data, setData] = useState(Countries)
    const [showModal, setShowModal] = useState(false);

    const renderItem = useCallback(({ item, index }) => {
        let isSelected = value == item.name
        return (
            <TouchableOpacity
                style={{
                    marginHorizontal: 16,
                    padding: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',



                }}
                onPress={() => onSelectCountry(item)}
                activeOpacity={0.7}


            >

                {/* <SvgUri
                    width="80%"
                    height="90%"
                    uri={item?.flag}
                /> */}

                <Text style={{
                    ...styles.nameStyle,
                    color: isSelected ? colors.lightblue : colors.black,
                    fontFamily: isSelected ? fontfamily.bold : fontfamily.regular

                }}>{item?.name} ({item?.dialCode})</Text>
            </TouchableOpacity>
        )
    }, [data, value])

    const onSelectCountry = (item) => {
        fetchCountry(item)
        setShowModal(false)
    }


    return (
        <Fragment>
            <TouchableOpacity
                onPress={() => setShowModal(true)}
                activeOpacity={0.7}
                style={styles.container}
            >
                <Text style={styles.Text}>{value}</Text>
                <Image source={ImagePath.icForward}></Image>
            </TouchableOpacity>
            <Modal
                isVisible={showModal}
                style={{
                    backgroundColor: colors.white,
                    margin: 0,
                }}
            >
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <HeaderComponent
                            centerText="Select Your Country"
                            onPressRight={() => setShowModal(false)}


                        />
                        <View>
                            <FlatList
                                data={data}
                                renderItem={renderItem}
                                ItemSeparatorComponent={() => <HorizontalLine lineStyle={{ marginVertical: 12 }} />}
                                ListHeaderComponentStyle={() => <View style={{
                                    height: hp(2),
                                }} />}


                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: moderateScaleVertical(10),
        borderBottomWidth: 0.8,
        borderBottomColor: colors.grey,
        paddingVertical: 8,
        paddingHorizontal: moderateScale(16),
    },
    Text: {
        fontFamily: fontfamily.bold,
        color: colors.grey,
        fontSize: hp(2.5),
        color: colors.lightblue,
        fontfamily: fontfamily.bold,

    },
    nameStyle: {
        fontSize: hp(2),
        fontfamily: fontfamily.bold,
        textAlign: 'auto'

    }
})

export default React.memo(CountryPicker);