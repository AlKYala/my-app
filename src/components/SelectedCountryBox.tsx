import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function SelectedCountryBox() {

    //@ts-ignore
    const code = useSelector((state) => state.code);

    return (<>
        <p>{code}</p>
    </>);
}

export default SelectedCountryBox;