import React from 'react';

import Header from './Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const Page = ({ children }) => {
    return (
        <main>
            <Header />

            { children }
            
            {/* <Footer /> */}
        </main>
    )
}

export default Page;