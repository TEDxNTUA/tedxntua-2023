import * as React from "react";
import { Link } from "gatsby";

import * as styles from "../styles/main.module.css";
import * as dropdownStyles from "../styles/dropdown.module.css";

const DropDownLinks = ({ paths, children, style, className, permanentActive = false }) => {
    const [open, setOpen] = React.useState(false);
    
    const links = Object.keys(paths).map(key => {
        return (
            <Link
            key={key}
            to={paths[key]}
            className={`text-reset text-decoration-none ${styles.textShadowPrimary}`}>
                {key.toUpperCase()}
            </Link>
        );
    });

    return (
        <div onClick={() => setOpen(!open)} style={style} className={className}>
            <div className={dropdownStyles.header}>
                { children }
            </div>
            <div className={`${(!permanentActive) ? dropdownStyles.dropdownContainer:dropdownStyles.activeContainer}`}>
                <div
                className={dropdownStyles.linksContainer}
                style={{opacity: (open || permanentActive) ? 1:0}}
                >
                    { links }
                </div>
            </div>
        </div>
    );
};

export default DropDownLinks;