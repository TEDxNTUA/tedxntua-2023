import * as React from "react";
import { isMobile } from "react-device-detect";

import Speaker from "../components/Speaker";

import * as layoutStyles from "../styles/speakerLayout.module.css";

const SpeakerLayout = ({ speakerData }) => {

    const speakers = speakerData.map(s => (
        <Speaker key={s.id} fullName={s.name} picture={s.image} speciality={s.speciality} />
    ));
    
    const max = 3;
    const speakerRows = [];
    if (!isMobile) {
        for (let i=0; i<Math.floor(speakers.length / max); i++) {
            speakerRows.push(
                <div
                key={i}
                className={layoutStyles.row}
                >
                    {!isMobile && <div className={layoutStyles.rowBackground}></div>}
                    {speakers.slice(i*max, (i+1)*max)}
                </div>
            );
        }

        if (speakers.length % max > 0) {
            speakerRows.push(
                <div
                key={speakerRows.length}
                className={layoutStyles.row}
                >
                    {!isMobile && <div className={layoutStyles.rowBackground}></div>}
                    {speakers.slice(speakers.length-1-(speakers.length % max), speakers.length-1)}
                </div>
            );
        }
    }

    return (
        <div className={layoutStyles.container}>
            {(isMobile) ? speakers:speakerRows}
        </div>
    );
};

export default SpeakerLayout;