import React from 'react';
import Page from '../components/Page';
import PageHead from '../components/PageHead';
import {Partner} from "../components/Partner"
import * as PartnersStyles from "../styles/partners.module.css"
import { Container } from 'reactstrap';
import * as Styles from "../styles/main.module.css"

const pageTitle = 'Partners';

const Partners = () => {
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
    return (
        <Page currentPage={`partners`}>
            <Container className={PartnersStyles.container}>
                <div className={PartnersStyles.titles}>
                    <h1 className={`${PartnersStyles.title} ${Styles.textShadowPrimary}`}>Knowledge Partner</h1>
                    <div className={PartnersStyles.section}>
                        <Partner />
                        <Partner />
                        <Partner />
                        <Partner/>
                        <Partner/>
                        <Partner />
                    </div>               
                </div>
            </Container>
        </Page>
        
    );
}

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default Partners;