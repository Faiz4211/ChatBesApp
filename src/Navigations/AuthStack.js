import React from "react";
import navigationStrings from "../constants/navigationStrings";
import * as screens from '../screens';

export default function (Stack) {
    return (
        <>
            <Stack.Screen name={navigationStrings.TERMS_CONDITION} component={screens.TermsCondition} />
            <Stack.Screen name={navigationStrings.PHONE_NUMBER} component={screens.PhoneNumber} />
            <Stack.Screen name={navigationStrings.EDIT_PROFILE} component={screens.EditProfile} />
            <Stack.Screen name={navigationStrings.OTP_VERIFICATION} component={screens.otpVerification} />
        </>


    )
}