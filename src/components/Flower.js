import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import * as flowerStyles from "../styles/flower.module.css";

const Flower = ({ stroke, shadow, strokeWidth, style, className, onClick }) => {

    return (
        <div style={style} className={`${className} ${flowerStyles.container}`} onClick={onClick} alt="">
            {/* uncomment for the svg flower */}
            {/* <svg className={flowerStyles.front} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none"/>
                <circle cx="128" cy="128" r="28" fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}/><path d="M115,103.2c-7.3-15.4-15-34.6-15-47.2a28,28,0,0,1,56,0c0,12.6-7.7,31.8-15,47.2" fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}/><path d="M100,126.8c-17-1.3-37.5-4.3-48.4-10.6a28,28,0,0,1,28-48.4C90.5,74,103.3,90.3,113,104.4" fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}/><path d="M113,151.6c-9.7,14.1-22.5,30.4-33.4,36.6a28,28,0,1,1-28-48.4c10.9-6.3,31.4-9.3,48.4-10.6" fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}/><path d="M141,152.8c7.3,15.4,15,34.6,15,47.2a28,28,0,0,1-56,0c0-12.6,7.7-31.8,15-47.2" fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}/><path d="M156,129.2c17,1.3,37.5,4.3,48.4,10.6a28,28,0,0,1-28,48.4c-10.9-6.2-23.7-22.5-33.4-36.6" fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}/><path d="M143,104.4c9.7-14.1,22.5-30.4,33.4-36.6a28,28,0,0,1,28,48.4c-10.9,6.3-31.4,9.3-48.4,10.6" fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}/></svg>
            
            <svg className={flowerStyles.shadow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none"/>
            <circle cx="128" cy="128" r="28" fill="none" stroke={shadow} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}/><path d="M115,103.2c-7.3-15.4-15-34.6-15-47.2a28,28,0,0,1,56,0c0,12.6-7.7,31.8-15,47.2" fill="none" stroke={shadow} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}/><path d="M100,126.8c-17-1.3-37.5-4.3-48.4-10.6a28,28,0,0,1,28-48.4C90.5,74,103.3,90.3,113,104.4" fill="none" stroke={shadow} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}/><path d="M113,151.6c-9.7,14.1-22.5,30.4-33.4,36.6a28,28,0,1,1-28-48.4c10.9-6.3,31.4-9.3,48.4-10.6" fill="none" stroke={shadow} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}/><path d="M141,152.8c7.3,15.4,15,34.6,15,47.2a28,28,0,0,1-56,0c0-12.6,7.7-31.8,15-47.2" fill="none" stroke={shadow} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}/><path d="M156,129.2c17,1.3,37.5,4.3,48.4,10.6a28,28,0,0,1-28,48.4c-10.9-6.2-23.7-22.5-33.4-36.6" fill="none" stroke={shadow} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}/><path d="M143,104.4c9.7-14.1,22.5-30.4,33.4-36.6a28,28,0,0,1,28,48.4c-10.9,6.3-31.4,9.3-48.4,10.6" fill="none" stroke={shadow} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}/></svg> */}
            {/* uncomment for png flower */}
            <StaticImage className={flowerStyles.image} src='../images/header_flower.png' alt=""/>
            {/* <StaticImage className={`${flowerStyles.image} ${flowerStyles.shadowImage}`} src='../images/header_flower.png' /> */}
        </div>
    );
};

export default Flower;
