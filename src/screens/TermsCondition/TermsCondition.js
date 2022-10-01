import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import WrapperContainer from '../../components/WrapperContainer';
import ImagePath from '../../constants/ImagePath';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import styles from './styles';

const TermsCondition = ({ navigation }) => {
    return (
        <WrapperContainer>
            <Image resizeMode='contain' style={styles.Image} source={ImagePath.icLogo} />
            <Text style={styles.heading}>{strings.WELCOME_TO_CHATBES}</Text>
            <Text style={styles.decsription}>{strings.READ_OUR} <Text style={{ color: colors.lightblue }}>{strings.PRIVACY_POLICY}</Text>.Tap <Text>{strings.AGREE_AND_CONTINUE}</Text>
                <Text style={{ color: colors.lightblue }}>{strings.TERMS_OF_SERVICE}</Text></Text>
            <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.PHONE_NUMBER)} activeOpacity={0.7}>
                <Text style={styles.agreeStyle}>{strings.CONTINUE}</Text>
            </TouchableOpacity>
        </WrapperContainer>

    );
};

export default TermsCondition;
