import React from 'react';
import Page from '../components/Page';
import PageHead from '../components/PageHead';
import {Partner} from "../components/Partner"
import * as PartnersStyles from "../styles/partners.module.css"

const pageTitle = 'Partners';

const Partners = () => {
const [open, setOpen] = React.useState(false);
// const handleOpen = () => setOpen(true);
// const handleClose = () => setOpen(false);
console.log(open);
    return (
        <Page>
            <div className={PartnersStyles.titles}>
                <h2 className={PartnersStyles.title}>Knowledge Partner</h2>
                <div className={PartnersStyles.section}>
                    <Partner trigger={() => setOpen(true)}/>
                    <Partner trigger={() => setOpen(true)}/>
                    <Partner trigger={() => setOpen(true)}/>
                    <Partner trigger={() => setOpen(true)}/>
                    <Partner trigger={() => setOpen(true)}/>
                    <Partner trigger={() => setOpen(true)}/>
                </div>
                
            </div>
        </Page>
    )
}

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default Partners;