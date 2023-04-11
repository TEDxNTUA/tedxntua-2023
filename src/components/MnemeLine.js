import React from 'react';

import * as mnemeLineStyles from '../styles/mnemeLine.module.css'

const MnemeLine = () => {
    return (
        <div className={mnemeLineStyles.mnemeLineContainer}>
            <div className={mnemeLineStyles.mnemeLine}></div>
            <div className={mnemeLineStyles.mnemeLineInfo}>
                <div className={mnemeLineStyles.mnemeLineTitle}>
                    MNEME
                </div>
                <div className={mnemeLineStyles.mnemeLineDate}>
                    MAY 13
                </div>
            </div>
        </div>
    );
};

export default MnemeLine;