import React from 'react';

import * as mnemeLineStyles from '../styles/mnemeLine.module.css'

const MnemeLine = ({ reverse, text, borderText, className }) => {
    return (
        <div
        style={{
            flexDirection: reverse ? 'row-reverse':'row',
        }}
        className={`${mnemeLineStyles.mnemeLineContainer} ${className}`}>
            <div className={mnemeLineStyles.mnemeLine}></div>
            <div className={mnemeLineStyles.mnemeLineInfo}>
                {
                    text &&
                    <div className={mnemeLineStyles.mnemeLineTitle}>
                        { text }
                    </div>
                }
                {
                    borderText &&
                    <div className={mnemeLineStyles.mnemeLineDate}>
                        { borderText }
                    </div>
                }
            </div>
        </div>
    );
};

export default MnemeLine;