import * as React from "react";

import { useLocaleContext } from "../contexts/LanguageContext";

import * as localeButtonStyles from "../styles/locale.module.css";

const LocaleButton = ({ className, style }) => {
    
    const { locale, changeLocale } = useLocaleContext();
    const changeLanguage = () => {
        changeLocale();
        window.location.reload();
    }

    return (
        <div onClick={changeLanguage} className={`${className} ${localeButtonStyles.container}`} style={style}>
            <div className={localeButtonStyles.text}>
                { locale.slice(0, 2).toUpperCase() }
            </div>
        </div>
    );
}

export default LocaleButton;