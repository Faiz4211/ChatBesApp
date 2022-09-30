import React from "react";
import navigationStrings from "../constants/navigationStrings";
import TabRoutes from './TabRoutes';

export default function (Stack) {
    return (
        <>
            <Stack.Screen name="TAB_ROUTES" component={TabRoutes} />
        </>


    )
}