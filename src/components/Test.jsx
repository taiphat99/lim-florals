import React from "react";
import { useTranslation } from "react-i18next";
// import i18next from './i18n'

export default function Test() {
    const { t, i18n } = useTranslation();

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("language", lng);
    };

    return (
        <div className="">
            <button onClick={() => handleChangeLng("vn")} className="px-4 py-2 rounded-lg border-[1px]">VIE</button>
            <button onClick={() => handleChangeLng("en")} className="px-4 py-2 rounded-lg border-[1px]">ENG</button>

            <h1>{i18next.t("hello")}</h1>
            <h1>{i18next.t("grate")}</h1>
        </div>
    );
}