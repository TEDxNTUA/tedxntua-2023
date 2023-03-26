import * as React from "react";
import { isMobile } from "react-device-detect";

import Data from "../components/Data";

import * as layoutStyles from "../styles/dataLayout.module.css";

const DataLayout = ({ dataProp, type }) => {

    const data = dataProp.map(s => (
        <Data key={s.id} fullName={s.name} picture={s.image} speciality={s.speciality} type={type} />
    ));
    
    const max = 3;
    const dataRows = [];
    if (!isMobile) {
        for (let i=0; i<Math.floor(data.length / max); i++) {
            dataRows.push(
                <div
                key={i}
                className={layoutStyles.row}
                >
                    {!isMobile && <div className={layoutStyles.rowBackground}></div>}
                    {data.slice(i*max, (i+1)*max)}
                </div>
            );
        }

        if (data.length % max > 0) {
            dataRows.push(
                <div
                key={dataRows.length}
                className={layoutStyles.row}
                >
                    {!isMobile && <div className={layoutStyles.rowBackground}></div>}
                    {data.slice(data.length-1-(data.length % max), data.length-1)}
                </div>
            );
        }
    }

    return (
        <div className={layoutStyles.container}>
            {(isMobile) ? data:dataRows}
        </div>
    );
};

export default DataLayout;