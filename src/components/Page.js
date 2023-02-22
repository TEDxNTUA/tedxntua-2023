import React from 'react';

import Header from './Header';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import * as styles from "../styles/main.module.css";

const Page = ({ currentPage, children }) => {
    return (
        <main>
            <Header currentPage={currentPage} />

            <div className={styles.globalContainer}>
                { children }
            </div>
            
            <Footer />
        </main>
    )
}

export default Page;