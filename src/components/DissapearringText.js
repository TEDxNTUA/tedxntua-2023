import * as React from "react";

import * as disTextStyles from "../styles/dissapearingText.module.css";

const DissapearingText = ({ text, className, style }) => {
    
    const wordList = text.split(' ').map((word, index) => {
        const spanList = Array.from(word).map((letter, letterIndex) => {
            if (letter === '_') {
                letter = ' ';
            }

            return (
                    <span
                    key={letterIndex}
                    className={`
                        ${className}
                        ${disTextStyles.letter}
                        ${disTextStyles.hide}
                    `}
                    style={{
                        ...style,
                        animationDelay: `${(index + letterIndex)*.2}s`
                    }}>
                        {letter}
                    </span>
            );
        });

        return (
            <div key={index}>
                { spanList }
            </div>
        );
    });

    return (
        <div className={disTextStyles.textContainer}>
            {wordList}
        </div>
    );
};

export default DissapearingText;