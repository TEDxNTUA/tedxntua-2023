import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Row, Col } from "reactstrap";
import { isMobile } from 'react-device-detect';

import DropDownLinks from './Dropdown';
import Flower from './Flower';
import LocaleButton from './LocaleButton';
import { capitalize } from '../utils';

import * as styles from "../styles/main.module.css";
import * as headerStyles from "../styles/header.module.css";
import { useLocaleContext } from '../contexts/LanguageContext';

const Header = ({ currentPage }) => {

    const { locale } = useLocaleContext();
    const [open, setOpen] = useState(!isMobile);
    const [dropClicked, setDropClicked] = useState(false);

    const paths = {
        Home: {
            path: "/",
            name: (locale === "el-GR") ? "ΑΡΧΙΚΗ":"HOME",
        },
        Partners: {
            path: "/partners",
            name: (locale === "el-GR") ? "ΣΥΝΕΡΓΑΤΕΣ":"PARTNERS",
        },
        About: {
            path: "/about",
            name: (locale === "el-GR") ? "ΣΧΕΤΙΚΑ":"ABOUT",
        },
    };

    const dropdownPaths = {
        Speakers: {
            path: "/speakers",
            name: (locale === "el-GR") ? "ΟΜΙΛΗΤΕΣ":"SPEAKERS",
        },
        Workshops: {
            path: "/workshops",
            name: "WORKSHOPS",
        },
        Performers: {
            path: "/performers",
            name: "PERFORMERS",
        },
    };

    const links = Object.keys(paths).map((key, index) => {
        if (index > 0) {
            index += 3;
        }

        return (
            <Link
            key={key}
            to={`${paths[key].path}`}
            style={{
                opacity: (key.toLowerCase() === currentPage ) ? 1:.6,
                animationDelay: `${index*.1}s`
            }}
            className={`
            text-reset text-decoration-none
            ${styles.textShadowPrimary}
            ${headerStyles.link}
            ${(!open) ? styles.hideLink:""}
            ${(open) ? headerStyles.slideInLeft:""}
            `}
            >
                {paths[key].name}
            </Link>
        );
    });

    return (
        <div className={headerStyles.headerContainer}>
            <Row className={headerStyles.itemContainer}>
                <Col className={headerStyles.brandContainer} >
                    <div className={headerStyles.imageContainer}>
                        <Link to='/'>
                            <StaticImage src="../images/tedxntua_logo_whitetext.png" alt="TEDxNTUA logo" className={headerStyles.image} />
                        </Link> 
                    </div>
                    <LocaleButton className={headerStyles.localeButton}  />
                </Col>
                    {
                    !isMobile &&
                    <Col style={{display: (!isMobile) ? "flex":"none"}} className={headerStyles.linkContainer}>
                        <>
                            { links[0] }
                            <DropDownLinks
                            onClick={() => setDropClicked(!dropClicked)}
                            paths={dropdownPaths}
                            style={{opacity: (open) ? 1:0}}
                            className={`${(open) ? "":styles.hideLink}`}
                            currentPage={currentPage}
                            >
                                <span
                                className={`
                                ${styles.textShadowPrimary}
                                ${headerStyles.link}
                                `}
                                style={{opacity: (capitalize(currentPage) in dropdownPaths || dropClicked) ? 1:.6}}
                                >
                                    {(locale === "el-GR") && "ΕΚΔΗΛΩΣΗ" || "EVENT"}&nbsp;
                                    <i className='fa fa-caret-down'></i>
                                </span>
                            </DropDownLinks>
                            { links.slice(1) }
                        </>
                    </Col>
                    }
                <Col xs={{size: 3}} md={{size: 1}} className={headerStyles.mobileMenuContainer}>
                    <Flower
                    onClick={() => setOpen(!open)}
                    style={{ transition: "all .2s", transform: (open) ? "rotate(360deg)":"rotate(0deg)" }}
                    className={headerStyles.toggler}
                    stroke="#F6E9C7"
                    shadow="#C51731"
                    strokeWidth={12}
                    />

                    {
                    isMobile &&
                    <Col
                    style={{
                        display: (isMobile) ? "flex":"none",
                        opacity: (open) ? 1:0,
                    }}
                    className={`${headerStyles.mobileLinkContainer}`}>
                        <>
                            { links[0] }
                            <DropDownLinks
                            paths={dropdownPaths}
                            style={{opacity: (open) ? 1:0}}
                            permanentActive={open}
                            currentPage={currentPage}
                            />
                            { links.slice(1) }
                        </>
                    </Col>
                    }

                </Col>
            </Row>
        </div>
    );
}

export default Header;