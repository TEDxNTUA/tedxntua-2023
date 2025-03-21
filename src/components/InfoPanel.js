import * as React from "react";
import { Row } from "reactstrap";
import { isMobile } from "react-device-detect";

import * as infoPanelStyles from "../styles/infoPanel.module.css";

const InfoPanel = ({ header, formattedText }) => {
    return (
        <Row className={infoPanelStyles.container}>
            <h1 className={`
            ${infoPanelStyles.infoHeader}
            `}>
                { header }
            </h1>
            <div className={infoPanelStyles.info}>
                { formattedText }
            </div>
            <div style={{display: (isMobile) ? "none":""}} className={infoPanelStyles.background}></div>
        </Row>
    );
}

export default InfoPanel;
