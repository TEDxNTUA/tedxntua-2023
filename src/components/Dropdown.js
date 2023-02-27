import * as React from "react";
import { Link } from "gatsby";

import { capitalize } from "../utils";

import * as styles from "../styles/main.module.css";
import * as dropdownStyles from "../styles/dropdown.module.css";
import * as headerStyles from "../styles/header.module.css";

const DropDownLinks = ({ paths, children, style, className, permanentActive = false, currentPage='', onClick=null }) => {
    const [open, setOpen] = React.useState(false);
    
    const links = Object.keys(paths).map((key, index) => {
        index += 1;
        
        return (
            <Link
            key={key}
            to={paths[key].path}
            style={{
                opacity: (open || permanentActive) ? ((capitalize(currentPage) === key) ? 1:.6):0,
                height: (open || permanentActive) ? `100%`:`0`,
                animationDelay: `${index*.1}s`,
            }}
            className={`
            text-reset text-decoration-none
            ${styles.textShadowPrimary}
            ${dropdownStyles.link}
            ${headerStyles.link}
            ${(open || permanentActive) ? "":styles.hideLink}
            ${(open || permanentActive) ? headerStyles.slideInLeft:""}
            `}>
                {paths[key].name}
            </Link>
        );
    });

    const backgroundStyle = { backgroundColor: (open) ? "var(--secondary-bg)":"rgba(30, 30, 30, .8)" };

    return (
        <div onClick={() => {
            if (onClick) {onClick()};
            setOpen(!open);
            }}
            style={style}
            className={className} >
            <div className={`
            ${dropdownStyles.header}
            ${dropdownStyles.link}
            `}>
                { children }
            </div>
            <div
            style={{
                opacity: (open || permanentActive) ? 1:0,
                height: (open || permanentActive) ? `200%`:`0`,
                }}
            className={`
            ${(!permanentActive) ? dropdownStyles.dropdownContainer:dropdownStyles.activeContainer}
            `}>
                <div
                className={`
                ${dropdownStyles.linksContainer}
                `}
                >
                    { links }
                </div>
            </div>
        </div>
    );
};

export default DropDownLinks;