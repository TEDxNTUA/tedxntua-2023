import * as React from "react";

import { useLocaleContext } from "../contexts/LanguageContext";

import * as localeButtonStyles from "../styles/locale.module.css";

const LocaleButton = () => {
    
    const { locale, changeLocale } = useLocaleContext();
    const changeLanguage = () => {
        changeLocale();
        window.location.reload();
    }

    return (
        <div onClick={changeLanguage} className={localeButtonStyles.container}>
            <div className={localeButtonStyles.text}>
                { locale.slice(0, 2).toUpperCase() }
            </div>
        </div>
    );
}

export default LocaleButton;