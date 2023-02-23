import * as React from "react";

const initialValue = {
    locale: localStorage.getItem("locale") || "el-GR",
};

const LocaleContext = React.createContext(initialValue);

const useLocaleContext = () => {
    const context = React.useContext(LocaleContext);

    if (!context) {
        throw new Error("useLocaleContext must be used within a LocaleContext.");
    }

    return context;
}

const LocaleContextProvider = ({ children }) => {
    const [locale, setLocale] = React.useState(localStorage.getItem("locale"));
    const changeLocale = () => locale === "el-GR" ? setLocale("en-US"):setLocale("el-GR");

    const value = {
        locale,
        changeLocale,
    };

    React.useEffect(() => {
        localStorage.setItem("locale", locale);
        console.log(localStorage.getItem("locale"));
        // window.location.reload();
        return () => window.location.reload();
    }, [locale]);

    return (
        <LocaleContext.Provider value={value}>
            { children }
        </LocaleContext.Provider>
    );
};

export {LocaleContextProvider, useLocaleContext};